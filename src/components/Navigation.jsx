import { NavLink } from "react-router-dom";
import '../styles/Navigation.css';
export default function Navigation() {
  return (
    <nav>
      <NavLink to="/about-me" activeClassName="active">About Me</NavLink>
      <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
      <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      <NavLink to="/resume" activeClassName="active">Resume</NavLink>
    </nav>
  );
}