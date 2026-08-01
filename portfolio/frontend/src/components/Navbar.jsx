import { useEffect, useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  return (
    <header className="navbar">
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
            className="btn btn-outline"
          >
            Resume
          </a>

          <button
            className="btn btn-outline"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;