import "./Hero.css";
import heroImage from "../../assets/hero.png";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
      id="home"
    >
      <div className="overlay">

        <div className="hero-content">

          <span className="tag">
            FRONTEND • REACT • PYTHON
          </span>

          <h1>
            Hi, I'm <span>Pushkar Prakash</span>
          </h1>

          <h2>
            React Developer & Python Developer
          </h2>

          <p>
            Passionate Computer Science graduate focused on building modern,
            responsive and interactive web applications using React,
            JavaScript and Python.
          </p>

          <div className="hero-buttons">

            <a href="#projects">
              <button className="primary">
                View Projects
              </button>
            </a>

            <a
              href="/resume.pdf"
              download
              className="resume-link"
            >
              <button className="secondary">
                Download Resume
              </button>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;