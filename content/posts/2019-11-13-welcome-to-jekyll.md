---
title: 'Install Jekyll on Ubuntu'
featuredImage: default.png
date: 13-11-2019
tags:
    - jekyll
    - jekyll-start
---

`Jekyll` is one of the popular static site generators. To work with `Jekyll`, you need to have all the required dependencies.

```bash
$ sudo apt-get update
$ sudo apt-get install ruby-full build-essential zlib1g-dev
```

Setup gems installation directory for your user account to avoid installing Ruby Gems as the root user. You will found this informed on [Jekyll's website][jekyll-site]. So add environment variables to `~/.bashrc` file to configure installation path.

```bash
$ echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
$ echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
$ echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
$ source ~/.bashrc
```

Now install Jekyll by running this

```
$ gem install jekyll bundler
```

To create your own blog and test it, run the following

```bash
$ jekyll new myblog
$ cd myblog
$ bundle exec jekyll serve
```

Your site will be running on [http://localhost:4000][jekyll-link].

`Congratulations` you've successfully run your own site. <i class="far fa-grin"></i>

[jekyll-site]: https://jekyllrb.com/
[jekyll-link]: http://localhost:4000
