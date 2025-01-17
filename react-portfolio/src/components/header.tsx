import { NavLink } from 'react-router-dom';

const Header: React.FC = () => (
  <header>
    <h1>Kristen Shields</h1>
    <nav>
      <ul>
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}>
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
