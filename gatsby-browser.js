// highlighter: coy,dark,funky,okaidia,solarizedlight,tomorrow,twilight
import React from "react";
import { ThemeProvider } from "./src/components/ThemeContext";

// require("prismjs/themes/prism-coy.css");
// require("./src/styles/override-prism-coy.css");
require("./src/styles/syntax-highlighter.css");

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)