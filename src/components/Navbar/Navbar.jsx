import "./Navbar.css";
import { useEffect, useRef, useState } from "react";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiOutlineHome,
  HiOutlineAcademicCap,
  HiOutlineCube,
  HiOutlineChartBar,
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineDocumentText,
} from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const observer = useRef(null);

  const links = [
    {
      id: "home",
      label: "Home",
      icon: <HiOutlineHome />,
    },
    {
      id: "education",
      label: "Education",
      icon: <HiOutlineAcademicCap />,
    },
    {
      id: "projects",
      label: "Projects",
      icon: <HiOutlineCube />,
    },
    {
      id: "skills",
      label: "Skills",
      icon: <HiOutlineChartBar />,
    },
    {
      id: "about",
      label: "About",
      icon: <HiOutlineUser />,
    },
    {
      id: "contact",
      label: "Contact",
      icon: <HiOutlineMail />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-35% 0px -50% 0px",
      threshold: 0,
    };

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      options
    );

    const sections = document.querySelectorAll("section[id]");

    sections.forEach((section) => {
      observer.current.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`navbar ${
          scrolled ? "glass-nav scrolled" : "glass-nav"
        }`}
      >
        {/* LOGO */}
        <button
          className="logo"
          onClick={() => scrollToSection("home")}
          aria-label="Go to home"
        >
          <span className="logo-main">PUSHKAR</span>
          <span className="logo-accent">FLIX</span>
        </button>

        {/* DESKTOP NAVIGATION */}
        <div className="desktop-navigation">
          <ul className="nav-links">
            {links.map((item) => (
              <li key={item.id}>
                <button
                  className={active === item.id ? "active" : ""}
                  onClick={() => scrollToSection(item.id)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* RESUME */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-resume"
          >
            <HiOutlineDocumentText />
            <span>Resume</span>
            <span className="resume-arrow">↗</span>
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {links.map((item) => (
          <button
            key={item.id}
            className={active === item.id ? "mobile-active" : ""}
            onClick={() => scrollToSection(item.id)}
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-resume"
        >
          <HiOutlineDocumentText />
          Resume
          <span>↗</span>
        </a>
      </div>
    </>
  );
}

export default Navbar;