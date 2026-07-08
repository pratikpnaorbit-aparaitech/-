import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <span className="logo-icon">🐄</span>
        <span className="logo-text">CowMarket</span>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-buttons">
        <button className="login-btn">
          Login
        </button>

        <button className="signup-btn">
          Get Started
        </button>
      </div>

    </nav>
  );
}

export default Navbar;