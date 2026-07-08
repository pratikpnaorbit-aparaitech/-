import React from "react";

function Stats() {
  const stats = [
    {
      id: 1,
      icon: "🐄",
      number: "500+",
      title: "Healthy Cows",
    },
    {
      id: 2,
      icon: "👨‍🌾",
      number: "1200+",
      title: "Happy Buyers",
    },
    {
      id: 3,
      icon: "🚜",
      number: "75+",
      title: "Partner Farms",
    },
    {
      id: 4,
      icon: "🏆",
      number: "12",
      title: "Premium Breeds",
    },
  ];

  const styles = {
    section: {
      padding: "80px 20px",
      background: "#f5fdf5",
    },

    title: {
      textAlign: "center",
      marginBottom: "50px",
    },

    heading: {
      fontSize: "38px",
      color: "#1b5e20",
      marginBottom: "10px",
    },

    subtitle: {
      color: "#666",
      fontSize: "18px",
    },

    container: {
      maxWidth: "1200px",
      margin: "auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
      gap: "25px",
    },

    card: {
      background: "#fff",
      padding: "30px",
      borderRadius: "15px",
      textAlign: "center",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      transition: "0.3s",
      cursor: "pointer",
    },

    icon: {
      fontSize: "50px",
      marginBottom: "15px",
    },

    number: {
      fontSize: "32px",
      color: "#2e7d32",
      marginBottom: "10px",
    },

    text: {
      color: "#555",
      fontSize: "18px",
    },
  };

  return (
    <section id="stats" style={styles.section}>
      <div style={styles.title}>
        <h2 style={styles.heading}>Our Achievements</h2>
        <p style={styles.subtitle}>
          Trusted by dairy farmers across India.
        </p>
      </div>

      <div style={styles.container}>
        {stats.map((item) => (
          <div
            key={item.id}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div style={styles.icon}>{item.icon}</div>

            <h3 style={styles.number}>{item.number}</h3>

            <p style={styles.text}>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;