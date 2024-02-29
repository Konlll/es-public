const ContactForm = () => {
  // Template
  return (
    <section
      className="contact-form"
      role="region"
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading">Contact Us</h2>
      <p>Haven an inquiry? Fill out the form to connect with our team.</p>
      <form role="form" aria-label="Contact Form">
        <div className="row">
          <input type="text" placeholder="First Name" aria-label="First Name" />
          <input type="text" placeholder="Last Name" aria-label="Last Name" />
        </div>
        <div className="row">
          <input type="email" placeholder="Email" aria-label="Email" />
          <input
            type="tel"
            placeholder="Phone Number"
            aria-label="Phone Number"
          />
        </div>
        <div className="row">
          <textarea
            cols="30"
            rows="10"
            placeholder="Message"
            aria-label="Message"
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={(e) => e.preventDefault()}
          aria-label="Send Message"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
