const CONTACT_ITEMS = [
  { label: "Email", value: "ashirema@gmail.com", href: "mailto:ashirema@gmail.com", icon: "✉" },
  { label: "GitHub", value: "github.com/AshishH90", href: "https://github.com/AshishH90", icon: "⌥" },
  { label: "LinkedIn", value: "linkedin.com/in/ashish", href: "https://linkedin.com", icon: "in" },
  { label: "Location", value: "Pune, India", href: null, icon: "◎" },
];

function Contact() {
  return (
    <section id="contact">
      <div className="container">

        <div className="section-header">
          <span className="section-eyebrow">Get in touch</span>
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Open to software engineering, Financial AI, data engineering
            and enterprise collaboration opportunities.
          </p>
        </div>

        <div className="contact-grid">

          <div className="contact-info-panel">
            <h3 className="contact-info-title">Let&apos;s work together</h3>
            <p className="contact-info-desc">
              Whether you need an AI-powered financial solution, an enterprise
              application or a data engineering platform — I&apos;d love to hear about
              your project.
            </p>
            <div className="contact-items">
              {CONTACT_ITEMS.map((item) => (
                <div key={item.label} className="contact-item">
                  <span className="contact-item-icon">{item.icon}</span>
                  <div className="contact-item-body">
                    <span className="contact-item-label">{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="contact-item-value contact-item-link"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-item-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-panel">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  rows="5"
                  className="form-input form-textarea"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button type="submit" className="btn btn-primary contact-submit">
                Send Message
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;