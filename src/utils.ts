type stringBoolean = 'yes' | 'no'
export const StringBoolean = (bool: boolean): stringBoolean => bool ? 'yes' : 'no'

export interface WindowFeatures {
  left?: number
  top?: number,
  width?: number,
  height?: number,
  menubar?: stringBoolean,
  toolbar?: stringBoolean,
  location?: stringBoolean,
  status?: stringBoolean,
  resizable?: stringBoolean,
  scrollbars?: stringBoolean
  toString (): string
}

export interface WindowFeaturesOptions {

  /**
   * Specifies the distance the new window is placed from the left side of the work area for applications of the user's operating system to the leftmost border (resizing handle) of the browser window. The new window can not be initially positioned offscreen.
   * @type {number}
   * @memberof WindowFeaturesOptions
   */
  left?: number

  /**
   * Specifies the distance the new window is placed from the top side of the work area for applications of the user's operating system to the topmost border (resizing handle) of the browser window. The new window can not be initially positioned offscreen.
   * @type {number}
   * @memberof WindowFeaturesOptions
   */
  top?: number,

  /**
   * Specifies the height of the content area, viewing area of the new secondary window in pixels. The height value includes the height of the horizontal scrollbar if present. The minimum required value is 100.
   * @type {number}
   * @memberof WindowFeaturesOptions
   */
  width?: number,

  /**
   * Specifies the width of the content area, viewing area of the new secondary window in pixels. The width value includes the width of the vertical scrollbar if present. The width value does not include the sidebar if it is expanded. The minimum required value is 100.
   * @type {number}
   * @memberof WindowFeaturesOptions
   */
  height?: number,

  /**
   * If this feature is on, then the new secondary window renders the menubar.
   * @type {boolean}
   * @memberof WindowFeaturesOptions
   */
  menubar?: boolean,

  /**
   * If this feature is on, then the new secondary window renders the Navigation Toolbar (Back, Forward, Reload, Stop buttons). In addition to the Navigation Toolbar, Mozilla-based browsers will render the Tab Bar if it is visible, present in the parent window. (If this feature is set to no all toolbars in the window will be invisible, for example extension toolbars).
   * @type {boolean}
   * @memberof WindowFeaturesOptions
   */
  toolbar?: boolean,

  /**
   * If this feature is on, then the new secondary window renders the Location bar in Mozilla-based browsers. MSIE 5+ and Opera 7.x renders the Address Bar.
   * 
   * **NOTE:** You cannot remove the address bar in modern browsers. That is a security measure. The user must always know what page they are on. Address bar also let user know, what type of security is on that page (HTTP or HTTPS).
   * @type {boolean}
   * @memberof WindowFeaturesOptions
   */
  location?: boolean,

  /**
   * If this feature is on, then the new secondary window has a status bar. Users can force the rendering of status bar in all Mozilla-based browsers, in MSIE 6 SP2 (Note on status bar in XP SP2) and in Opera 6+. The default preference setting in recent Mozilla-based browser releases and in Firefox 1.0 is to force the presence of the status bar.
   * @type {boolean}
   * @memberof WindowFeaturesOptions
   */
  status?: boolean,

  /**
   * If this feature is on, the new secondary window will be resizable.
   * @type {boolean}
   * @memberof WindowFeaturesOptions
   */
  resizable?: boolean,

  /**
   * If this feature is on, the new secondary window will show horizontal and/or vertical scrollbar(s) if the document doesn't fit into the window's viewport.
   * @type {boolean}
   * @memberof WindowFeaturesOptions
   */
  scrollbars?: boolean
}

export function createOptions (settings: WindowFeaturesOptions): WindowFeatures {
  const result = {}
  Object.defineProperty(result, 'toString', {
    value () {
      return Object.keys(this).map((key) => `${key}=${this[key]}`).join(',')
    },
    writable: false,
    enumerable: false
  })

  return Object.keys(settings).reduce((acc, key) => {
    if (typeof settings[key] === 'boolean') {
      result[key] = StringBoolean(settings[key])
    } else {
      result[key] = settings[key]
    }
    return result
  }, result)
}

export const getScreenPosition = () => {
  let screenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX
  let screenTop = window.screenTop !== undefined ? window.screenTop : window.screenY

  return {
    screenLeft,
    screenTop
  }
}

export const getSizeWindow = () => {
  let windowWidth = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
      ? document.documentElement.clientWidth
      : screen.width
  let windowHeight = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
      ? document.documentElement.clientHeight
      : screen.height

  return {
    windowWidth,
    windowHeight
  }
}

export const calcPosition = (windowSize: number, popupSize: number, offset: number): number =>
  ((windowSize / 2) - (popupSize / 2)) + offset
