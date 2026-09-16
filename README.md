<div align="center">
  <a href="https://shahnawaz-pabon.github.io/">
    <img alt="Shahnawaz Hossan" src="./static/logos/book-reader.png" />
  </a>
  <h1>Shahnawaz Hossan's Site</h1>
</div>

<div align="center" style="margin-bottom:30px">
    <a href='https://github.com/shahnawaz-pabon/shahnawaz-pabon.github.io/blob/development/LICENSE'>
      <img src="https://img.shields.io/badge/License-MIT-informational?style=for-the-badge&labelColor=17202A&color=1abc9c" alt="Logo" />
    </a>
</div>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Description](#description)
- [How I started](#how-i-started)
- [Used Technologies](#used-technologies)
- [Features](#features)
- [Up and Run](#up-and-run)
- [Configuration](#configuration)
  - [Comments](#comments)
- [Writing a post](#writing-a-post)
- [Deploy your site with GitHub Pages](#deploy-your-site-with-github-pages)
- [Acknowledgements](#acknowledgements)
- [Author](#author)
- [License](#license)

## Description

This is my personal site: a portfolio and a place where I write up the
programming problems I run into and how I solved them.

## How I started

First I started making my own site using [Jekyll][jekyll]. [This is my site][jekyll-site] built with Jekyll. When I saw [Tania Rascia's site][tania-rascia] first time, I found it so fast and performance is extremely well. Then I decided to get started with Gatsby. After that [I made a site][gatsby-hello] following [this tutorial][gatsby-tutorial] before getting started.

## Used Technologies

- [GatsbyJS][gatsbyjs] 5
- [ReactJS][reactjs] 18
- [NodeJS][nodejs] 18+
- [GraphQL][graphql]
- Plain CSS with design tokens — no UI framework

## Features

- **Dark and light themes**, following the operating system by default, with no
  flash of the wrong theme on load and the choice remembered between visits.
- **Search and filtering** across every post by title, topic, tag and category.
- **Tag and category pages**, generated at build time.
- **Reading experience**: a table of contents generated from each post's
  headings, a reading-progress bar, and a copy button on every code block.
- **SEO**: per-page titles and descriptions, canonical URLs, Open Graph and
  Twitter cards, JSON-LD structured data, a sitemap, `robots.txt` and an RSS
  feed.
- **Optimised images** through [gatsby-plugin-image][gatsby-plugin-image].
- **Project cards** with star and fork counts fetched once per build rather than
  by every visitor's browser.
- **Responsive** down to small phones, including a slide-in navigation drawer.
- **Accessible**: keyboard operable, visible focus styles, labelled controls,
  and animations that respect `prefers-reduced-motion`.

## Up and Run

Make sure you have Node 18 or newer, then:

```bash
git clone https://github.com/shahnawaz-pabon/shahnawaz-pabon.github.io.git
cd shahnawaz-pabon.github.io
npm install
npm run develop
```

Your site will be running at [http://localhost:8000](http://localhost:8000).

| Command           | What it does                       |
| ----------------- | ---------------------------------- |
| `npm run develop` | Development server with hot reload |
| `npm run build`   | Production build into `public/`    |
| `npm run clean`   | Clear `.cache/` and `public/`      |
| `npm run format`  | Format with Prettier               |
| `npm run deploy`  | Build and publish to GitHub Pages  |

## Configuration

Almost everything about the site's identity lives in **`src/data/config.js`**:
the site title and description, navigation links, social profiles, the roles
cycled in the hero, and the comment provider's settings.

The projects listed on `/projects/` live in **`src/data/projects.js`**.

Three optional environment variables:

| Variable       | Purpose                                                                                                                                  |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `GITHUB_TOKEN` | Raises the GitHub API limit when fetching project star/fork counts at build time (60 → 5,000 requests/hour). The build works without it. |

### Comments

Comments are powered by [giscus][giscus], which stores threads in GitHub
Discussions. It needs a one-time setup per repository:

1. Make the repository public and enable **Discussions** in its settings.
2. Install the [giscus app][giscus-app].
3. Open [giscus.app](https://giscus.app), enter the repository, and copy the
   generated `data-repo-id` and `data-category-id` values into `repoId` and
   `categoryId` in `src/data/config.js`.

Until those two values are filled in, the comments section shows a short
placeholder instead of an iframe.

## Writing a post

Add a markdown file to `content/posts/` named `YYYY-MM-DD-some-slug.md`. The
URL is derived from the file name, so **do not rename existing files** — those
URLs are public.

```yaml
---
template: post
title: "Post title"
featuredImage: "../featuredImages/vim.png"
date: "2026-01-31"
author: "Pabon"
profileUrl: "https://github.com/shahnawaz-pabon"
category:
  - Vim
tags:
  - vim
---
## A heading

Body text with `#:balloon:`, which renders an emoji.
```

A table of contents is generated from the post's headings, and the card teaser
comes from the first paragraph — or from an explicit `description:` in the
frontmatter if you add one.

Drafts go in `content/upcoming/`, which is excluded from the build.

## Deploy your site with GitHub Pages

Pushing to the `development` branch triggers the workflow in
`.github/workflows/deploy.yml`, which builds the site and publishes `public/`
to the `master` branch. You can also run it manually from the Actions tab.

To deploy by hand instead:

```bash
npm run deploy
```

## Acknowledgements

- [Tania Rascia][tania-rascia]
- [Ruben Harutyunyan][ruben]
- [Prayash Thapa][prayash]

## Author

- [Shahnawaz Hossan][author]

## License

[MIT][license] © [Shahnawaz Hossan][author]

<!-- Definitions -->

[gatsbyjs]: https://www.gatsbyjs.com/
[reactjs]: https://react.dev/
[nodejs]: https://nodejs.org/en/
[graphql]: https://graphql.org/
[gatsby-plugin-image]: https://www.gatsbyjs.com/plugins/gatsby-plugin-image/
[giscus]: https://giscus.app/
[giscus-app]: https://github.com/apps/giscus
[jekyll]: https://jekyllrb.com/
[tania-rascia]: https://www.taniarascia.com/
[ruben]: https://github.com/vagr9k/gatsby-advanced-starter/
[prayash]: https://github.com/prayash/awesome-gatsby
[gatsby-tutorial]: https://www.gatsbyjs.com/docs/tutorial/
[jekyll-site]: https://shahnawaz-pabon.github.io/jekyll-site/
[gatsby-hello]: https://shahnawaz-pabon.github.io/gatsby-hello-world/
[author]: https://shahnawaz-pabon.github.io
[license]: LICENSE
