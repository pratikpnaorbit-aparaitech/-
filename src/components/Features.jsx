import "./Features.css";

function Features() {
  return (
    <section className="features">

      <div className="section-title">
        <span>WHY CHOOSE US</span>
        <h2>Everything You Need for Safe Cattle Trading</h2>
        <p>
          A trusted platform designed for farmers, buyers and livestock businesses.
        </p>
      </div>

      <div className="feature-container">

        <div className="feature-card">

          <div className="feature-icon">🐄</div>

          <h3>Verified Cattle</h3>

          <p>
            Every cattle listing is verified to ensure quality and trust before purchase.
          </p>

        </div>

        <div className="feature-card">

          <div className="feature-icon">🤝</div>

          <h3>Trusted Buyers</h3>

          <p>
            Connect directly with genuine buyers and sellers across India.
          </p>

        </div>

        <div className="feature-card">

          <div className="feature-icon">🚚</div>

          <h3>Easy Transportation</h3>

          <p>
            Get reliable transportation support for smooth livestock delivery.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Features;