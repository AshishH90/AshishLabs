import experience from "../data/experience";

const DOMAIN_META = {
  "Software Engineer": {
    icon: "□",
    color: "blue",
    achievements: [
      "Architected full-stack enterprise platforms using React, FastAPI and PostgreSQL",
      "Containerized and deployed applications with Docker and Nginx on VPS infrastructure",
      "Applied SOLID principles, design patterns and system design across all projects",
    ],
  },
  "Data Engineer": {
    icon: "≡",
    color: "cyan",
    achievements: [
      "Designed and implemented end-to-end ETL pipelines for enterprise data processing",
      "Built data warehouses and analytics platforms powering executive decision making",
      "Automated reporting workflows eliminating manual data processing across business units",
    ],
  },
  "AI Engineer": {
    icon: "⋯",
    color: "indigo",
    achievements: [
      "Developed LLM-powered financial commentary generation using prompt engineering",
      "Implemented RAG systems for enterprise knowledge retrieval and AI agent workflows",
      "Applied NLP, deep learning and generative AI to real-world financial problems",
    ],
  },
  "Business Intelligence Developer": {
    icon: "◎",
    color: "sky",
    achievements: [
      "Delivered Power BI and Tableau dashboards for C-suite and finance stakeholders",
      "Designed KPI frameworks and data models aligning business goals with analytics",
      "Created self-service reporting platforms reducing analyst turnaround by significant margins",
    ],
  },
};

function Experience() {
  return (
    <section id="experience">
      <div className="container">

        <div className="section-header">
          <span className="section-eyebrow">Career track</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Enterprise software development, AI engineering,
            data engineering and modern cloud technologies.
          </p>
        </div>

        <div className="timeline">
          {experience.map((item, index) => {
            const meta = DOMAIN_META[item.title] ?? {};
            return (
              <div className="timeline-item" key={item.id}>
                <div className={`timeline-node timeline-node--${meta.color ?? "blue"}`}>
                  <span className="timeline-node-icon">{meta.icon ?? "□"}</span>
                </div>
                {index < experience.length - 1 && (
                  <div className="timeline-connector" />
                )}
                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <div>
                      <h3 className="timeline-role">{item.title}</h3>
                      <span className="timeline-period">{item.period}</span>
                    </div>
                    <span className={`timeline-badge timeline-badge--${meta.color ?? "blue"}`}>
                      {item.period}
                    </span>
                  </div>
                  <p className="timeline-desc">{item.description}</p>
                  {meta.achievements && (
                    <ul className="timeline-achievements">
                      {meta.achievements.map((a) => (
                        <li key={a} className="timeline-achievement">
                          <span className="timeline-achievement-dot" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Experience;