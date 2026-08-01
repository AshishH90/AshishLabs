const highlights = [
  {
    number: "8+",
    title: "Enterprise Projects",
    description:
      "Enterprise applications covering Healthcare, HR, AI, Data Engineering and Business Intelligence."
  },
  {
    number: "30+",
    title: "Technologies",
    description:
      "Modern technologies including Python, FastAPI, React, Docker, PostgreSQL, AI and Cloud."
  },
  {
    number: "100%",
    title: "Production Focus",
    description:
      "Every project is designed, containerized and deployed using production-ready architecture."
  },
  {
    number: "∞",
    title: "Continuous Learning",
    description:
      "Constantly learning Software Engineering, Data Engineering, Artificial Intelligence and Enterprise Architecture."
  }
];

function Highlights() {
  return (
    <section id="highlights">
      <div className="container">

        <h2 className="section-title">
          Professional Highlights
        </h2>

        <p className="section-subtitle">
          Building enterprise-grade software solutions with modern engineering
          practices and scalable architecture.
        </p>

        <div className="highlights-grid">

          {highlights.map((item) => (
            <div
              className="card highlight-card"
              key={item.title}
            >
              <h2 className="gradient-text">
                {item.number}
              </h2>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Highlights;