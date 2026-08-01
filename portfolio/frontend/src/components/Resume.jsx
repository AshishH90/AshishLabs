function Resume() {
  return (
    <section id="resume">
      <div className="container">

        <div className="resume-card">

          <div className="resume-card-content">
            <span className="section-eyebrow">Credentials</span>
            <h2 className="resume-title">Resume</h2>
            <p className="resume-desc">
              Full resume covering Software Engineering, Financial AI,
              Data Engineering and Enterprise Application Development.
            </p>
            <div className="resume-highlights">
              <span className="resume-highlight-item">Software Engineering</span>
              <span className="resume-highlight-sep">·</span>
              <span className="resume-highlight-item">Financial AI</span>
              <span className="resume-highlight-sep">·</span>
              <span className="resume-highlight-item">Data Engineering</span>
              <span className="resume-highlight-sep">·</span>
              <span className="resume-highlight-item">Enterprise Applications</span>
            </div>
            <a href="/resume.pdf" className="btn btn-primary resume-btn">
              Download Resume
              <span className="resume-btn-arrow">↓</span>
            </a>
          </div>

          <div className="resume-card-visual">
            <div className="resume-doc">
              <div className="resume-doc-header" />
              <div className="resume-doc-line resume-doc-line--wide" />
              <div className="resume-doc-line resume-doc-line--medium" />
              <div className="resume-doc-line resume-doc-line--wide" />
              <div className="resume-doc-line resume-doc-line--narrow" />
              <div className="resume-doc-line resume-doc-line--medium" />
              <div className="resume-doc-line resume-doc-line--wide" />
              <div className="resume-doc-line resume-doc-line--narrow" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Resume;