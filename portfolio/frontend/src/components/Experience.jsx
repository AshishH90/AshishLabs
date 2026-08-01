const experiences = [
  {
    title: "Enterprise Software Engineering",
    description:
      "Designing scalable enterprise applications using React, FastAPI, PostgreSQL, Docker and modern software engineering practices."
  },
  {
    title: "Data Engineering",
    description:
      "Building ETL pipelines, data warehouses, reporting systems and analytics platforms."
  },
  {
    title: "Artificial Intelligence",
    description:
      "Developing Machine Learning, Deep Learning, NLP, LLM, RAG and AI Agent solutions."
  },
  {
    title: "Business Intelligence",
    description:
      "Creating dashboards, KPIs, executive reports, Power BI and enterprise reporting systems."
  }
];

function Experience() {
  return (
    <section id="experience">

      <div className="container">

        <h2 className="section-title">
          Experience
        </h2>

        <p className="section-subtitle">
          Enterprise software development, AI engineering,
          data engineering and modern cloud technologies.
        </p>

        <div className="timeline">

          {experiences.map((item) => (

            <div
              className="card timeline-card"
              key={item.title}
            >

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;