const skillGroups = [
  {
    id: "programming",
    icon: "{ }",
    title: "Programming",
    items: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    id: "backend",
    icon: "⇄",
    title: "Backend",
    items: ["FastAPI", "REST APIs", "Microservices", "Flask"],
  },
  {
    id: "frontend",
    icon: "□",
    title: "Frontend",
    items: ["React", "Vite", "HTML5", "CSS3"],
  },
  {
    id: "ai",
    icon: "⋯",
    title: "AI & LLMs",
    items: ["Machine Learning", "Deep Learning", "NLP", "LLMs", "RAG", "LangChain", "OpenAI API"],
  },
  {
    id: "data",
    icon: "≡",
    title: "Data Engineering",
    items: ["ETL", "Data Warehousing", "Data Modelling", "Pipelines"],
  },
  {
    id: "cloud",
    icon: "○",
    title: "Cloud & DevOps",
    items: ["Docker", "Docker Compose", "Nginx", "Linux", "Git", "GitHub"],
  },
  {
    id: "tools",
    icon: "▦",
    title: "Tools",
    items: ["Power BI", "Tableau", "VS Code", "Postman"],
  },
  {
    id: "databases",
    icon: "◎",
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite"],
  },
];

function Skills() {
  return (
    <section id="skills">
      <div className="container">

        <div className="section-header">
          <span className="section-eyebrow">Technical depth</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and engineering domains used across enterprise software,
            AI and data engineering projects.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.id}>
              <div className="skill-card-header">
                <span className="skill-card-icon">{group.icon}</span>
                <h3 className="skill-card-title">{group.title}</h3>
              </div>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span key={item} className="skill-tag">{item}</span>
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