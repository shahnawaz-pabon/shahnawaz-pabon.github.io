import React, { useEffect, useState } from "react";
import Layout from "../layout";
import projects from "../data/projects";
import "../styles/project.css";

const Projects = () => {
  const [githubData, setGithubData] = useState({});

  // Fetch GitHub data for all projects from GitHub API
  useEffect(() => {
    const fetchGithubData = async () => {
      const promises = projects.map(async (project) => {
        const response = await fetch(`https://api.github.com/repos/${project.repo}`);
        const data = await response.json();
        return { repo: project.repo, stars: data.stargazers_count, forks: data.forks_count };
      });

      const results = await Promise.all(promises);
      const githubDataMap = results.reduce((acc, result) => {
        acc[result.repo] = result;
        return acc;
      }, {});

      setGithubData(githubDataMap);
    };

    fetchGithubData();
  }, []);

  return (
    <Layout>
      <div className="container">
        {projects.map((project) => {
          const githubInfo = githubData[project.repo] || {};
          return (
            <div className="project-card" key={project.repo}>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-meta">
                <span className="project-stars">
                  ⭐ {githubInfo.stars || 0} Stars
                </span>
                <span className="project-forks">
                  🍴 {githubInfo.forks || 0} Forks
                </span>
                <a href={`https://github.com/${project.repo}`} target="_blank" rel="noopener noreferrer" className="project-link">
                  Source
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                  Demo
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Projects;
