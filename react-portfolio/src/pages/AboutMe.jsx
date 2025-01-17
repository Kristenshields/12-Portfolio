import React from 'react';

const AboutMe = () => {
  return (
    <section className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-4 text-center">
          <img
            src="/path/to/photo.jpg"
            alt="Kristen Shields"
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="col-md-8">
          <h2>About Me</h2>
          <p>
            Hi, I’m Kristen! I’m a passionate web developer with expertise in React, JavaScript, and other technologies. I enjoy building dynamic, user-friendly web applications and am always eager to learn new skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

