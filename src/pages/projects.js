import React, { useEffect, useState, useContext } from "react";
import Layout from "../layout";
import Helmet from 'react-helmet';
import config from '../data/config';
import projects from "../data/projects";
import "../styles/project.css";
import { ThemeContext } from "../components/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faExternalLinkAlt, faBook } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
    const [githubData, setGithubData] = useState({});
    const { isDark } = useContext(ThemeContext); // Detect if dark mode is active

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
            <Helmet title={`Projects | ${config.siteTitle} – Software Engineer`} />
            <div className={`container projects-container ${isDark ? "dark-mode" : ""}`}>
                {projects.map((project) => {
                    const githubInfo = githubData[project.repo] || {};
                    return (
                        <div className="project-card" key={project.repo}>
                            <div className="project-meta">
                                <span className="project-stars">
                                    {/* <FontAwesomeIcon icon={faStar} /> {githubInfo.stars || 0} */}
                                    <a href={`https://github.com/${project.repo}/stargazers`} target="_blank" rel="noopener noreferrer">
                                        <img
                                            // src={`https://img.shields.io/github/stars/${project.repo}`}
                                            src={`https://custom-icon-badges.demolab.com/github/stars/${project.repo}?logo=star&style=social&logoColor=black&label=Star`}
                                            alt="GitHub Stars"
                                        />
                                    </a>

                                </span>
                                <span className="project-forks">
                                    {/* <FontAwesomeIcon icon={faUtensils} /> {githubInfo.forks || 0} */}

                                    <a href={`https://github.com/${project.repo}/network/members`} target="_blank" rel="noopener noreferrer">
                                        <img
                                            // src={`https://img.shields.io/github/forks/${project.repo}`}
                                            src={`https://custom-icon-badges.demolab.com/github/forks/${project.repo}?logo=fork&style=social&logoColor=black&label=Fork`}
                                            alt="GitHub Forks"
                                        />
                                    </a>
                                </span>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-buttons">
                                    <a href={`https://github.com/${project.repo}`} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <FontAwesomeIcon icon={faCode} /> Source
                                    </a>
                                    {project?.demo ?
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo">
                                            <FontAwesomeIcon icon={faExternalLinkAlt} /> Demo
                                        </a>
                                        : <></>
                                    }

                                    {project?.guide ?
                                        <a href={project.guide} target="_blank" rel="noopener noreferrer" className="project-link guide">
                                            <FontAwesomeIcon icon={faBook} /> Guide
                                        </a>
                                        : <></>
                                    }
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Layout>
    );
};

export default Projects;
