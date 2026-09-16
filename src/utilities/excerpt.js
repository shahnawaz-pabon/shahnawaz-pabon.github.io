/**
 * Produces the short teaser shown on post cards and used as the meta
 * description.
 *
 * A post that opens with a hand-written "Table of Contents" yields an excerpt
 * made entirely of navigation labels ("Table of Contents 👉 Introduction …"),
 * which reads as broken on a card. Everything from that heading onwards is
 * dropped. An explicit `description` in the post's frontmatter wins over this.
 *
 * CommonJS because gatsby-node.js computes the value at build time and stores
 * it as a node field.
 */
module.exports = function toExcerpt(excerpt, description) {
  if (description) return description;
  if (!excerpt) return "";

  const tocStart = excerpt.search(/table of contents/i);
  const text = (tocStart >= 0 ? excerpt.slice(0, tocStart) : excerpt).trim();

  // Trim to the last complete sentence so a card never ends mid-word.
  const lastStop = Math.max(text.lastIndexOf(". "), text.lastIndexOf(".\n"));
  const cut = lastStop > 40 ? text.slice(0, lastStop + 1) : text;

  return cut.replace(/\s+/g, " ").trim();
};
