/*!
 * popup-centered v1.0.4
 * (c) 2018-present Nikita Nafranets <eddimensi@gmail.com>
 * Released under the MIT License.
 */
const StringBoolean = (bool) => bool ? 'yes' : 'no';
function createOptions(settings) {
    const result = {};
    Object.defineProperty(result, 'toString', {
        value() {
            return Object.keys(this).map((key) => `${key}=${this[key]}`).join(',');
        },
        writable: false,
        enumerable: false
    });
    return Object.keys(settings).reduce((acc, key) => {
        if (typeof settings[key] === 'boolean') {
            result[key] = StringBoolean(settings[key]);
        }
        else {
            result[key] = settings[key];
        }
        return result;
    }, result);
}
const getScreenPosition = () => {
    let screenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    let screenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
    return {
        screenLeft,
        screenTop
    };
};
const getSizeWindow = () => {
    let windowWidth = window.innerWidth
        ? window.innerWidth
        : document.documentElement.clientWidth
            ? document.documentElement.clientWidth
            : screen.width;
    let windowHeight = window.innerHeight
        ? window.innerHeight
        : document.documentElement.clientHeight
            ? document.documentElement.clientHeight
            : screen.height;
    return {
        windowWidth,
        windowHeight
    };
};
const calcPosition = (windowSize, popupSize, offset) => ((windowSize / 2) - (popupSize / 2)) + offset;

function PopupCentered(url, title, widthOrOptions, height) {
    const { screenLeft, screenTop } = getScreenPosition();
    const { windowWidth, windowHeight } = getSizeWindow();
    let options = null;
    if (typeof widthOrOptions === 'number' && typeof height === 'number') {
        options = createOptions({
            width: widthOrOptions,
            height,
            left: calcPosition(windowWidth, widthOrOptions, screenLeft),
            top: calcPosition(windowHeight, height, screenTop),
            scrollbars: true
        });
    }
    if (typeof widthOrOptions === 'object') {
        options = createOptions(Object.assign({}, {
            left: calcPosition(windowWidth, widthOrOptions.width, screenLeft),
            top: calcPosition(windowHeight, widthOrOptions.height, screenTop)
        }, widthOrOptions));
    }
    const newWindow = window.open(url, title, options.toString());
    if (window.focus) {
        newWindow.focus();
    }
    return newWindow;
}

export default PopupCentered;
