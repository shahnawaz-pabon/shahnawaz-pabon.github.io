const { get } = require("node-emoji");

/**
 * Renders the `#:name:` emoji shortcodes used in `content/` as unicode emoji.
 *
 * The `#` escape prefix means prose can use ordinary colons without
 * accidentally triggering an emoji.
 *
 * This replaced the `gatsby-remark-emojis` package, which hooked into
 * `mutateSource` — an internal Gatsby API that Gatsby 5 no longer calls, so
 * the plugin silently did nothing and every shortcode rendered as literal
 * text. It also string-replaced the entire document, which injected `<img>`
 * tags into fenced code blocks that merely mentioned a shortcode. Working on
 * the markdown AST instead keeps code samples intact, and emitting a unicode
 * character avoids inlining a base64 PNG per occurrence.
 */

/**
 * Shortcodes written before the emoji dataset was renamed. gemoji retired
 * these names, so map them onto their current equivalents rather than letting
 * them degrade to literal text.
 */
const LEGACY_ALIASES = {
  bicyclist: "biking_man",
  boat: "sailboat",
  hand: "raised_hand",
  pencil: "memo",
  running: "running_man",
  walking: "walking_man",
};

const SHORTCODE = /#:([a-z0-9_+-]+):/gi;

const resolve = (name) => {
  const key = name.toLowerCase();
  return get(key) || get(LEGACY_ALIASES[key]) || null;
};

const replaceShortcodes = (value) =>
  value.replace(SHORTCODE, (match, name) => resolve(name) || match);

const transform = (node) => {
  if (!node) return;

  // Never rewrite code: a fenced block documenting the shortcode syntax has to
  // keep showing `#:balloon:` instead of a rendered emoji.
  if (node.type === "code" || node.type === "inlineCode") return;

  // `html` covers the raw HTML blocks in content/about.md.
  if (
    (node.type === "text" || node.type === "html") &&
    typeof node.value === "string"
  ) {
    node.value = replaceShortcodes(node.value);
  }

  if (Array.isArray(node.children)) node.children.forEach(transform);
};

module.exports = ({ markdownAST }, pluginOptions = {}) => {
  if (pluginOptions.active === false) return markdownAST;

  transform(markdownAST);
  return markdownAST;
};
