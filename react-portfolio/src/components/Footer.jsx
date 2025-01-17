import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light py-3">
      <div className="container text-center">
        <a href="https://github.com/your-profile" className="mx-2">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/your-profile" className="mx-2">
          <FaLinkedin size={24} />
        </a>
        <a href="https://twitter.com/your-profile" className="mx-2">
          <FaTwitter size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

