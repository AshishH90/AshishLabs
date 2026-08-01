import { useEffect, useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-container">

        <a href="#home" className="logo">
          Ashish<span>Labs</span>
        </a>

        <nav>
          <ul className="nav-links">

            <li><a href="#home">Home</a></li>

            <li><a href="#projects">Projects</a></li>

            <li><a href="#skills">Skills</a></li>

            <li><a href="#experience">Experience</a></li>

            <li><a href="#resume">Resume</a></li>

            <li><a href="#contact">Contact</a></li>

          </ul>
        </nav>

        <div className="navbar-actions">

          <a
            href="/resume.pdf"
            className="btn btn-primary"
          >
            Download CV
          </a>

          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;