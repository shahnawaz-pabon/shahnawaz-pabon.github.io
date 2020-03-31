---
template: post
title: 'Remove files/folders from remote repository'
featuredImage: '../featuredImages/git.png'
date: '2019-11-20'
author: 'Pabon'
category:
    - Git
tags:
    - git
---

If you want to remove a folder from your `git` repository then simply run these commands into your terminal.
<br>

### Run

<div class=fakeMenu>
  <div class="fakeButtons fakeClose"></div>
  <div class="fakeButtons fakeMinimize"></div>
  <div class="fakeButtons fakeZoom"></div>
</div>

```bash
$ rm -rf folder_name
$ git add --all
$ git commit -m "Your commit message"
$ git push origin "branch_name"
```

These commands will remove that folder from your `git` repository of that branch.
