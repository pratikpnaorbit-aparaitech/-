import React from "react";

function Footer() {

  const styles = {

    footer: {
      background: "#1b4332",
      color: "#fff",
      padding: "60px 20px 20px",
    },

    container: {
      maxWidth: "1200px",
      margin: "auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "40px",
    },

    column: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },

    logo: {
      fontSize: "28px",
      fontWeight: "700",
      marginBottom: "15px",
    },

    heading: {
      fontSize: "20px",
      marginBottom: "15px",
      color: "#d8f3dc",
    },

    text: {
      color: "#d1d1d1",
      lineHeight: "1.7",
      fontSize: "15px",
    },

    link: {
      color: "#d1d1d1",
      textDecoration: "none",
      fontSize: "15px",
      transition: "0.3s",
    },

    contact: {
      color: "#d1d1d1",
      fontSize: "15px",
      margin: "0",
    },

    line: {
      margin: "40px 0 20px",
      border: "0",
      borderTop: "1px solid rgba(255,255,255,0.2)",
    },

    copyright: {
      textAlign: "center",
      color: "#ccc",
      fontSize: "14px",
    }

  };


  const quickLinks = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Buy Cow",
      link: "#cows",
    },
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Reviews",
      link: "#reviews",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];


  return (

    <footer style={styles.footer}>

      <div style={styles.container}>


        {/* Brand */}

        <div style={styles.column}>

          <h2 style={styles.logo}>
            🐄 CowMart
          </h2>

          <p style={styles.text}>
            India's trusted marketplace for buying healthy,
            verified and premium dairy cows.
          </p>

        </div>



        {/* Links */}

        <div style={styles.column}>

          <h3 style={styles.heading}>
            Quick Links
          </h3>


          {quickLinks.map((item,index)=>(
            <a
              key={index}
              href={item.link}
              style={styles.link}
            >
              {item.name}
            </a>
          ))}


        </div>



        {/* Contact */}

        <div style={styles.column}>

          <h3 style={styles.heading}>
            Contact Us
          </h3>


          <p style={styles.contact}>
            📞 +91 9876543210
          </p>

          <p style={styles.contact}>
            ✉️ info@cowmart.com
          </p>

          <p style={styles.contact}>
            📍 Pune, Maharashtra
          </p>


        </div>


      </div>



      <hr style={styles.line}/>



      <div style={styles.copyright}>

        © 2026 CowMart. All Rights Reserved.

      </div>


    </footer>

  );

}


export default Footer;