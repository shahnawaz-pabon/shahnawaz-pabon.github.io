// highlighter: coy,dark,funky,okaidia,solarizedlight,tomorrow,twilight
import React from "react";
import { ThemeProvider } from "./src/components/ThemeContext";

require("./src/styles/syntax-highlighter.css");

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)