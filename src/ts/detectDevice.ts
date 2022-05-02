import { Browser } from './browser';
import { iosProperty } from './iosProperty';

export default class DetectDevice {
    private browser: Browser;

    constructor() {
        this.browser = new Browser();
    }

    /* ----------------------
     * Group of device
     */

    isSmartphone(): boolean {
        if (
            this.isiPhone() ||
            this.isiPod() ||
            this.isAndroidMobile()
        ) {
            return true;
        }
        return false;
    }

    isTablet(): boolean {
        if (
            this.isiPad() ||
            this.isAndroidTablet()
        ) {
            return true;
        }
        return false;
    }

    isDesktop(): boolean {
        if (
            !this.isSmartphone() &&
            !this.isTablet()
        ) {
            return true;
        }
        return false;
    }

    /* ----------------------
     * iOS device
     */

    isiPhone(): boolean {
        let u = this.browser.requestUserAgent();
        if (u.indexOf('iPhone') > -1) {
            return true;
        }
        return false;
    }

    isiPod(): boolean {
        let u = this.browser.requestUserAgent();
        if (u.indexOf('iPod') > -1) {
            return true;
        }
        return false;
    }

    isiPad(): boolean {
        let u = this.browser.requestUserAgent();
        if (u.indexOf('iPad') > -1) {
            return true;
        }
        return false;
    }

    /* ----------------------
     * Android OS device
     */

    isAndroid(): boolean {
        let u = this.browser.requestUserAgent();
        if (u.indexOf('Android') > -1) {
            return true;
        }
        return false;
    }

    isAndroidMobile(): boolean {
        let u = this.browser.requestUserAgent();
        if (u.indexOf('Android') > -1 && u.indexOf('Mobile') > -1) {
            return true;
        }
        return false;
    }

    isAndroidTablet(): boolean {
        let u = this.browser.requestUserAgent();
        if (u.indexOf('Android') > -1 && u.indexOf('Mobile') < 0) {
            return true;
        }
        return false;
    }

    /* ----------------------
     * iOS Property
     */

    requestResolutioniPhone(modelName: Readonly<string>): {width:number, height:number} {
        const property = new iosProperty();

        type Resolution = {
            width: number;
            height: number;
        }
        let resolution: Resolution = {
            width: 0,
            height: 0
        };

        for (const key in property.resolutioniPhone) {
            if (key == modelName) {
                resolution = property.resolutioniPhone[key];
                break;
            }
        }

        return resolution;
    }

}
