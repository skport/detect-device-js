import { Browser } from './browser';

export default class DetectDevice {
    private browser: Browser;

    constructor() {
        this.browser = new Browser();
    }

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

}
