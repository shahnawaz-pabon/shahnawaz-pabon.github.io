import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCode,
  faCodeBranch,
  faExternalLinkAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const formatCount = (value) =>
  value >= 1000 ? `${(value / 1000).toFixed(1)}k` : String(value);

const formatDate = (value) =>
  value
    ? new Date(value).toLocaleDateString("en-GB", {
        month: "short",
        year: "numeric",
      })
    : null;

/**
 * `stats` comes from the `GitHubRepo` node built in gatsby-node.js. Its numeric
 * fields are nullable by design: when the API is unreachable at build time the
 * badges are omitted rather than showing a misleading zero.
 */
export default function ProjectCard({ project, stats }) {
  const hasStats =
    stats && typeof stats.stars === "number" && typeof stats.forks === "number";
  const pushedAt = formatDate(stats?.pushedAt);

  return (
    <article className="project-card reveal">
      <header className="project-card__header">
        <h2 className="project-card__title">{project.title}</h2>

        {hasStats && (
          <p className="project-card__stats">
            <a
              href={`https://github.com/${project.repo}/stargazers`}
              target="_blank"
              rel="noopener noreferrer"
              title={`${stats.stars} stars`}
            >
              <FontAwesomeIcon icon={faStar} aria-hidden="true" />
              {formatCount(stats.stars)}
            </a>
            <a
              href={`https://github.com/${project.repo}/network/members`}
              target="_blank"
              rel="noopener noreferrer"
              title={`${stats.forks} forks`}
            >
              <FontAwesomeIcon icon={faCodeBranch} aria-hidden="true" />
              {formatCount(stats.forks)}
            </a>
          </p>
        )}
      </header>

      <p className="project-card__description">{project.description}</p>

      {project.tags?.length > 0 && (
        <ul className="project-card__tags">
          {project.tags.map((tag) => (
            <li className="chip" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      )}

      {(stats?.language || pushedAt) && (
        <p className="project-card__meta">
          {stats?.language && (
            <span className="project-card__language">{stats.language}</span>
          )}
          {pushedAt && <span>Updated {pushedAt}</span>}
        </p>
      )}

      <div className="project-card__actions">
        <a
          className="button button--ghost"
          href={`https://github.com/${project.repo}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faCode} aria-hidden="true" />
          Source
        </a>

        {project.demo && (
          <a
            className="button button--ghost"
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} aria-hidden="true" />
            Demo
          </a>
        )}

        {project.guide && (
          <a
            className="button button--ghost"
            href={project.guide}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faBook} aria-hidden="true" />
            Guide
          </a>
        )}
      </div>
    </article>
  );
}
