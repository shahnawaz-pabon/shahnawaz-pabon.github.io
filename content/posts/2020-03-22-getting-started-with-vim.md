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
&nbsp;&nbsp;&nbsp;&nbsp; #:beginner: &nbsp; **[Insert Repeatedly](#insert-repeatedly)** <br/>
&nbsp;&nbsp;&nbsp;&nbsp; #:beginner: &nbsp; **[Find](#find)** <br/>
&nbsp;&nbsp;&nbsp;&nbsp; #:beginner: &nbsp; **[Go to](#goto)** <br/>

<h3 id="introduction">#:beginner: Introduction</h3>

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

<h3 id="modes">#:beginner: Modes</h3>

There are two modes in **`Vim`**.
- **`insert` mode (`In this mode you can edit texts in your own way`**).
- **`normal` mode (`In this mode you can manipulate and play with texts according to some instructions`**).

**`To switch between these modes` you need to use `Esc` for `normal` mode and `i` for `insert` mode**.

<h3 id="movements">#:beginner: Movements</h3>

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

<h3 id="insert-repeatedly">#:beginner: Insert Repeatedly</h3>

Suppose you want to insert **`yes`** 30 times consecutively. Steps will be as follows:

- **Write 30 in normal mode**.
- **Then press `i`, `vim` will be switched from `normal mode` to `insert mode`**.
- **Write `yes` then press `Esc`**.

You will see that **`yes`** has been written 30 times consecutively.

<h3 id="find">#:beginner: Find</h3>

#### #:eyeglasses: Find a Character.

- **Press `fq` to find next `q`**.
- **Press `Fq` to find previous `q`**.
- **Press `3fq` to find `3rd next` occurrence of `q`**.
- **Press `3Fq` to find `3rd previous` occurrence of `q`**.

#### #:eyeglasses: Find word under cursor

- **Press `*` to find the next occurrence of the word under current cursor**.
- **Press `#` to find the previous occurrence of the word under current cursor**.

<h3 id="goto">#:beginner: Go to</h3>

- **Go to matching parentheses (`(), {}, []`) by simply pressing `%`**.
- **Press `0` to go to the start of the line**.
- **Press `$` to go to the end of the line**.
- **Press `gg` to go to the beginning of the file**.
- **Press `G` to go to the end of the file**.
- **Press `G` with `number before` to go to the specific line `e.g.` press `3G` to go to the `3rd line`**.




