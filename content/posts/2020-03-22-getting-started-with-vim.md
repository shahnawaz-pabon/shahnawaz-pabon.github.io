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
&nbsp;&nbsp;&nbsp;&nbsp; #:beginner: &nbsp; **[Movements](#movements)** <br/>
&nbsp;&nbsp;&nbsp;&nbsp; #:beginner: &nbsp; **[Insert](#insert)** <br/>
&nbsp;&nbsp;&nbsp;&nbsp; #:beginner: &nbsp; **[Find](#find)** <br/>
&nbsp;&nbsp;&nbsp;&nbsp; #:beginner: &nbsp; **[Go to](#goto)** <br/>
&nbsp;&nbsp;&nbsp;&nbsp; #:beginner: &nbsp; **[Search](#search)** <br/>
&nbsp;&nbsp;&nbsp;&nbsp; #:beginner: &nbsp; **[Remove and Delete](#remove-delete)** <br/>
&nbsp;&nbsp;&nbsp;&nbsp; #:beginner: &nbsp; **[Replace and Repetition](#replace-repetition)** <br/>
&nbsp;&nbsp;&nbsp;&nbsp; #:beginner: &nbsp; **[Visual Mode](#visual-mode)** <br/>
&nbsp;&nbsp;&nbsp;&nbsp; #:beginner: &nbsp; **[Practice](#practice)** <br/>

<h3 id="introduction" style="color: #1abc9c">#:beginner: Introduction</h3>

**`Vim`** is one of the most powerful text editors I have ever used in CLI(Command Line Interface). There are so many files which need to be opened or edited. **`Vim`** can be the best choice because **`Vim`** is more than an editor. #:sunglasses:


Installation commands on **`Ubuntu`:**

<div class=fakeMenu>
  <div class="fakeButtons fakeClose"></div>
  <div class="fakeButtons fakeMinimize"></div>
  <div class="fakeButtons fakeZoom"></div>
</div>

```bash
$ sudo apt update
$ sudo apt install vim
```

<h3 id="modes" style="color: #1abc9c">#:beginner: Modes</h3>

There are two basic modes in **`Vim`**.
- **`insert` mode (`In this mode you can edit texts in your own way`**).
- **`normal` mode (`In this mode you can manipulate and play with texts according to some instructions`**).

**`To switch between these modes` you need to use `Esc` for `normal` mode and `i` for `insert` mode**.

There is another mode in vim called **`visual mode`**. It is described **[here](#visual-mode)**.

<h3 id="movements" style="color: #1abc9c">#:beginner: Movements</h3>

#### #:walking: Basic Movements

You can move the cursor using following keys instead of uding arrow keys:

- **`h` for moving towards `left`**.
- **`l` for moving towards `right`**.
- **`k` for moving towards `up`**.
- **`j` for moving towards `down`**.

#### #:walking: Word Movements

Movement between words is possible via these keys:

- **`w` or `W` for moving to the beginning of the next word from current cursor and will continue**.
- **`b` or `B` for moving to the beginning of the previous word from current cursor and will continue**.
- **`e` or `E` for moving to the end of the next word from current cursor and will continue**.

**Use `number` before these keys for moving fast e.g. `3w` or `3W` means cursor will move to the beginning of the `3rd next word`**.

<h3 id="insert" style="color: #1abc9c">#:beginner: Insert</h3>

#### #:pencil: Insert Text Repeatedly

Suppose you want to insert **`yes`** 30 times consecutively. Steps will be as follows:

- **Write 30 in normal mode**.
- **Then press `i`, `vim` will be switched from `normal mode` to `insert mode`**.
- **Write `yes` then press `Esc`**.

You will see that **`yes`** has been written 30 times consecutively.

#### #:pencil: Insert New Line

**By pressing `o` or `O`, a new line will be inserted and `vim` will be switched to `insert` mode as well**.

<h3 id="find" style="color: #1abc9c">#:beginner: Find</h3>

#### #:eyeglasses: Find a Character.

- **Press `fq` to find next `q`**.
- **Press `Fq` to find previous `q`**.
- **Press `3fq` to find `3rd next` occurrence of `q`**.
- **Press `3Fq` to find `3rd previous` occurrence of `q`**.

#### #:eyeglasses: Find word under cursor

- **Press `*` to find the next occurrence of the word under current cursor**.
- **Press `#` to find the previous occurrence of the word under current cursor**.

<h3 id="goto" style="color: #1abc9c">#:beginner: Go to</h3>

- **Go to matching parentheses (`(), {}, []`) by simply pressing `%`**.
- **Press `0` to go to the start of the line**.
- **Press `$` to go to the end of the line**.
- **Press `gg` to go to the beginning of the file**.
- **Press `G` to go to the end of the file**.
- **Press `G` with `number before` to go to the specific line `e.g.` press `3G` to go to the `3rd line`**.

<h3 id="search" style="color: #1abc9c">#:beginner: Search</h3>

You can search a specific text in a file i.e. for searching **`text`** in your file, steps will be as follows:

- **Write `/text` and then hit `Enter` button**.
- **After that press `n`, it will find the next `text` from the file and so on**.
- **Press `N`, it will find the previous `text` from the file and so on**.

<h3 id="remove-delete" style="color: #1abc9c">#:beginner: Remove and Delete</h3>

#### #:scissors: Removing a Character

- **By pressing `x`, the character under the cursor will be removed**.
- **By pressing `X`, the character to the left of the cursor will be removed**.

#### #:scissors: Deleting

The delete key is **`d`**. You can use it with **`movements' keys`**.

**`E.g.` `dw` will delete the first word on the right side of the cursor**. It also copies the deleted content so that you can paste it to another location by pressing **`p`**.

<h3 id="replace-repetition" style="color: #1abc9c">#:beginner: Replace and Repetition</h3>

#### #:tractor: Replace

For replacing a letter under cursor:

- **Press `r` and then write replaceable letter e.g. `a` to replace cursor's letter by `a`**.

#### #:tractor: Repetition

Repeat the previous command by pressing simply **`.`**

**`E.g.`**

- **`d2w` will delete next two words of current cursor**.
- **After that if you press `.`, the previous command i.e. next two words will also be deleted and so on**.

<h3 id="visual-mode" style="color: #1abc9c">#:beginner: Visual Mode</h3>

To switch to **`visual mode`**, just press **`v`**. In this mode you can select a text via **[movement keys](#movements)**.

**`E.g.`**

- **Press `v` and then `e` to select a word**.
- **After that press `d` to delete that word**.

<h3 id="practice" style="color: #1abc9c">#:beginner: Practice</h3>

When you change the file in vim you have to know these commands as well:

- **`:w` (save)**
- **`:wq` (save and quit)**
- **`:q` (quit)**
- **`:q!` (quit without saving)**
- **`u` (For `undo`)**
- **`ctrl+R` (For `Redo`)**
- **`:help` (For `Help`)**

**This article is written according to [this website](https://www.openvim.com/). You can `practice above commands` in realtime. #:tada:#:tada:#:tada:**




