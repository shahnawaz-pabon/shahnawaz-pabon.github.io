---
template: post
title:  'React Native Signed APK'
featuredImage: '../featuredImages/react-native.png'
date: '2020-06-02'
author: 'Pabon'
profileUrl: 'https://github.com/PabonSEC'
category:
  - ReactNative
tags: 
  - react-native
  - android
---

We need to generate a signed release apk in order to distribute our android application through **[Google Play Store](https://play.google.com/store)**. So we will see the process in 4 steps.

<h3 style="color: #1abc9c">#:aerial_tramway: Generating a Signing Key</h3>

By using **`keytool`**, we can generate a private signing key in this way:

```bash
$ keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

So it will prompt you for passwords for the keystore and key. After that it will generate **`my-release-key.keystore`** file in your current directory.

<h3 style="color: #1abc9c">#:aerial_tramway: Setting up Gradle Variables</h3>

Fistly, we need to place **`my-release-key.keystore`** file in **`android/app`** directory.
Secondly, we need to edit the **`android/gradle.properties`** and add the following which are going to be global gradle variables.

```bash
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=*****
MYAPP_RELEASE_KEY_PASSWORD=*****
```

