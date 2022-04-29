const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const packagejson = require('./package.json');

module.exports = {
    // 'production' or 'development' or 'none'
    mode: 'production',

    // EntryPoint
    entry: './src/ts/index.ts',

    output: {
        path: path.join(__dirname, 'dist/js'),
        library: {
            type: 'umd',
            name: 'detectDevice',
        },
        filename: 'detectDevice.js'
    },

    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader'
        }],

    },

    resolve: {
        modules: [
            "node_modules",
        ],
        extensions: [
            '.ts',
            '.js'
        ]
    },

    plugins: [
        new webpack.BannerPlugin({
            banner: `${packagejson.name} ${packagejson.version}, ${packagejson.author}, ${packagejson.license} License`
        })
    ],

    optimization: {
        minimizer: [new TerserPlugin({
            extractComments: false,
        })],
    }
};