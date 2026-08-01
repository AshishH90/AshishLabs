const projects = [
  {
    title: "Enterprise Patient Registration System",
    description:
      "Production-ready healthcare registration platform built using React, FastAPI, PostgreSQL, Docker and Nginx.",
    tech: ["React", "FastAPI", "PostgreSQL", "Docker"],
    link: "/patient-registration/"
  },
  {
    title: "HR Management System",
    description:
      "Enterprise HR application for employee management, payroll, leave and attendance.",
    tech: ["React", "Python", "FastAPI"],
    link: "#"
  },
  {
    title: "AI Review Intelligence",
    description:
      "Natural Language Processing platform that extracts sentiment and business insights from customer reviews.",
    tech: ["Python", "NLP", "LLM"],
    link: "#"
  },
  {
    title: "Medical Diagnosis Prediction",
    description:
      "Machine Learning platform for disease prediction using clinical datasets.",
    tech: ["Machine Learning", "Python"],
    link: "#"
  },
  {
    title: "Enterprise Knowledge Assistant",
    description:
      "Retrieval-Augmented Generation (RAG) assistant capable of answering enterprise knowledge queries.",
    tech: ["LangChain", "OpenAI", "RAG"],
    link: "#"
  },
  {
    title: "Business Intelligence Dashboard",
    description:
      "Executive dashboard integrating KPIs, ETL pipelines and business reporting.",
    tech: ["Power BI", "SQL", "ETL"],
    link: "#"
  }
];

function FeaturedProjects() {
  return (
    <section id="projects">
      <div className="container">

        <h2 className="section-title">
          Featured Projects
        </h2>

        <p className="section-subtitle">
          Enterprise software, Artificial Intelligence, and Data Engineering projects.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="card project-card" key={project.title}>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="skill-tags">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <br />

              <a
                href={project.link}
                className="btn btn-primary"
              >
                View Project
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedProjects;