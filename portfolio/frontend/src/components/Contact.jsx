function Contact() {
  return (
    <section id="contact">

      <div className="container">

        <h2 className="section-title">
          Contact
        </h2>

        <p className="section-subtitle">
          Feel free to reach out for software engineering,
          AI, data engineering or collaboration opportunities.
        </p>

        <div className="contact-grid">

          <div className="card contact-info">

            <h3>Contact Information</h3>

            <p><strong>Email:</strong> your-email@example.com</p>

            <p><strong>GitHub:</strong> github.com/your-profile</p>

            <p><strong>LinkedIn:</strong> linkedin.com/in/your-profile</p>

            <p><strong>Location:</strong> India</p>

          </div>

          <div className="card contact-form">

            <form>

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Your Email"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
              />

              <button
                className="btn btn-primary"
                type="submit"
              >
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