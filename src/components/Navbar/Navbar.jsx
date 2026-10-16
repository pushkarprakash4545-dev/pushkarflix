
import { useEffect, useState } from "react";
import {
  House,
  GraduationCap,
  Box,
  ChartNoAxesColumn,
  UserRound,
  Mail,
  Menu,
  X,
} from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", id: "home", Icon: House },
    { name: "Education", id: "education", Icon: GraduationCap },
    { name: "Projects", id: "projects", Icon: Box },
    { name: "Skills", id: "skills", Icon: ChartNoAxesColumn },
    { name: "About", id: "about", Icon: UserRound },
    { name: "Contact", id: "contact", Icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      let currentSection = "home";

      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);

        if (section && section.getBoundingClientRect().top <= 180) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (id) => {
    setActiveSection(id);
    setMenuOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo" onClick={() => handleNavigation("home")}>
        <h2>
          PUSHKAR <span>FLIX</span>
        </h2>
      </div>

      <nav className="nav-links" aria-label="Main navigation">
        {navItems.map(({ name, id, Icon }) => (
          <div
            key={id}
            className={`nav-item ${activeSection === id ? "active" : ""}`}
            onClick={() => handleNavigation(id)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                handleNavigation(id);
              }
            }}
          >
            <Icon size={18} strokeWidth={2} />
            <span>{name}</span>
          </div>
        ))}
      </nav>

      <button
        className="menu-btn"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((previous) => !previous)}
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navItems.map(({ name, id, Icon }) => (
          <div
            key={id}
            className={`mobile-nav-item ${activeSection === id ? "active" : ""}`}
            onClick={() => handleNavigation(id)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                handleNavigation(id);
              }
            }}
          >
            <Icon size={19} />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </header>
  );
}

export default Navbar;
