---
title:  'Add Custom Fonts in React Native Android'
featuredImage: '../featuredImages/react-native.png'
date: '2019-12-20'
category:
  - React-Native
tags: 
  - react-native
---

### Version of react-native > 0.60

Firstly download your fonts from **[Google Fonts](https://fonts.google.com/)**. Suppose you have downloaded `Lato` font. Then create an `assets` folder, `react-native.config.js` file into your react-native's root directory and copy all the `.ttf` files extracted from  downloaded `zip` file. Add following codes into `react-native.config.js` file.

```javascript
module.exports = {
  project: {
    ios: {},
    android: {}
  },
  assets: ['./assets/fonts/']
}
```

Then run this command in your project's directory.

```bash
$ react-native link
```

Add **`fontFamily: 'Lato-Bold'`** in your `StyleSheet` and run

```bash
$ react-native run-android
```

Hopefully you can see your added font.
