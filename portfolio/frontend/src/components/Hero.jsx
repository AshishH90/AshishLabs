function Hero() {
  return (
    <section id="home">

      <div className="container hero-dashboard">

        {/* LEFT PANEL */}

        <aside className="profile-panel card">

          <div className="profile-image">
            <img
              src="/profile.jpg"
              alt="Ashish Hiremath"
            />
          </div>

          <h2>
            Ashish Hiremath
          </h2>

          <p className="profile-role">
            AI & Data Engineer | Finance Technology
          </p>

          <p className="profile-summary">
            Passionate about applying Artificial Intelligence,
            Data Engineering and Enterprise Software
            to solve real-world financial problems.
          </p>

          <div className="profile-contact">

            <span>📍 Pune, India</span>

            <span>📧 ashirema@gmail.com</span>

          </div>

        </aside>

        {/* CENTER */}

        <div className="hero-main">

          <span className="hero-chip">
            AI • Finance • Data • Automation
          </span>

          <h1>

            Turning Financial Data

            <br />

            into

            <span className="gradient-text">
              {" "}Intelligent Decisions
            </span>

          </h1>

          <p className="hero-description">

            Building enterprise applications,
            financial automation platforms,
            AI-powered reporting systems,
            and intelligent decision support
            solutions using Python, React,
            FastAPI, PostgreSQL and Large Language Models.

          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn btn-primary"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="btn btn-outline"
            >
              Download Resume
            </a>

          </div>

        </div>

        {/* RIGHT PANEL */}

        <aside className="assistant-panel card">

          <h3>
            Featured Expertise
          </h3>

          <div className="assistant-grid">

            <div className="assistant-card">

              <h4>
                Financial AI
              </h4>

              <p>

                AI generated
                Financial Commentary
                using Enterprise LLMs

              </p>

            </div>

            <div className="assistant-card">

              <h4>
                Data Engineering
              </h4>

              <p>

                ETL

                <br />

                SQL

                <br />

                Python Automation

              </p>

            </div>

            <div className="assistant-card">

              <h4>
                Enterprise Apps
              </h4>

              <p>

                FastAPI

                <br />

                React

                <br />

                Docker

              </p>

            </div>

            <div className="assistant-card">

              <h4>
                Analytics
              </h4>

              <p>

                Tableau

                <br />

                Power BI

                <br />

                KPI Reporting

              </p>

            </div>

          </div>

        </aside>

      </div>

    </section>
  );
}

export default Hero;