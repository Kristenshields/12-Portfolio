const Portfolio: React.FC = () => (
    <section>
      <h2>My Projects</h2>
      <div className="portfolio-grid">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="project-card">
            <h3>Project {index + 1}</h3>
            <p>Description of the project.</p>
            <a href="https://live-demo-link.com" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
            <a href="https://github.com/project-repo" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default Portfolio;
  