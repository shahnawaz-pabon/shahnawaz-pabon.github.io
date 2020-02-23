<div align="center">
  <a href="https://pabonsec.github.io/">
    <img alt="Shahnawaz Hossan" src="./static/logos/book-reader.png" />
  </a>
  <h1>Shahnawaz Hossan's Site</h1>
</div>

<div align="center" style="margin-bottom:30px">
    <a href='https://github.com/PabonSEC/pabonsec.github.io/blob/development/LICENSE'>
      <img src="https://img.shields.io/badge/License-MIT-green" alt="Logo" />
    </a>
</div>

## Table of Contents
* [Description](#description)
* [How I started](#how-i-started)
* [Used Technologies](#used-technologies)
* [Acknowledgements](#acknowledgements)
* [Run your first Gatsby Site](#run-your-first-gatsby-site)
* [Deploy your site with GitHub Pages](#deploy-your-site-with-gitHub-pages)
* [Author](#author)
* [License](#license)

## Description
This is my personal site. I would like to make it useful as a resource of various type of problems I face during my programming time and share those solutions with everyone. The site is a portfolio of mine as well.

## How I started
First I started making my own site using [Jekyll][jekyll]. [This is my site][jekyll-site] built with Jekyll. When I saw [Tania Rascia's site][tania-rascia] first time, I found it so fast and performance is extremely well. Then I decided to get started with Gatsby. After that [I made a site][gatsby-hello] following [this tutorial][gatsby-tutorial] before getting started.

## Used Technologies
- [GatsbyJS][gatsbyjs]
- [ReactJS][reactjs]
- [NodeJS][nodejs]
- [GraphQL][graphql]
- [LottieWeb][lottie-web]

## Acknowledgements
- [Tania Rascia][tania-rascia]
- [Ruben Harutyunyan][ruben]
- [Prayash Thapa][prayash]
- [Rafael Caferati][rafael]

## Run your first Gatsby Site

```bash
$ npm install -g gatsby-cli
$ gatsby new my-site
$ cd my-site
$ gatsby develop
```

Your site will be running on [localhost:8000][running-url]

## Deploy your site with GitHub Pages

```bash
$ npm install gh-pages --save-dev
```

Add the following script to your `package.json` file

```bash
{
    "scripts": {
        ...
        "deploy": "gatsby clean && gatsby build --prefix-paths && gh-pages -d public",
    }
}

```

The run 

```bash
$ npm run deploy
```

## Author
* [Shahnawaz Hossan][author]

## License
[MIT][license] © [Shahnawaz Hossan][author]

<!-- Definitions -->
[gatsbyjs]: https://www.gatsbyjs.org/
[reactjs]: https://reactjs.org/
[nodejs]: https://nodejs.org/en/
[graphql]: https://graphql.org/
[jekyll]: https://jekyllrb.com/
[lottie-web]: https://github.com/airbnb/lottie-web
[tania-rascia]: https://www.taniarascia.com/
[ruben]: https://github.com/vagr9k/gatsby-advanced-starter/
[prayash]: https://github.com/prayash/awesome-gatsby
[rafael]: https://github.com/rcaferati/react-awesome-slider
[gatsby-tutorial]: https://www.gatsbyjs.org/tutorial/
[jekyll-site]: https://pabonsec.github.io/jekyll-site/
[gatsby-hello]: https://pabonsec.github.io/gatsby-hello-world/
[author]: https://pabonsec.github.io
[license]: LICENSE
[license-badge]: https://img.shields.io/badge/License-MIT-green
[gatsby-tutorial]: https://www.gatsbyjs.org/tutorial/
[running-url]: http://localhost:8000