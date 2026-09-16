/**
 * Shared by `gatsby-node.js` (CommonJS) and the browser bundle (via webpack's
 * default interop), so it stays CommonJS on purpose.
 */
module.exports = function slugify(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};
