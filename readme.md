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

Dependencies : `./src/ts/browser.ts`

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
- Device Type
    - `isSmartphone()`
    - `isTablet()`
    - `isDesktop()`
- SmartPhone
    - `isiPhone()`
    - `isiPod()`
    - `isAndroidMobile()`
- Tablet
    - `isiPad()`
    - `isAndroidTablet()`

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
