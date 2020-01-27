---
title: 'Remove files/folders from remote repository'
date: '2019-11-20'
featuredImage: '../featuredImages/git.png'
tags:
    - git
---

If you want to remove a folder from your `git` repository then simply run these commands into your terminal.
<br>

### Run
```bash
rm -rf folder_name
git add --all
git commit -m "Your commit message"
git push origin "branch_name"
```

These commands will remove that folder from your `git` repository of that branch.
