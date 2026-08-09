import "./About.css";
import profile from "../../assets/profile.jpeg";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-left">

          <div className="profile-card">

            <div className="profile-circle">
              <img
                src={profile}
                alt="Pushkar Prakash"
              />
            </div>

            <h2>Pushkar Prakash</h2>

            <span className="profile-role">
              React Developer • Python Developer
            </span>

            <div className="status">
              Available for Opportunities
            </div>

          </div>

        </div>

        <div className="about-right">

          <span className="section-tag">
            ABOUT ME
          </span>

          <h1>
            Passionate Developer &
            <span> Cyber Security Enthusiast</span>
          </h1>

          <p>
            I'm a Computer Science graduate passionate about creating
            modern, responsive and high-performance web applications
            using React, JavaScript and Python.
          </p>

          <p>
            I enjoy solving real-world problems, learning new technologies,
            and continuously improving my development and cyber security
            skills through personal projects and practical experience.
          </p>

          <div className="about-grid">

            <div className="info-card">
              <h3>Experience</h3>
              <p>Fresher</p>
            </div>

            <div className="info-card">
              <h3>Education</h3>
              <p>Bachelor of Computer Science</p>
            </div>

            <div className="info-card">
              <h3>Projects</h3>
              <p>React • Python • JavaScript</p>
            </div>

            <div className="info-card">
              <h3>Specialization</h3>
              <p>Frontend Development & Cyber Security</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;