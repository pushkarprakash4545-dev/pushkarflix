import "./Navbar.css";
import { useEffect, useRef, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [active, setActive] = useState("home");

  const observer = useRef(null);

  const links = [

    {
      id: "home",
      label: "Home",
    },

    {
      id: "education",
      label: "Education",
    },

    {
      id: "projects",
      label: "Projects",
    },

    {
      id: "skills",
      label: "Skills",
    },

    {
      id: "about",
      label: "About",
    },

    {
      id: "contact",
      label: "Contact",
    }

  ];

  /* ===================================== */

  useEffect(() => {

    const navbarScroll = () => {

      const shouldScroll =
        window.scrollY > 40;

      setScrolled(prev =>

        prev === shouldScroll

          ? prev

          : shouldScroll

      );

    };

    window.addEventListener(

      "scroll",

      navbarScroll,

      {

        passive: true,

      }

    );

    navbarScroll();

    return () =>

      window.removeEventListener(

        "scroll",

        navbarScroll

      );

  }, []);

  /* ===================================== */

  useEffect(() => {

    const options = {

      root: null,

      rootMargin: "-35% 0px -45% 0px",

      threshold: 0,

    };

    observer.current =

      new IntersectionObserver(

        (entries) => {

          entries.forEach(

            (entry) => {

              if (

                entry.isIntersecting

              ) {

                setActive(

                  prev =>

                    prev === entry.target.id

                      ? prev

                      : entry.target.id

                );

              }

            }

          );

        },

        options

      );

    const sections =

      document.querySelectorAll(

        "section[id]"

      );

    sections.forEach(

      section =>

        observer.current.observe(

          section

        )

    );

    return () => {

      sections.forEach(

        section =>

          observer.current.unobserve(

            section

          )

      );

    };

  }, []);

  /* ===================================== */

  const scrollToSection = (

    id

  ) => {

    const section =

      document.getElementById(id);

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

        className={

          scrolled

            ?

            "navbar glass-nav scrolled"

            :

            "navbar glass-nav"

        }

      >

        <div

          className="logo"

          onClick={() =>

            scrollToSection(

              "home"

            )

          }

        >

          <h2>

            PUSHKAR

          </h2>

          <span>

            FLIX

          </span>

        </div>

        <ul

          className="nav-links"

        >

          {

            links.map(

              item => (

                <li

                  key={item.id}

                  className={

                    active === item.id

                      ?

                      "active"

                      :

                      ""

                  }

                  onClick={() =>

                    scrollToSection(

                      item.id

                    )

                  }

                >

                  {item.label}

                </li>

              )

            )

          }

        </ul>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          <button className="resume-btn">
            Resume
          </button>
        </a>

        <button
          className="menu-btn"
          onClick={() =>
            setMenuOpen(
              !menuOpen
            )
          }
        >

          {

            menuOpen

              ?

              <HiOutlineX />

              :

              <HiOutlineMenuAlt3 />

          }

        </button>

      </nav>

      <div

        className={

          menuOpen

            ?

            "mobile-menu open"

            :

            "mobile-menu"

        }

      >

        {

          links.map(

            item => (

              <div

                key={item.id}

                onClick={() =>

                  scrollToSection(

                    item.id

                  )

                }

              >

                {item.label}

              </div>

            )

          )

        }

        <button

          className="mobile-resume"

        >

          Resume ↗

        </button>

      </div>

    </>

  );

}

export default Navbar;