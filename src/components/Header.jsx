import React, { useState } from "react";

const navLinks = [
  { id: "home", label: "Home" },
  
  { id: "features", label: "Features" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const styles = {
    header: {
      width: "100%",
      padding: "18px 50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "#ffffff",
      boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },

    logo: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      textDecoration: "none",
      fontSize: "28px",
      fontWeight: "700",
      color: "#1b5e20",
    },

    logoIcon: {
      fontSize: "35px",
    },

    nav: {
      display: "flex",
    },

    navList: {
      display: "flex",
      listStyle: "none",
      gap: "30px",
      margin: 0,
      padding: 0,
    },

    link: {
      textDecoration: "none",
      color: "#333",
      fontSize: "16px",
      fontWeight: "500",
      transition: "0.3s",
    },

    buttons: {
      display: "flex",
      gap: "15px",
    },

    loginBtn: {
      padding: "10px 22px",
      borderRadius: "25px",
      border: "2px solid #2e7d32",
      background: "transparent",
      color: "#2e7d32",
      cursor: "pointer",
      fontWeight: "600",
    },

    sellBtn: {
      padding: "10px 25px",
      borderRadius: "25px",
      border: "none",
      background: "#2e7d32",
      color: "#fff",
      cursor: "pointer",
      fontWeight: "600",
    },

    menuBtn: {
      display: "none",
      fontSize: "28px",
      border: "none",
      background: "transparent",
      cursor: "pointer",
    },
  };


  return (
    <header style={styles.header}>

      {/* Logo */}
      <a href="#home" style={styles.logo}>
        <span style={styles.logoIcon}>
          🐄
        </span>

        <span>
          CowMart
        </span>
      </a>


      {/* Navigation */}
      <nav
        style={{
          ...styles.nav,
          ...(menuOpen && {
            position: "absolute",
            top: "75px",
            left: 0,
            width: "100%",
            background: "#fff",
            padding: "20px",
            justifyContent: "center",
          }),
        }}
      >

        <ul
          style={{
            ...styles.navList,
            ...(menuOpen && {
              flexDirection: "column",
              textAlign: "center",
            }),
          }}
        >

          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                style={styles.link}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}

        </ul>

      </nav>


      {/* Buttons */}
      <div style={styles.buttons}>

        <button style={styles.loginBtn}>
          Login
        </button>

        <button style={styles.sellBtn}>
          Sell Your Cow
        </button>

      </div>


      {/* Mobile Menu */}
      <button
        style={{
          ...styles.menuBtn,
          display: "none",
        }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>


    </header>
  );
};

export default Header;