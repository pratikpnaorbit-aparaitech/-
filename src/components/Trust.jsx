import React from "react";

function Trust() {
  const features = [
    {
      icon: "🐄",
      title: "Verified Healthy Cows",
      desc: "Every cow undergoes a complete veterinary health check before being listed.",
    },
    {
      icon: "📋",
      title: "Health Certificate",
      desc: "Complete vaccination history and medical records are provided.",
    },
    {
      icon: "🚚",
      title: "Safe Delivery",
      desc: "Doorstep transportation with professional livestock handling.",
    },
    {
      icon: "💳",
      title: "Secure Payment",
      desc: "100% safe, transparent and trusted payment process.",
    },
    {
      icon: "🧑‍🌾",
      title: "Verified Farmers",
      desc: "Purchase directly from trusted and experienced dairy farmers.",
    },
    {
      icon: "🥛",
      title: "High Milk Production",
      desc: "Premium dairy breeds selected for excellent milk yield.",
    },
  ];

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:'Poppins',sans-serif;
        }

        .trust-section{
          padding:100px 8%;
          background:#f8fafc;
        }

        .section-title{
          text-align:center;
          margin-bottom:60px;
        }

        .section-title span{
          display:inline-block;
          background:#dcfce7;
          color:#15803d;
          padding:8px 18px;
          border-radius:30px;
          font-size:14px;
          font-weight:600;
          margin-bottom:15px;
        }

        .section-title h2{
          font-size:42px;
          color:#222;
          margin-bottom:15px;
        }

        .section-title p{
          max-width:650px;
          margin:auto;
          color:#666;
          line-height:1.8;
          font-size:17px;
        }

        .trust-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
          gap:30px;
        }

        .trust-card{
          background:#fff;
          border-radius:20px;
          padding:35px;
          text-align:center;
          box-shadow:0 12px 35px rgba(0,0,0,.08);
          transition:.35s;
          position:relative;
          overflow:hidden;
        }

        .trust-card::before{
          content:"";
          position:absolute;
          top:0;
          left:0;
          width:100%;
          height:5px;
          background:linear-gradient(90deg,#16a34a,#22c55e,#84cc16);
        }

        .trust-card:hover{
          transform:translateY(-10px);
          box-shadow:0 20px 45px rgba(0,0,0,.15);
        }

        .trust-icon{
          width:90px;
          height:90px;
          margin:auto;
          margin-bottom:25px;
          background:linear-gradient(135deg,#22c55e,#16a34a);
          color:white;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:42px;
          box-shadow:0 10px 25px rgba(34,197,94,.35);
        }

        .trust-card h3{
          font-size:22px;
          color:#222;
          margin-bottom:15px;
        }

        .trust-card p{
          color:#666;
          line-height:1.8;
          font-size:15px;
        }

        @media(max-width:768px){

          .trust-section{
            padding:80px 5%;
          }

          .section-title h2{
            font-size:32px;
          }

          .section-title p{
            font-size:15px;
          }

          .trust-card{
            padding:28px;
          }

          .trust-icon{
            width:75px;
            height:75px;
            font-size:34px;
          }

        }
      `}</style>

      <section className="trust-section" id="features">

        <div className="section-title">
          <span>⭐ Why Choose Us</span>

          <h2>Why Choose CowMart?</h2>

          <p>
            India's trusted marketplace for healthy, verified dairy cows with
            transparent pricing, secure payments, and professional support.
          </p>
        </div>

        <div className="trust-grid">

          {features.map((item, index) => (
            <div className="trust-card" key={index}>

              <div className="trust-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>
          ))}

        </div>

      </section>
    </>
  );
}

export default Trust;