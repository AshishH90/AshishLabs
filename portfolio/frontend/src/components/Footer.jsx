const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">

          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Ashish<span>Labs</span>
            </a>
            <p className="footer-tagline">
              AI &amp; Data Engineer — Finance Technology
            </p>
          </div>

          <nav className="footer-nav">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="footer-nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-social">
            <a
              href="https://github.com/AshishH90"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            © {new Date().getFullYear()} AshishLabs. All rights reserved.
          </span>
          <span className="footer-made">
            Built with React &amp; FastAPI
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;