import React from "react";
import { graphql } from "gatsby";

import ProjectCard from "../components/ProjectCard";
import Seo from "../components/Seo";
import config from "../data/config";
import projects from "../data/projects";
import "../styles/project.css";

/**
 * The project grid.
 *
 * Star and fork counts are fetched from the GitHub API at build time (see
 * `sourceNodes` in gatsby-node.js) and rendered as static HTML. This page used
 * to fetch eight repos from the browser on every visit, which consumed a shared
 * unauthenticated rate limit of 60 requests per hour and rendered an external
 * badge image per project.
 */
export default function Projects({ data }) {
  const stats = data.allGitHubRepo.nodes.reduce((accumulator, repo) => {
    accumulator[repo.repo] = repo;
    return accumulator;
  }, {});

  return (
    <div className="container">
      <div className="section-heading">
        <h1>Projects</h1>
        <p className="projects__count">
          {projects.length} things I have built, most of them open source.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.repo}
            project={project}
            stats={stats[project.repo]}
          />
        ))}
      </div>
    </div>
  );
}

export const Head = () => (
  <Seo
    title="Projects"
    pathname="/projects/"
    description={`Open-source projects by ${config.author}, a ${config.authorRole}.`}
  />
);

export const pageQuery = graphql`
  query ProjectsPage {
    allGitHubRepo {
      nodes {
        repo
        stars
        forks
        language
        pushedAt
      }
    }
  }
`;
