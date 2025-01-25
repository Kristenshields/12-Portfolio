import '../styles/Footer.css';

export default function Footer() {
    return (
      <footer>
        <p>&copy; {new Date().getFullYear()} Kristen Shields</p>
        <a href="https://github.com/Kristenshields" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
      </footer>
    );
  }
  