import '../styles/AboutMe.css';
import profilePhoto from '../assets/profilePhoto.jpg';

export default function AboutMe() {
    return (
      <section id="about-me">
        <h2>About Me</h2>
        <img 
          src={profilePhoto} 
          alt="Kristen" 
          className="profile-photo" 
        />
        <p>
          Hi! I'm Kristen, I love coding and solving
          real-world problems with technology.
        </p>
      </section>
    );
  }
