import "./Hero.css";
import heroImage from "../assets/images/hero.webp";

function Hero() {
  return (
    <section className="hero" data-aos="fade-up">
      
      <div className="hero-bg-circle circle1"></div>
      <div className="hero-bg-circle circle2"></div>

      <div className="hero-left" data-aos="fade-right">

        <span className="hero-tag">
          🐄 India's Trusted Livestock Marketplace
        </span>

        <h1>
          Smart Digital
          <span> Cattle Trading </span>
          For Every Farmer
        </h1>

        <p>
          Buy and sell healthy cattle through a secure, transparent and modern
          marketplace. Verified sellers, instant communication and hassle-free
          livestock trading across India.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Explore Market
          </button>

          <button className="secondary-btn">
            Watch Demo
          </button>
        </div>

        <div className="hero-users">

          <div className="avatars">
            <span>A</span>
            <span>R</span>
            <span>S</span>
          </div>

          <p>
            Trusted by <strong>10,000+</strong> Farmers
          </p>

        </div>

      </div>

     <div className="hero-right" data-aos="fade-left">

        <img src={heroImage} alt="Cow" className="hero-image"/>

        
      </div>

    </section>
  );
}

export default Hero;