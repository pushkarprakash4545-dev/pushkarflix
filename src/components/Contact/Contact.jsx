import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        <div className="contact-heading">

          <span>LET'S CONNECT</span>

          <h2>Get In Touch</h2>

          <p>
            I'm always open to discussing opportunities, collaborations,
            freelance work, or simply connecting with fellow developers.
          </p>

        </div>

        <div className="contact-grid">

          <div className="contact-card">

            <h3>Email</h3>

            <p>pushkarprakash4545@gmail.com</p>

          </div>

          <div className="contact-card">

            <h3>Phone</h3>

            <p>+91 8534076097</p>

          </div>

          <div className="contact-card">

            <h3>Location</h3>

            <p>Roorkee, Uttarakhand, India</p>

          </div>

          <div className="contact-card">

            <h3>Availability</h3>

            <p>Open for Full-Time & Freelance</p>

          </div>

        </div>

        <div className="social-buttons">

          <a href="#">GitHub</a>

          <a href="#">LinkedIn</a>

          <a href="#">Resume</a>

        </div>

      </div>

    </section>
  );
}

export default Contact;