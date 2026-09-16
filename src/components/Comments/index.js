import React from "react";
import Giscus from "@giscus/react";

import config from "../../data/config";
import { useTheme } from "../ThemeContext";
import "./comments.css";

/**
 * GitHub Discussions-backed comments.
 *
 * Replaces utterances, which is no longer actively maintained. The React
 * component re-posts the theme message when `theme` changes, so the thread
 * follows the site's dark mode without a reload.
 *
 * Rendering waits for `isReady` so the server and the client produce identical
 * markup — the iframe is injected client-side either way.
 */
export default function Comments() {
  const { theme, isReady } = useTheme();
  const {
    repo,
    repoId,
    category,
    categoryId,
    mapping,
    reactionsEnabled,
    inputPosition,
    lang,
  } = config.giscus;

  if (!repoId || !categoryId) {
    return (
      <p className="comments__notice">
        Comments are not configured yet. Create the giscus identifiers for{" "}
        <code>{repo}</code> and add them as <code>repoId</code> and{" "}
        <code>categoryId</code> in <code>src/data/config.js</code>.
      </p>
    );
  }

  if (!isReady) {
    return <p className="comments__notice">Loading comments…</p>;
  }

  return (
    <Giscus
      repo={repo}
      repoId={repoId}
      category={category}
      categoryId={categoryId}
      mapping={mapping}
      reactionsEnabled={reactionsEnabled}
      emitMetadata="0"
      inputPosition={inputPosition}
      theme={theme === "dark" ? "dark_dimmed" : "light"}
      lang={lang}
      loading="lazy"
    />
  );
}
