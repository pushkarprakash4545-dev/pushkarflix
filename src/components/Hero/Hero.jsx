
import "./Hero.css";

import heroImage from "../../assets/hero-mountain.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div
        className="site-background"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      />

      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="tag">
          <span className="tag-line" />
          HELLO, I'M PUSHKAR
        </span>

        <h1>
          Pushkar <span>Prakash</span>
        </h1>

        <h2>React Developer &amp; Python Developer</h2>

        <p>
          I build modern web applications, explore new technologies,
          and continuously improve my skills to create meaningful
          digital experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary">
            Explore My Work <span>→</span>
          </a>

          <a href="/resume.pdf" download className="secondary">
            ↓ &nbsp; Download Resume
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <strong>600+</strong>
            <span>Mini Projects</span>
          </div>
          <div>
            <strong>3+</strong>
            <span>Domains</span>
          </div>
          <div>
            <strong>Always</strong>
            <span>Learning</span>
          </div>
        </div>

        <a href="#projects" className="scroll-cue">
          <span className="scroll-mouse" />
          SCROLL TO EXPLORE
        </a>
      </div>

      <aside className="chatsphere-card">
        <div className="chatsphere-top">
          <span className="status-dot" />
          <span className="chatsphere-eyebrow">
            CURRENTLY FOCUSED ON
          </span>
          <span className="progress-badge">In Progress</span>
        </div>

        <div className="chatsphere-main">
          <div className="chatsphere-icon">CS</div>

          <div className="chatsphere-info">
            <h3>ChatSphere</h3>
            <p>
              Real-time chat application with authentication,
              chat management and modern UI.
            </p>
          </div>
        </div>

        <div className="chatsphere-tech">
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Socket.IO</span>
        </div>

        <a href="#projects" className="chatsphere-link">
          View Progress <span>→</span>
        </a>
      </aside>
    </section>
  );
}

export default Hero;
