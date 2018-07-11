import {
  calcPosition,
  createOptions,
  getScreenPosition,
  getSizeWindow,
  WindowFeatures,
  WindowFeaturesOptions
} from './utils'

function popupCentered (url: string,title: string, widthOrOptions: number | WindowFeaturesOptions,height?): Window {
  const { screenLeft, screenTop } = getScreenPosition()
  const { windowWidth, windowHeight } = getSizeWindow()

  let options: WindowFeatures = null

  if (typeof widthOrOptions === 'number' && typeof height === 'number') {
    options = createOptions({
      width: widthOrOptions,
      height,
      left: calcPosition(windowWidth, widthOrOptions, screenLeft),
      top: calcPosition(windowHeight, height, screenTop),
      scrollbars: true
    })
  }

  if (typeof widthOrOptions === 'object') {
    options = createOptions(
      Object.assign(
        {},
        {
          left: calcPosition(windowWidth, widthOrOptions.width, screenLeft),
          top: calcPosition(windowHeight, widthOrOptions.height, screenTop)
        },
        widthOrOptions
      )
    )
  }

  const newWindow = window.open(url, title, options.toString())
  if (window.focus) {
    newWindow.focus()
  }

  return newWindow
}

export default popupCentered
