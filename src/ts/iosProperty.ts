interface resolutionDetail {
    width: number;
    height: number;
}

interface resolutionBody {
    [key: string]: resolutionDetail;
}

class iosProperty {
    /*
     * iOS Resolution
     * Refer : https://qiita.com/tomohisaota/items/f8857d01f328e34fb551
     */

    // Release date descending order
    readonly resolutioniPhone: resolutionBody = {
        'se3':       {'width': 375, 'height': 667},

        '13':        {'width': 390, 'height': 844},
        '13mini':    {'width': 375, 'height': 812},
        '13pro':     {'width': 390, 'height': 844},
        '13promax':  {'width': 428, 'height': 926},

        '12':        {'width': 390, 'height': 844},
        '12mini':    {'width': 375, 'height': 812},
        '12pro':     {'width': 390, 'height': 844},
        '12promax':  {'width': 428, 'height': 926},

        'se2':       {'width': 375, 'height': 667},

        '11':        {'width': 414, 'height': 896},
        '11pro':     {'width': 375, 'height': 812},
        '11promax':  {'width': 414, 'height': 896},

        'x':         {'width': 375, 'height': 812},
        'xs':        {'width': 375, 'height': 812},
        'xsmax':     {'width': 414, 'height': 896},
        'xr':        {'width': 414, 'height': 896},

        '8':         {'width': 375, 'height': 667},
        '8plus':     {'width': 414, 'height': 736},

        '7':         {'width': 375, 'height': 667},
        '7plus':     {'width': 414, 'height': 736},

        'se':        {'width': 320, 'height': 568}
    };
}

export { iosProperty }