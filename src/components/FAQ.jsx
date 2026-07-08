import "./FAQ.css";

function FAQ() {
  return (
    <section className="faq">

      <div className="section-title">
        <span>FAQ</span>
        <h2>Frequently Asked Questions</h2>
        <p>
          Find answers to the most common questions about CowMarket.
        </p>
      </div>

      <div className="faq-container">

        <div className="faq-item">
          <h3>How do I buy cattle?</h3>
          <p>
            Register your account, browse verified listings, contact the seller,
            and complete the purchase securely.
          </p>
        </div>

        <div className="faq-item">
          <h3>Can I sell my cattle for free?</h3>
          <p>
            Yes. Farmers can create listings and upload cattle details easily.
          </p>
        </div>

        <div className="faq-item">
          <h3>Are the sellers verified?</h3>
          <p>
            Yes. We verify sellers to provide a trusted marketplace for everyone.
          </p>
        </div>

        <div className="faq-item">
          <h3>Is transportation available?</h3>
          <p>
            We help connect buyers and sellers with transportation partners for
            safe livestock delivery.
          </p>
        </div>

      </div>

    </section>
  );
}

export default FAQ;