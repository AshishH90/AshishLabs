function Hero() {
  return (
    <section id="home">

      <div className="container hero">

        <div className="hero-content">

          <p className="hero-intro">
            Hi, I'm
          </p>

          <h1>
            Ashish <br />
            <span className="gradient-text">
              Hiremath
            </span>
          </h1>

          <h2>
            Software Engineer
            <br />
            Data Engineer
            <br />
            AI Engineer
            <br />
            Enterprise Application Developer
          </h2>

          <p className="hero-description">
            Passionate about building scalable enterprise software,
            AI-powered applications, cloud-native systems,
            modern APIs and production-ready platforms using
            Python, React, FastAPI, PostgreSQL and Docker.
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

          <div className="skill-tags">

            <span>Python</span>
            <span>FastAPI</span>
            <span>React</span>
            <span>PostgreSQL</span>
            <span>Docker</span>
            <span>AI / ML</span>
            <span>Power BI</span>
            <span>Cloud</span>

          </div>

        </div>

        <div className="hero-card card">

          <h2>AshishLabs</h2>

          <ul>

            <li>Enterprise Software</li>

            <li>Artificial Intelligence</li>

            <li>Data Engineering</li>

            <li>Cloud & DevOps</li>

          </ul>

        </div>

      </div>

    </section>
  );
}

export default Hero;