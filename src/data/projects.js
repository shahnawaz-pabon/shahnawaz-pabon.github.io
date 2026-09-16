/**
 * The projects shown on /projects/.
 *
 * CommonJS so that `gatsby-node.js` can `require` it to fetch each repo's
 * star/fork counts at build time — see `sourceNodes` in gatsby-node.js.
 *
 * `demo` and `guide` are optional; their buttons only render when present.
 */
const projects = [
  {
    title: "shahnawaz-pabon.github.io",
    description:
      "This site: a Gatsby portfolio and blog with a hand-rolled design system, dark mode, and build-time GitHub stats.",
    repo: "shahnawaz-pabon/shahnawaz-pabon.github.io",
    tags: ["Gatsby", "React", "GraphQL"],
  },
  {
    title: "Daily Encyclopedia",
    description:
      "My knowledge base: a curated collection of what I've learned.",
    repo: "shahnawaz-pabon/daily-encyclopedia",
  },
  {
    title: "Awesome GIS",
    description: "My geospatial adventure starts here.",
    repo: "shahnawaz-pabon/awesome-gis",
    demo: "https://shahnawaz-pabon.github.io/awesome-gis",
  },
  {
    title: "Minesweeper Game",
    description:
      "A classic game where you uncover squares, avoid mines, and use logic to win.",
    repo: "shahnawaz-pabon/minesweeper",
    demo: "https://shahnawaz-pabon.github.io/minesweeper",
  },
  {
    title: "FastAPI with MongoDB",
    description:
      "Seamless backend integration of MongoDB and JWT with FastAPI, adhering to industry standards.",
    repo: "shahnawaz-pabon/fastapi-mongodb-with-jwt",
  },
  {
    title: "FastAPI with Celery",
    description:
      "A beginner's guide to task scheduling with Celery and FastAPI.",
    repo: "shahnawaz-pabon/celery-with-fastapi",
    guide:
      "https://dev.to/shahnawaz-pabon/trigger-a-task-with-fastapi-celery-docker-and-docker-compose-a-step-by-step-guide-35do",
  },
  {
    title: "File Upload in Multer",
    description:
      "Upload files effortlessly using a client-server application built with multer and express.",
    repo: "shahnawaz-pabon/file-upload-with-multer",
  },
  {
    title: "Todo App",
    description:
      "A robust to-do app built with React and Redux best practices.",
    repo: "shahnawaz-pabon/to-do",
    demo: "https://shahnawaz-pabon.github.io/to-do",
  },
];

module.exports = projects;
