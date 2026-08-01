const highlights = [
  {
    number: "8+",
    title: "Enterprise Projects",
    description:
      "Enterprise applications covering Healthcare, HR, AI, Data Engineering and Business Intelligence.",
    icon: "◈",
  },
  {
    number: "30+",
    title: "Technologies",
    description:
      "Modern technologies including Python, FastAPI, React, Docker, PostgreSQL, AI and Cloud.",
    icon: "⬡",
  },
  {
    number: "100%",
    title: "Production Focus",
    description:
      "Every project is designed, containerized and deployed using production-ready architecture.",
    icon: "◎",
  },
  {
    number: "∞",
    title: "Continuous Learning",
    description:
      "Constantly learning Software Engineering, Data Engineering, Artificial Intelligence and Enterprise Architecture.",
    icon: "◐",
  },
];

function Highlights() {
  return (
    <section id="highlights">
      <div className="container">

        <div className="section-header">
          <span className="section-eyebrow">By the numbers</span>
          <h2 className="section-title">Professional Highlights</h2>
          <p className="section-subtitle">
            Building enterprise-grade software solutions with modern engineering
            practices and scalable architecture.
          </p>
        </div>

        <div className="highlights-grid">
          {highlights.map((item) => (
            <div className="highlight-card" key={item.title}>
              <div className="highlight-card-top">
                <span className="highlight-icon">{item.icon}</span>
                <span className="highlight-number gradient-text">{item.number}</span>
              </div>
              <h3 className="highlight-title">{item.title}</h3>
              <p className="highlight-desc">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Highlights;