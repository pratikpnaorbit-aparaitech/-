import "./Contact.css";
<section className="contact" data-aos="zoom-in-up"></section>
function Contact() {
  return (
    <section className="contact">

      <div className="contact-left">

        <span>CONTACT US</span>

        <h2>Let's Grow Together</h2>

        <p>
          Whether you're a farmer, buyer, or business partner, we'd love to hear
          from you.
        </p>

        <div className="contact-info">

          <div>
            <h3>📍 Address</h3>
            <p>Pune, Maharashtra, India</p>
          </div>

          <div>
            <h3>📞 Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div>
            <h3>✉ Email</h3>
            <p>support@cowmarket.com</p>
          </div>

        </div>

      </div>

      <div className="contact-right">

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
          ></textarea>

          <button>
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;