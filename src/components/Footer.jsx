import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>🐄 CowMarket</h2>
          <p>
            Helping farmers connect with trusted buyers.
          </p>
        </div>


        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
        </div>


        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Buy Cattle</li>
            <li>Sell Cattle</li>
            <li>Transportation</li>
          </ul>
        </div>


        <div className="footer-section">
          <h3>Contact</h3>

          <p>📞 +91 XXXXX XXXXX</p>
          <p>✉ support@cowmarket.com</p>
          <p>📍 India</p>

        </div>


      </div>


      <div className="social-icons">

        <span>🌐</span>
        <span>📘</span>
        <span>📷</span>
        <span>💼</span>

      </div>


      <div className="footer-bottom">

        © 2026 CowMarket. All Rights Reserved.

      </div>


    </footer>
  );
}

export default Footer;