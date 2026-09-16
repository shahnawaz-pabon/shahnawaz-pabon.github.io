import React from "react";

import config from "../../data/config";

const absoluteUrl = (pathname) =>
  `${config.siteUrl}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;

/**
 * Everything that belongs in <head>, rendered through Gatsby's Head API.
 *
 * This replaced `react-helmet`, which was being used without its Gatsby plugin
 * installed — react-helmet only works during SSR through `gatsby-plugin-react
 * -helmet`, so the tags were never rendered server-side. The Head API is built
 * into Gatsby 5 and has no dependency to keep in sync.
 *
 * Usage, from any page or template:
 *   export const Head = () => <Seo title="Posts" pathname="/posts/" />;
 *
 * Deliberately no `<html>` element here. To support React 19's hoisting rules,
 * Gatsby rewrites an `<html>` rendered inside Head into a hidden
 * `<div data-original-tag="html">` and copies the attributes across; the marker
 * attribute ends up on the real `<html>` in the built HTML, which then does not
 * match what React renders during hydration (React error #418) and ships junk
 * markup. `lang` is set with `setHtmlAttributes` in gatsby-ssr.js instead.
 */
export default function Seo({
  title,
  description = config.siteDescription,
  pathname = "/",
  type = "website",
  publishedTime,
  modifiedTime,
  tags = [],
  jsonLd,
}) {
  const pageTitle = title
    ? `${title} | ${config.siteTitle}`
    : `${config.siteTitle} — ${config.authorRole}`;
  const url = absoluteUrl(pathname);
  const image = `${config.siteUrl}/logos/social-card.png`;

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={config.siteTitle} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {tags.map((tag) => (
        <meta property="article:tag" content={tag} key={tag} />
      ))}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="author" content={config.author} />
      <meta name="theme-color" content="#0d1117" />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </>
  );
}

/** The site's own identity, used on the home page. */
export const personJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: config.author,
  jobTitle: config.authorRole,
  url: config.siteUrl,
  email: `mailto:${config.email}`,
  sameAs: config.socials.map((social) => social.url),
});

/** A single article. `date` comes from frontmatter as an ISO string. */
export const blogPostingJsonLd = ({
  title,
  description,
  slug,
  date,
  tags = [],
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  url: absoluteUrl(slug),
  datePublished: date,
  dateModified: date,
  image: `${config.siteUrl}/logos/social-card.png`,
  keywords: tags.join(", "),
  author: {
    "@type": "Person",
    name: config.author,
    url: config.siteUrl,
  },
  publisher: {
    "@type": "Person",
    name: config.author,
    url: config.siteUrl,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": absoluteUrl(slug),
  },
});
