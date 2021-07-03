---
template: post
title: 'Setup React Native environment on Ubuntu'
featuredImage: '../featuredImages/react-native.png'
date: '2019-12-11'
author: 'Pabon'
profileUrl: 'https://github.com/shahnawaz-pabon'
category:
    - ReactNative
tags: 
    - react-native
    - ubuntu
    - android
---

<h3>#:flashlight: Install node and npm</h3>

**#:boat: Using Ubuntu**

<div class=fakeMenu>
  <div class="fakeButtons fakeClose"></div>
  <div class="fakeButtons fakeMinimize"></div>
  <div class="fakeButtons fakeZoom"></div>
</div>

```bash
$ sudo apt install curl
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
$ sudo apt-get install -y nodejs
$ node -v
v10.17.0
$ npm -v
6.11.3
```

**#:boat: Using Debian, as root**

<div class=fakeMenu>
  <div class="fakeButtons fakeClose"></div>
  <div class="fakeButtons fakeMinimize"></div>
  <div class="fakeButtons fakeZoom"></div>
</div>

```bash
$ curl -sL https://deb.nodesource.com/setup_10.x | bash -
$ sudo apt-get install -y nodejs
```

<br/>
<h3>#:flashlight: Install react-native-cli</h3>

<div class=fakeMenu>
  <div class="fakeButtons fakeClose"></div>
  <div class="fakeButtons fakeMinimize"></div>
  <div class="fakeButtons fakeZoom"></div>
</div>

```bash
$ sudo npm install -g react-native-cli
$ react-native --version
react-native-cli: 2.0.1
```

<br/>
<h3>#:flashlight: Setup Android development environment</h3>

**[Download android studio](https://developer.android.com/studio/index.html)**. In my case downloaded file's name was `android-studio-ide-191.6010548-linux.tar.gz` and I kept it into my home directory. Then follow these steps

<div class=fakeMenu>
  <div class="fakeButtons fakeClose"></div>
  <div class="fakeButtons fakeMinimize"></div>
  <div class="fakeButtons fakeZoom"></div>
</div>

```bash
$ cd ~
$ tar xvzf android-studio-ide-191.6010548-linux.tar.gz
$ cd android-studio/bin/
$ ./studio.sh
```

After completing the installation of android studio, you need to install these from android studio.

- **Android SDK**
- **Android SDK Platform**
- **Android Virtual Device**

To do that just go to `Appearance & Behavior → System Settings → Android SDK` from android studio and select your SDK platform and install.

Then you need to set up `ANDROID_HOME` environment variables in order to build react native apps with native code. Now edit your `.bashrc` file and add these lines into it.

<div class=fakeMenu>
  <div class="fakeButtons fakeClose"></div>
  <div class="fakeButtons fakeMinimize"></div>
  <div class="fakeButtons fakeZoom"></div>
</div>

```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

After adding those lines save it and run `source .bashrc` via terminal to keep running source to get the aliases working in any new login terminal instances.

<div class=fakeMenu>
  <div class="fakeButtons fakeClose"></div>
  <div class="fakeButtons fakeMinimize"></div>
  <div class="fakeButtons fakeZoom"></div>
</div>

```bash
$ source .bashrc
```

<br/>
<h3>#:flashlight: Install java on your Ubuntu system</h3>

<div class=fakeMenu>
  <div class="fakeButtons fakeClose"></div>
  <div class="fakeButtons fakeMinimize"></div>
  <div class="fakeButtons fakeZoom"></div>
</div>

```bash
$ sudo apt update
$ sudo apt install default-jdk
$ java -version
# Output
openjdk version "11.0.4" 2019-07-16
OpenJDK Runtime Environment (build 11.0.4+11-post-Ubuntu-1ubuntu218.04.3)
OpenJDK 64-Bit Server VM (build 11.0.4+11-post-Ubuntu-1ubuntu218.04.3, mixed mode, sharing)
```

So you have successfully installed `java` on your `Ubuntu` system. My version was `Ubuntu 18.04.3 LTS`. At this point you are all set of working with react-native.

<br/>
<h3>#:flashlight: Test your first react-native app</h3>

First connect your android phone with a usb. Then run these commands

<div class=fakeMenu>
  <div class="fakeButtons fakeClose"></div>
  <div class="fakeButtons fakeMinimize"></div>
  <div class="fakeButtons fakeZoom"></div>
</div>

```bash
$ react-native init testReactApp
$ cd testReactApp/
$ react-native start

# Open another terminal, go to testReactApp's directory and run this command
$ react-native run-android
```

After a while, you will see your running app into your android phone.

<br/>
<div align='center'><h3> ~ Good Luck and Have fun #:snowman: ~ </h3></div>
