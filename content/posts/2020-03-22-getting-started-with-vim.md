---
template: post
title:  'Getting Started with Vim'
featuredImage: '../featuredImages/vim.png'
date: '2020-03-22'
category:
  - Vim
tags: 
  - vim
---

## Table of Contents
&nbsp;&nbsp;&nbsp;&nbsp; #:beginner: &nbsp; **[Introduction](#introduction)** <br/>
&nbsp;&nbsp;&nbsp;&nbsp; #:beginner: &nbsp; **[Modes](#modes)** <br/>
&nbsp;&nbsp;&nbsp;&nbsp; #:beginner: &nbsp; **[Basic Movements](#basic-movements)** <br/>
&nbsp;&nbsp;&nbsp;&nbsp; #:beginner: &nbsp; **[Word Movements](#word-movements)** <br/>

<h3 id="introduction">#:beginner: Introduction</h3>

**`Vim`** is one of the most powerful text editors I have ever used in CLI(Command Line Interface). There are so many files which need to be opened or edited. **`Vim`** can be the best choice because **`Vim`** is more than an editor. #:sunglasses:


Installation commands on **`Ubuntu`**:

<div class=fakeMenu>
  <div class="fakeButtons fakeClose"></div>
  <div class="fakeButtons fakeMinimize"></div>
  <div class="fakeButtons fakeZoom"></div>
</div>

```bash
$ sudo apt update
$ sudo apt install vim
```

<h3 id="modes">#:beginner: Modes</h3>

There are two modes in **`Vim`**.
- **`insert`** mode (**`In this mode you can edit texts in your own way`**)
- **`normal`** mode (**`In this mode you can manipulate and play with texts according to some instructions`**)

**`To switch between these modes` you need to use `Esc` for `normal` mode and `i` for `insert` mode**.

<h3 id="basic-movements">#:beginner: Basic Movements</h3>

You can move the cursor using following keys instead of uding arrow keys:

- **`h` for moving towards `left`**
- **`l` for moving towards `right`**
- **`k` for moving towards `up`**
- **`j` for moving towards `down`**

<h3 id="word-movements">#:beginner: Word Movements</h3>

Movement between words is possible via these keys:

- **`w` or `W` for moving to the beginning of the next word from current cursor and will continue**
- **`b` or `B` for moving to the beginning of the previous word from current cursor and will continue**
- **`e` or `E` for moving to the end of the next word from current cursor and will continue**

**Use `number` before these keys for moving fast e.g. `3w` or `3W` means cursor will move to the beginning of the `3rd next word`**.