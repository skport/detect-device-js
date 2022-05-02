# detect-device-js

## Overview
A TypeScript library to determine the type of device the user is using. It can also be used with legacy JavaScript.

## Usage
To determine if the UserAgent is iPhone, do the following.

### TypeScript

```
import DetectDevice from './src/ts/detectDevice';

let detectDevice = new DetectDevice();

console.log(
    detectDevice.isiPhone()
);
```

Dependencies : `./src/ts/browser.ts`, `./src/ts/iosProperty.ts`

### Legacy-JavaScript

There is a javascript file that has already been compiled. Please use this.

```
<script src="./dist/js/detectDevice.js"></script>
<script type="text/javascript">
    console.log(
        detectDevice.cmd.isiPhone()
    );
</script>
```

Example : `./dist/html/index.html`

## Feature

### Functions
- Group of device
    - `isSmartphone()`
    - `isTablet()`
    - `isDesktop()`
- Smartphone
    - `isiPhone()`
    - `isiPod()`
    - `isAndroidMobile()`
- Tablet
    - `isiPad()`
    - `isAndroidTablet()`
- iPhone Display Browser Resolution
    - `requestResolutioniPhone()`

### Get browser resolution for iPhone 13

```
<script src="./dist/js/detectDevice.js"></script>
<script type="text/javascript">
    console.log(
        detectDevice.cmd.requestResolutioniPhone('13');
    );
</script>
```

If a model not defined is specified, '0' is return.
Defined iPhone models : `./src/ts/iosProperty.ts`

## License

LGPL

## Directory
- dist
    - compiled javascript for production
- src
    - typescript source code 
- package-lock.json
- package.json
- tsconfig.json
- webpack.config.js
