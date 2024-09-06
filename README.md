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

- [Description](#description)
- [How I started](#how-i-started)
- [Used Technologies](#used-technologies)
- [Used Awesome Things](#used-awesome-things)
- [Useful Resources](#useful-resources)
- [Acknowledgements](#acknowledgements)
- [Up and Run](#up-and-run)
- [Run your first Gatsby Site](#run-your-first-gatsby-site)
- [Deploy your site with GitHub Pages](#deploy-your-site-with-gitHub-pages)
- [Author](#author)
- [License](#license)

## Description

This is my personal site. I would like to make it useful as a resource of various type of problems I face during my programming time and share those solutions with everyone. The site is a portfolio of mine as well.

## How I started

First I started making my own site using [Jekyll][jekyll]. [This is my site][jekyll-site] built with Jekyll. When I saw [Tania Rascia's site][tania-rascia] first time, I found it so fast and performance is extremely well. Then I decided to get started with Gatsby. After that [I made a site][gatsby-hello] following [this tutorial][gatsby-tutorial] before getting started.

## Used Technologies

- [GatsbyJS][gatsbyjs]
- [ReactJS][reactjs]
- [NodeJS][nodejs]
- [GraphQL][graphql]

## Used Awesome Things

- [LottieWeb][lottie-web]
- [React Awesome Slider][rafael]
- [Typed.js][typed]
- [React Tiny FAB][tiny-fab]
- [utterances][utterances]

## Useful Resources

- [React Context](https://reactjs.org/docs/context.html)
- **Toggle Dark Mode**
  - [1](https://medium.com/better-programming/react-context-api-part-1-dark-theme-3f00666cbacb)
  - [2](https://ecstatic-elion-0c620b.netlify.com/dark-theme/)
- [Gatsby Remark Emojis](https://github.com/matchilling/gatsby-remark-emojis)

## Acknowledgements

- [Tania Rascia][tania-rascia]
- [Ruben Harutyunyan][ruben]
- [Prayash Thapa][prayash]

## Up and Run

Make sure you have the Gatsby CLI installed on your machine. You can install it using npm

```
npm install -g gatsby-cli
git clone https://github.com/shahnawaz-pabon/shahnawaz-pabon.github.io.git
cd shahnawaz-pabon.github.io
npm install
gatsby develop
```

Once the server is up and running, your site will be available at this address: [http://localhost:8000](http://localhost:8000) and [http://localhost:8000/___graphql](http://localhost:8000/___graphql), this will open the GraphiQL interface, where you can explore and query your site’s data.


## Run your first Gatsby Site

```bash
npm install -g gatsby-cli
gatsby new my-site
cd my-site
gatsby develop
```

Your site will be running on [localhost:8000][running-url]

## Deploy your site with GitHub Pages

```bash
npm install gh-pages --save-dev
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
npm run deploy
```

## Author

- [Shahnawaz Hossan][author]

## License

[MIT][license] © [Shahnawaz Hossan][author]

<!-- Definitions -->

[gatsbyjs]: https://www.gatsbyjs.org/
[reactjs]: https://reactjs.org/
[nodejs]: https://nodejs.org/en/
[graphql]: https://graphql.org/
[jekyll]: https://jekyllrb.com/
[lottie-web]: https://github.com/airbnb/lottie-web
[typed]: https://github.com/mattboldt/typed.js/
[tiny-fab]: https://github.com/dericgw/react-tiny-fab
[utterances]: https://utteranc.es/
[tania-rascia]: https://www.taniarascia.com/
[ruben]: https://github.com/vagr9k/gatsby-advanced-starter/
[prayash]: https://github.com/prayash/awesome-gatsby
[rafael]: https://github.com/rcaferati/react-awesome-slider
[gatsby-tutorial]: https://www.gatsbyjs.org/tutorial/
[jekyll-site]: https://shahnawaz-pabon.github.io/jekyll-site/
[gatsby-hello]: https://shahnawaz-pabon.github.io/gatsby-hello-world/
[author]: https://shahnawaz-pabon.github.io
[license]: LICENSE
[license-badge]: https://img.shields.io/badge/License-MIT-green
[gatsby-tutorial]: https://www.gatsbyjs.org/tutorial/
[running-url]: http://localhost:8000
