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
    <section className="container my-5">
      <h2 className="text-center mb-4">Portfolio</h2>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <div className="d-flex justify-content-between">
                  <a
                    href={project.live}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repo}
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

