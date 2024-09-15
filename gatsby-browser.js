// highlighter: coy,dark,funky,okaidia,solarizedlight,tomorrow,twilight
import React from "react";
import { ThemeProvider } from "./src/components/ThemeContext";

require("./src/styles/syntax-highlighter.css");

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)

export const onRouteUpdate = () => {
  document.querySelectorAll("pre").forEach((codeBlock) => {
    // Create copy button
    const copyButton = document.createElement("button");
    copyButton.innerText = "Copy";
    copyButton.className = "copy-button";

    // Add click event to copy code
    copyButton.addEventListener("click", () => {
      const code = codeBlock.querySelector("code").innerText;
      navigator.clipboard.writeText(code).then(() => {
        copyButton.innerText = "Copied!";
        setTimeout(() => {
          copyButton.innerText = "Copy";
        }, 2000);
      });
    });

    // Insert copy button before the code block
    codeBlock.parentNode.insertBefore(copyButton, codeBlock);
  });
};
