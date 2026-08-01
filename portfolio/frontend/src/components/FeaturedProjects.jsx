const projects = [
  {
    id: 1,
    badge: "Financial AI",
    badgeVariant: "accent",
    title: "AI Financial Commentary Generator",
    description:
      "LLM-powered platform that generates Year-To-Date financial commentary from enterprise data. Automates analyst reporting using prompt engineering and JSON orchestration.",
    tech: ["Python", "LLMs", "FastAPI", "Prompt Engineering", "JSON Orchestration"],
    impact: "Reduces financial reporting time from days to minutes.",
    link: "#",
    featured: true,
  },
  {
    id: 2,
    badge: "Automation",
    badgeVariant: "default",
    title: "Enterprise Reporting Automation",
    description:
      "End-to-end reporting automation platform covering ETL pipelines, data validation, transformation and scheduled delivery of executive reports.",
    tech: ["Python", "SQL", "ETL", "PostgreSQL", "Docker"],
    impact: "Eliminated manual reporting across 5 business units.",
    link: "#",
    featured: false,
  },
  {
    id: 3,
    badge: "Live",
    badgeVariant: "live",
    title: "AshishLabs Portfolio",
    description:
      "Production portfolio website built as a premium SaaS-grade React application. Containerized with Docker and deployed on a VPS with Nginx reverse proxy.",
    tech: ["React", "Vite", "Docker", "Nginx", "FastAPI"],
    impact: "Deployed and live at ashishlabs.com.",
    link: "/",
    featured: false,
  },
  {
    id: 4,
    badge: "Building",
    badgeVariant: "building",
    title: "Patient Registration System",
    description:
      "Production-ready healthcare registration platform with full CRUD operations, search and enterprise architecture using React, FastAPI, PostgreSQL and Docker.",
    tech: ["React", "FastAPI", "PostgreSQL", "Docker", "Nginx"],
    impact: "Currently building — production deployment in progress.",
    link: "/patient-registration/",
    featured: false,
  },
];

function FeaturedProjects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects">
      <div className="container">

        <div className="section-header">
          <span className="section-eyebrow">Selected work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Enterprise software, Financial AI and Data Engineering — built for production.
          </p>
        </div>

        {/* Featured hero project */}
        <div className="project-featured">
          <div className="project-featured-content">
            <div className="project-featured-meta">
              <span className={`project-badge project-badge--${featured.badgeVariant}`}>
                {featured.badge}
              </span>
              <span className="project-featured-label">Featured Project</span>
            </div>
            <h3 className="project-featured-title">{featured.title}</h3>
            <p className="project-featured-desc">{featured.description}</p>
            <div className="project-impact">
              <span className="project-impact-icon">▶</span>
              <span>{featured.impact}</span>
            </div>
            <div className="project-tech">
              {featured.tech.map((t) => (
                <span key={t} className="tech-chip">{t}</span>
              ))}
            </div>
            <a href={featured.link} className="btn btn-primary">
              View Project
            </a>
          </div>
          <div className="project-featured-visual">
            <div className="project-featured-glow" />
            <div className="project-featured-screen">
              <div className="screen-bar">
                <span /><span /><span />
              </div>
              <div className="screen-body">
                <div className="screen-line screen-line--wide" />
                <div className="screen-line screen-line--medium" />
                <div className="screen-line screen-line--narrow" />
                <div className="screen-divider" />
                <div className="screen-row">
                  <div className="screen-block" />
                  <div className="screen-block screen-block--tall" />
                  <div className="screen-block screen-block--short" />
                  <div className="screen-block screen-block--med" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project grid */}
        <div className="projects-grid">
          {rest.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-card-header">
                <span className={`project-badge project-badge--${project.badgeVariant}`}>
                  {project.badge}
                </span>
              </div>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.description}</p>
              <div className="project-impact project-impact--sm">
                <span className="project-impact-icon">▶</span>
                <span>{project.impact}</span>
              </div>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-chip">{t}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                View Project
                <span className="project-link-arrow">→</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedProjects;