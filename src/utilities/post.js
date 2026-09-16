/** `category` and `tags` frontmatter may be a string or a list. */
export const toArray = (value) => {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
};

/**
 * Flattens a `MarkdownRemark` node into the plain shape the card, filter and
 * archive components work with, so none of them need to know the GraphQL
 * structure. Paired with the `PostCardFields` fragment in
 * src/components/PostListing/index.js.
 *
 * `cardExcerpt` is computed at build time in gatsby-node.js (see
 * src/utilities/excerpt.js) so no component has to sanitise raw excerpts.
 */
export default function toPostCard(node) {
  return {
    slug: node.fields.slug,
    title: node.frontmatter.title,
    date: node.frontmatter.date,
    dateISO: node.frontmatter.dateISO,
    excerpt: node.fields.cardExcerpt || "",
    timeToRead: node.timeToRead,
    category: toArray(node.frontmatter.category),
    tags: toArray(node.frontmatter.tags),
    featuredImage: node.frontmatter.featuredImage || null,
  };
}
