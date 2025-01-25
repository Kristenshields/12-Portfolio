import '../styles/Resume.css';

export default function Resume() {
    const proficiencies = [
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "SQL",
      "CSS",
      "HTML",
      // Add more as needed
    ];
  
    return (
      <section id="resume">
        <h2>Resume</h2>
        <a href="/path-to-your-resume.pdf" download>Download My Resume</a>
        <h3>Proficiencies</h3>
        <ul>
          {proficiencies.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
    );
  }