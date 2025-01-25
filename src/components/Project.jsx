export default function Project({ title, image, deployedLink, repoLink }) {
    return (
      <div className="project">
        <img src={image} alt={title} className="project-image" />
        <h3>{title}</h3>
        <a href={deployedLink} target="_blank" rel="noreferrer">Deployed App</a>
        <a href={repoLink} target="_blank" rel="noreferrer">GitHub Repo</a>
      </div>
    );
  }