import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how">

      <div className="section-title">
        <span>HOW IT WORKS</span>
        <h2>Buy & Sell Cattle in 3 Easy Steps</h2>
        <p>
          Our platform makes livestock trading simple, secure and transparent.
        </p>
      </div>

      <div className="steps">

        <div className="step">

          <div className="number">1</div>

          <h3>Create Account</h3>

          <p>
            Register as a farmer or buyer within a few minutes.
          </p>

        </div>

        <div className="step">

          <div className="number">2</div>

          <h3>List or Explore</h3>

          <p>
            Upload cattle details or browse thousands of verified listings.
          </p>

        </div>

        <div className="step">

          <div className="number">3</div>

          <h3>Connect & Trade</h3>

          <p>
            Chat, negotiate and complete your deal securely.
          </p>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;