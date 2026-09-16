import React, { useDeferredValue, useMemo, useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

import PostListing from "../PostListing";
import slugify from "../../utilities/slugify";
import "./post-explorer.css";

/**
 * Search and facet filtering for the post archives.
 *
 * This replaces the old sidebar, which filtered on `frontmatter.category[0]`
 * only — silently ignoring any post with more than one category — and could not
 * search at all. Filtering happens over the already-loaded page data, so there
 * is no search index to build or fetch.
 *
 * `useDeferredValue` keeps typing responsive: the input updates immediately
 * while the filtered list is allowed to lag a frame behind.
 */
export default function PostExplorer({
  posts,
  initialCategory = "",
  initialTag = "",
  showFacets = true,
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [tag, setTag] = useState(initialTag);
  const deferredQuery = useDeferredValue(query);

  const facets = useMemo(() => {
    const categories = new Map();
    const tags = new Map();

    posts.forEach((post) => {
      post.category.forEach((value) => {
        categories.set(value, (categories.get(value) || 0) + 1);
      });
      post.tags.forEach((value) => {
        tags.set(value, (tags.get(value) || 0) + 1);
      });
    });

    const byCount = (a, b) => b[1] - a[1];
    return {
      categories: [...categories.entries()].sort(byCount),
      tags: [...tags.entries()].sort(byCount),
    };
  }, [posts]);

  const results = useMemo(() => {
    const needle = deferredQuery.trim().toLowerCase();

    return posts.filter((post) => {
      if (category && !post.category.includes(category)) return false;
      if (tag && !post.tags.includes(tag)) return false;
      if (!needle) return true;

      const haystack = [
        post.title,
        post.excerpt,
        ...post.tags,
        ...post.category,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(needle);
    });
  }, [posts, deferredQuery, category, tag]);

  const hasFilters = Boolean(query || category || tag);

  const clearAll = () => {
    setQuery("");
    setCategory("");
    setTag("");
  };

  return (
    <div className="explorer">
      {showFacets && (
        <div className="explorer__controls">
          <div className="explorer__search">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="explorer__search-icon"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search posts by title, tag or topic…"
              aria-label="Search posts"
              className="explorer__input"
            />
          </div>

          {facets.categories.length > 0 && (
            <div className="explorer__facet-group">
              <span className="explorer__facet-label">Category</span>
              <div className="explorer__chips">
                <button
                  type="button"
                  className={`chip ${category === "" ? "chip--active" : ""}`}
                  onClick={() => setCategory("")}
                >
                  All
                </button>
                {facets.categories.map(([value, count]) => (
                  <button
                    key={value}
                    type="button"
                    className={`chip ${category === value ? "chip--active" : ""}`}
                    onClick={() =>
                      setCategory((current) => (current === value ? "" : value))
                    }
                  >
                    {value}
                    <span className="explorer__count">{count}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {facets.tags.length > 0 && (
            <div className="explorer__facet-group">
              <span className="explorer__facet-label">Tag</span>
              <div className="explorer__chips">
                {facets.tags.map(([value, count]) => (
                  <button
                    key={value}
                    type="button"
                    className={`chip ${tag === value ? "chip--active" : ""}`}
                    onClick={() =>
                      setTag((current) => (current === value ? "" : value))
                    }
                  >
                    {value}
                    <span className="explorer__count">{count}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="explorer__summary" role="status" aria-live="polite">
        <span>
          {results.length} {results.length === 1 ? "post" : "posts"}
          {hasFilters ? " match your filters" : ""}
        </span>

        {hasFilters && (
          <button type="button" className="explorer__clear" onClick={clearAll}>
            <FontAwesomeIcon icon={faXmark} aria-hidden="true" /> Clear
          </button>
        )}
      </div>

      <PostListing
        posts={results}
        emptyMessage="No posts match your filters."
      />

      {facets.tags.length > 0 && showFacets && (
        <p className="explorer__browse">
          Browse by tag:{" "}
          {facets.tags.map(([value], position) => (
            <React.Fragment key={value}>
              {position > 0 && ", "}
              <Link to={`/tags/${slugify(value)}/`}>{value}</Link>
            </React.Fragment>
          ))}
        </p>
      )}
    </div>
  );
}
