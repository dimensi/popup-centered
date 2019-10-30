# popup-centered
The little function for open window popup on center display

created by [this answer](https://stackoverflow.com/questions/4068373/center-a-popup-window-on-screen)

## Install
```sh
npm i popup-centered # or
yarn add popup-centered
```

## Usage
```js
import popupCentered from 'popup-centered'
const popup = popupCentered('https://fb.com/', 'Facebook popup', 600, 400)
popup.close()
const popup2 = popupCentered('https://fb.com/', 'Facebook popup', {
  width: 600,
  height: 400,
  menubar: 'no',
  toolbar: 'no',
  location: 'no,
})
popup2.close()
```
