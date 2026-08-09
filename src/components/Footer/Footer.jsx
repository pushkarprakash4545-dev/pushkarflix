import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">

          <h2>
            PUSHKAR<span>FLIX</span>
          </h2>

          <p>
            React Developer • Python Developer • Cyber Security Enthusiast
          </p>

        </div>

        <div className="footer-links">

          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-copy">

          © 2026 Pushkar Prakash. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;