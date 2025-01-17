import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: 'Project 1', live: '#', repo: '#' },
    { title: 'Project 2', live: '#', repo: '#' },
    { title: 'Project 3', live: '#', repo: '#' },
    { title: 'Project 4', live: '#', repo: '#' },
    { title: 'Project 5', live: '#', repo: '#' },
    { title: 'Project 6', live: '#', repo: '#' },
  ];

  return (
    <section>
      <h2>My Projects</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
