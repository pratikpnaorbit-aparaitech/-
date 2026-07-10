import "./WhyChoose.css";
import heroImage from "../assets/images/hero.webp";

function WhyChoose() {
  return (
    <section className="why" data-aos="fade-up">
        <div className="why-left" data-aos="fade-right">
      

        <span>WHY CHOOSE US</span>

        <h2>
          Empowering Farmers With Smart Livestock Solutions
        </h2>

        <p>
          CowMarket brings technology and trust together to make buying and
          selling cattle easier than ever.
        </p>

        <div className="why-list">

          <div className="why-item">
            <div className="tick">✓</div>
            <div>
              <h3>Verified Farmers</h3>
              <p>Every profile is verified for safe trading.</p>
            </div>
          </div>

          <div className="why-item">
            <div className="tick">✓</div>
            <div>
              <h3>Secure Communication</h3>
              <p>Connect directly with genuine buyers and sellers.</p>
            </div>
          </div>

          <div className="why-item">
            <div className="tick">✓</div>
            <div>
              <h3>Fast Transportation</h3>
              <p>Reliable logistics support for livestock movement.</p>
            </div>
          </div>

          <div className="why-item">
            <div className="tick">✓</div>
            <div>
              <h3>24×7 Support</h3>
              <p>Our support team is always available.</p>
            </div>
          </div>

        </div>

      </div>
      <div className="why-right" data-aos="fade-left">
      

        <img src={heroImage} alt="Cow"/>

      </div>

    </section>
  );
}

export default WhyChoose; 