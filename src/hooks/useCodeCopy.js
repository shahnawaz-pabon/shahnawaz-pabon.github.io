import { useEffect } from "react";

/**
 * Adds a copy button to every code block inside `containerRef`.
 *
 * This replaces a global `onRouteUpdate` hook that appended a button to every
 * `<pre>` on the page, unconditionally, on every navigation — so going back and
 * forth stacked duplicate buttons on the same block. Here the work is scoped to
 * one article, tagged with a `data-copy-ready` flag so a block is only enhanced
 * once, and the buttons are removed again on cleanup.
 */
export default function useCodeCopy(containerRef, contentKey) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof navigator === "undefined") return undefined;

    container.querySelectorAll("pre").forEach((block) => {
      if (block.dataset.copyReady === "true") return;

      const code = block.querySelector("code");
      if (!code) return;

      block.dataset.copyReady = "true";

      const button = document.createElement("button");
      button.type = "button";
      button.className = "code-copy";
      button.textContent = "Copy";
      button.setAttribute("aria-label", "Copy code to clipboard");

      button.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(code.innerText);
          button.textContent = "Copied";
        } catch (error) {
          // Clipboard access needs HTTPS and a user gesture; tell the reader
          // what to do instead of failing silently.
          button.textContent = "Press Ctrl+C";
        }

        window.setTimeout(() => {
          button.textContent = "Copy";
        }, 2000);
      });

      block.appendChild(button);
    });

    return () => {
      container.querySelectorAll(".code-copy").forEach((button) => {
        button.remove();
      });
      container.querySelectorAll("pre[data-copy-ready]").forEach((block) => {
        delete block.dataset.copyReady;
      });
    };
  }, [containerRef, contentKey]);
}
