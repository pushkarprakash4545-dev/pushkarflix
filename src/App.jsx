import "./index.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Education from "./components/Education/education";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      {/* Permanent Background */}
      <div className="site-background"></div>

      {/* Dark Overlay */}
      <div className="site-overlay"></div>

      {/* Website */}
      <div className="site-content">

        <Navbar />

        <Hero />

        <Education />

        <Projects />

        <Skills />

        <About />

        <Contact />

        <Footer />

      </div>
    </>
  );
}

export default App;