import Project from "./Project";

export default function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      image: "/path-to-image1.jpg",
      deployedLink: "https://deployed-link1.com",
      repoLink: "https://github.com/repo1",
    },
    {
      title: "Project 2",
      image: "/path-to-image2.jpg",
      deployedLink: "https://deployed-link2.com",
      repoLink: "https://github.com/repo2",
    },
    // Add more projects as needed
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
