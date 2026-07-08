import React from "react";

function Steps() {

  const steps = [
    {
      id: 1,
      icon: "📸",
      title: "Snap & Upload",
      description:
        "Upload cow photos, breed details and farm information easily.",
    },
    {
      id: 2,
      icon: "🩺",
      title: "Vet Verification",
      description:
        "Our experts verify health records and quality before listing.",
    },
    {
      id: 3,
      icon: "🤝",
      title: "Sell Online",
      description:
        "Connect with genuine buyers and receive the best offers.",
    },
  ];


  const styles = {

    section: {
      padding: "90px 20px",
      background: "#f8faf8",
    },

    heading: {
      textAlign: "center",
      marginBottom: "50px",
    },

    title: {
      fontSize: "38px",
      color: "#1b4332",
      marginBottom: "10px",
    },

    subtitle: {
      color: "#666",
      fontSize: "17px",
    },

    container: {
      maxWidth: "1100px",
      margin: "auto",
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit,minmax(250px,1fr))",
      gap: "30px",
    },

    card: {
      background: "#fff",
      padding: "35px 25px",
      borderRadius: "18px",
      textAlign: "center",
      boxShadow:
        "0 10px 25px rgba(0,0,0,0.08)",
      transition: "0.3s",
      cursor: "pointer",
    },

    icon: {
      fontSize: "45px",
      marginBottom: "20px",
    },

    stepTitle: {
      color: "#2e7d32",
      fontSize: "22px",
      marginBottom: "12px",
    },

    description: {
      color: "#666",
      lineHeight: "1.6",
      fontSize: "15px",
    },

    number: {
      width: "35px",
      height: "35px",
      background: "#2e7d32",
      color: "#fff",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 15px",
      fontWeight: "bold",
    }

  };


  return (

    <section 
      className="steps-section"
      style={styles.section}
    >

      <div style={styles.heading}>

        <h2 style={styles.title}>
          How It Works
        </h2>

        <p style={styles.subtitle}>
          Sell your cow easily with our simple 3-step process.
        </p>

      </div>



      <div style={styles.container}>

        {steps.map((step)=>(

          <div
            key={step.id}
            style={styles.card}

            onMouseEnter={(e)=>{
              e.currentTarget.style.transform =
              "translateY(-10px)";
            }}

            onMouseLeave={(e)=>{
              e.currentTarget.style.transform =
              "translateY(0)";
            }}
          >

            <div style={styles.number}>
              {step.id}
            </div>


            <div style={styles.icon}>
              {step.icon}
            </div>


            <h3 style={styles.stepTitle}>
              {step.title}
            </h3>


            <p style={styles.description}>
              {step.description}
            </p>


          </div>

        ))}

      </div>


    </section>

  );
}

export default Steps;