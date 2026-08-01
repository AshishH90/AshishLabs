const CAREER_HIGHLIGHTS = [
  { icon: "⚡", label: "8+ Years Experience" },
  { icon: "🏢", label: "Enterprise Applications" },
  { icon: "🤖", label: "Financial AI" },
  { icon: "🔢", label: "Data Engineering" },
  { icon: "🐍", label: "Python Automation" },
];

const EXPERTISE = [
  {
    id: "financial-ai",
    icon: "🤖",
    title: "Financial AI",
    description:
      "LLM-powered financial commentary, Year-To-Date analysis and enterprise prompt orchestration.",
    tags: ["LLMs", "Prompt Engineering", "JSON Orchestration"],
    dominant: true,
  },
  {
    id: "enterprise-apps",
    icon: "🏢",
    title: "Enterprise Applications",
    description:
      "Full-stack systems with FastAPI, React and Docker for Healthcare, HR and Finance.",
    tags: ["FastAPI", "React", "Docker"],
    dominant: false,
  },
  {
    id: "data-engineering",
    icon: "🔢",
    title: "Data Engineering",
    description:
      "Scalable pipelines, PostgreSQL modelling and automated validation workflows.",
    tags: ["PostgreSQL", "ETL", "Automation"],
    dominant: false,
  },
  {
    id: "business-intelligence",
    icon: "📊",
    title: "Business Intelligence",
    description:
      "Tableau dashboards, KPI analysis and executive reporting for strategic decisions.",
    tags: ["Tableau", "KPI Analysis", "Reporting"],
    dominant: false,
  },
];

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-dashboard">

        {/* ── LEFT — PROFILE PANEL ── */}
        <aside className="profile-panel glass">

          <div className="profile-image-wrap">
            <div className="profile-image-ring">
              <img
                src="/profile.jpg"
                alt="Ashish Hiremath"
                className="profile-photo"
              />
            </div>
            <span className="profile-status-dot" />
          </div>

          <div className="profile-identity">
            <h2 className="profile-name">Ashish Hiremath</h2>
            <p className="profile-role">
              AI &amp; Data Engineer&nbsp;|&nbsp;Finance Technology
            </p>
          </div>

          <p className="profile-summary">
            Building AI-powered financial systems and enterprise
            automation solutions that turn complex business data
            into strategic, actionable insights.
          </p>

          <div className="profile-contact">
            <span className="profile-contact-item">
              <span className="contact-icon">📧</span>
              ashirema@gmail.com
            </span>
            <span className="profile-contact-item">
              <span className="contact-icon">📍</span>
              Pune, India
            </span>
          </div>

          <div className="profile-highlights">
            {CAREER_HIGHLIGHTS.map((h) => (
              <span key={h.label} className="highlight-pill">
                <span className="highlight-pill-icon">{h.icon}</span>
                {h.label}
              </span>
            ))}
          </div>

          <div className="profile-social">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <span className="social-icon">in</span>
              LinkedIn
            </a>
            <a
              href="https://github.com/AshishH90"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <span className="social-icon">⌥</span>
              GitHub
            </a>
          </div>

        </aside>

        {/* ── CENTER — HERO MAIN ── */}
        <div className="hero-main">

          <span className="hero-chip">
            AI&nbsp;•&nbsp;Finance&nbsp;•&nbsp;Data&nbsp;•&nbsp;Automation
          </span>

          <h1 className="hero-headline">
            Turning Financial Data<br />
            into{" "}
            <span className="gradient-text">Intelligent Decisions</span>
          </h1>

          <p className="hero-description">
            I design and build AI-powered financial systems, enterprise
            software and intelligent automation solutions that transform
            complex business data into meaningful, actionable insights.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <span className="btn-icon">🚀</span>
              View Projects
            </a>
            <a href="/resume.pdf" className="btn btn-outline">
              <span className="btn-icon">📄</span>
              Download Resume
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number gradient-text">8+</span>
              <span className="hero-stat-label">Years Experience</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number gradient-text">30+</span>
              <span className="hero-stat-label">Technologies</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number gradient-text">100%</span>
              <span className="hero-stat-label">Production Ready</span>
            </div>
          </div>

        </div>

        {/* ── RIGHT — EXPERTISE PANEL ── */}
        <aside className="expertise-panel glass">

          <div className="expertise-header">
            <span className="expertise-badge">Featured Expertise</span>
          </div>

          <div className="expertise-list">
            {EXPERTISE.map((item) => (
              <div
                key={item.id}
                className={`expertise-card${
                  item.dominant ? " expertise-card--dominant" : ""
                }`}
              >
                <div className="expertise-card-top">
                  <span className="expertise-icon">{item.icon}</span>
                  <h4 className="expertise-title">{item.title}</h4>
                  {item.dominant && (
                    <span className="expertise-primary-badge">Primary</span>
                  )}
                </div>
                <p className="expertise-desc">{item.description}</p>
                <div className="expertise-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="expertise-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </aside>

      </div>
    </section>
  );
}

export default Hero;