(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"16l3":function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),o=t.n(n),r=t("83Zx");var s=[{title:"shahnawaz-pabon.github.io",description:"My site",repo:"shahnawaz-pabon/shahnawaz-pabon.github.io",demo:"https://projectone-demo.com"},{title:"Daily Encyclopedia",description:"A documentation of my regular learning",repo:"shahnawaz-pabon/daily-encyclopedia"},{title:"Awesome GIS",description:"A Geographical Information System with exciting features",repo:"shahnawaz-pabon/awesome-gis",demo:"https://shahnawaz-pabon.github.io/awesome-gis"},{title:"Minesweeper Game",description:"A 2d grid game",repo:"shahnawaz-pabon/minesweeper",demo:"https://shahnawaz-pabon.github.io/minesweeper"},{title:"FastAPI with MongoDB",description:"Exemplary backend integration of MongoDB and JWT in FastAPI, following industry best practices",repo:"shahnawaz-pabon/fastapi-mongodb-with-jwt"},{title:"FastAPI with Celery",description:"An example project to get started celery with fastapi",repo:"shahnawaz-pabon/celery-with-fastapi"},{title:"File Upload in Multer",description:"Client and Server for uploading a file with multer & express",repo:"shahnawaz-pabon/file-upload-with-multer"}],i=(t("iW6+"),t("2HnI")),c=t("IP2g"),p=t("wHSu");a.default=()=>{const{0:e,1:a}=Object(n.useState)({}),{isDark:t}=Object(n.useContext)(i.a);return Object(n.useEffect)(()=>{(async()=>{const e=s.map(async e=>{const a=await fetch("https://api.github.com/repos/"+e.repo),t=await a.json();return{repo:e.repo,stars:t.stargazers_count,forks:t.forks_count}}),t=(await Promise.all(e)).reduce((e,a)=>(e[a.repo]=a,e),{});a(t)})()},[]),o.a.createElement(r.a,null,o.a.createElement("div",{className:"container projects-container "+(t?"dark-mode":"")},s.map(a=>{const t=e[a.repo]||{};return o.a.createElement("div",{className:"project-card",key:a.repo},o.a.createElement("div",{className:"project-meta"},o.a.createElement("span",{className:"project-stars"},o.a.createElement(c.a,{icon:p.j})," ",t.stars||0),o.a.createElement("span",{className:"project-forks"},o.a.createElement(c.a,{icon:p.m})," ",t.forks||0)),o.a.createElement("div",{className:"project-content"},o.a.createElement("h3",{className:"project-title"},a.title),o.a.createElement("p",{className:"project-description"},a.description),o.a.createElement("div",{className:"project-buttons"},o.a.createElement("a",{href:"https://github.com/"+a.repo,target:"_blank",rel:"noopener noreferrer",className:"project-link"},o.a.createElement(c.a,{icon:p.c})," Source"),null!=a&&a.demo?o.a.createElement("a",{href:a.demo,target:"_blank",rel:"noopener noreferrer",className:"project-link demo"},o.a.createElement(c.a,{icon:p.f})," Demo"):o.a.createElement(o.a.Fragment,null))))})))}},"iW6+":function(e,a,t){}}]);
//# sourceMappingURL=component---src-pages-projects-js-832b2f236e777ba9478c.js.map