const skills = [
  {
    title: "Programming",
    items: ["Python", "Java", "JavaScript", "SQL"]
  },
  {
    title: "Backend",
    items: ["FastAPI", "REST APIs", "Microservices"]
  },
  {
    title: "Frontend",
    items: ["React", "Vite", "HTML", "CSS"]
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MySQL", "SQLite"]
  },
  {
    title: "DevOps",
    items: ["Docker", "Docker Compose", "Linux", "Git", "Nginx"]
  },
  {
    title: "Artificial Intelligence",
    items: ["Machine Learning", "Deep Learning", "NLP", "LLMs", "RAG"]
  },
  {
    title: "Business Intelligence",
    items: ["Power BI", "Tableau", "ETL", "Data Warehousing"]
  },
  {
    title: "Software Engineering",
    items: ["OOP", "SOLID", "Design Patterns", "System Design"]
  }
];

function Skills() {
  return (
    <section id="skills">

      <div className="container">

        <h2 className="section-title">
          Technical Skills
        </h2>

        <p className="section-subtitle">
          Technologies and engineering domains used across enterprise software,
          AI, and data engineering projects.
        </p>

        <div className="skills-grid">

          {skills.map((skill) => (
            <div
              className="card skill-card"
              key={skill.title}
            >
              <h3>{skill.title}</h3>

              <div className="skill-tags">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;