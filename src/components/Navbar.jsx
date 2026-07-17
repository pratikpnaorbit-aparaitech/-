import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        <span className="logo-icon">🐄</span>
        <span className="logo-text">CowMarket</span>
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        </li>

        <li>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
        </li>

        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </li>

        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </li>

        <div className="nav-buttons mobile-buttons">
  <Link to="/login">
    <button
      className="login-btn"
      onClick={() => setMenuOpen(false)}
    >
      Login
    </button>
  </Link>

  <Link to="/login">
    <button
      className="signup-btn"
      onClick={() => setMenuOpen(false)}
    >
      Get Started
    </button>
  </Link>
</div>

      </ul>

      <div className="nav-buttons desktop-buttons">
  <Link to="/login">
    <button className="login-btn">Login</button>
  </Link>

  <Link to="/login">
    <button className="signup-btn">Get Started</button>
  </Link>
</div>

    </nav>
  );
}

export default Navbar;