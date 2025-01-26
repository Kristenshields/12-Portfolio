import Project from "./Project";
import '../styles/Portfolio.css';
import projectOneImage from "../assets/projectOne.jpg";
import projectTwoImage from "../assets/fantasyFighter.jpg";
import projectThreeImage from "../assets/candidateSearchPage.jpg";
import projectFourImage from "../assets/weatherDashboard.jpg";
import comingSoonPhoto from "../assets/comingSoon.jpg";


export default function Portfolio() {
  const projects = [
    {
      title: "Organizability",
      image: projectOneImage,
      deployedLink: "https://samvs-tech.github.io/Organizability/",
      repoLink: "https://github.com/samvs-tech/Organizability",
    },
    {
      title: "Fantasy Fighter",
      image: projectTwoImage,
      deployedLink: "https://project-2-c43n.onrender.com/",
      repoLink: "https://github.com/MagicInUse/Fantasy-Fighter",
    },
    {
      title: "Candidate Finder",
      image: projectThreeImage,
      deployedLink: "https://challenge-13-candidate-search-wbak.onrender.com/",
      repoLink: "https://github.com/Kristenshields/Candidate-Finder",
    },
    {
      title: "Weather Dashboard",
      image: projectFourImage,
      deployedLink: "https://challenge-9-weather-dashboard.onrender.com/",
      repoLink: "https://github.com/Kristenshields/Weather-dashboard",
    },
    {
      title: "Project 5",
      image: comingSoonPhoto,
      deployedLink: "",
      repoLink: "https://github.com/Kristenshields",
    },
    {
      title: "Project 6",
      image: comingSoonPhoto,
      deployedLink: "",
      repoLink: "https://github.com/Kristenshields",
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
