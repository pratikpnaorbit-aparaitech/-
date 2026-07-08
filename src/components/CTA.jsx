import React from "react";

const CTA = () => {
  const handleBuyNow = () => {
    alert("Redirecting to Buy Page...");
  };

  const handleContact = () => {
    alert("Opening Contact Form...");
  };

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:'Poppins',sans-serif;
        }

        .cta-section{
          padding:100px 8%;
          background:linear-gradient(135deg,#1b5e20,#2e7d32,#43a047);
        }

        .cta-container{
          max-width:1100px;
          margin:auto;
          background:rgba(255,255,255,0.12);
          backdrop-filter:blur(10px);
          border:1px solid rgba(255,255,255,0.2);
          border-radius:25px;
          padding:70px 40px;
          text-align:center;
          color:#fff;
          box-shadow:0 20px 50px rgba(0,0,0,.2);
        }

        .cta-tag{
          display:inline-block;
          background:#fff;
          color:#2e7d32;
          padding:10px 22px;
          border-radius:30px;
          font-size:15px;
          font-weight:600;
          margin-bottom:25px;
        }

        .cta-title{
          font-size:48px;
          font-weight:700;
          margin-bottom:20px;
        }

        .cta-description{
          max-width:700px;
          margin:auto;
          font-size:18px;
          line-height:1.8;
          color:#f5f5f5;
          margin-bottom:40px;
        }

        .cta-buttons{
          display:flex;
          justify-content:center;
          gap:20px;
          flex-wrap:wrap;
        }

        .primary-btn,
        .secondary-btn{
          padding:16px 38px;
          font-size:17px;
          font-weight:600;
          border:none;
          border-radius:50px;
          cursor:pointer;
          transition:.35s;
        }

        .primary-btn{
          background:#fff;
          color:#2e7d32;
        }

        .primary-btn:hover{
          background:#f4f4f4;
          transform:translateY(-5px);
        }

        .secondary-btn{
          background:transparent;
          color:#fff;
          border:2px solid #fff;
        }

        .secondary-btn:hover{
          background:#fff;
          color:#2e7d32;
          transform:translateY(-5px);
        }

        @media(max-width:768px){

          .cta-container{
            padding:50px 25px;
          }

          .cta-title{
            font-size:34px;
          }

          .cta-description{
            font-size:16px;
          }

          .cta-buttons{
            flex-direction:column;
            align-items:center;
          }

          .primary-btn,
          .secondary-btn{
            width:220px;
          }

        }
      `}</style>

      <section className="cta-section" id="contact">
        <div className="cta-container">

          <span className="cta-tag">
            🐄 Start Your Dairy Journey
          </span>

          <h2 className="cta-title">
            Ready to Buy Your Dream Cow?
          </h2>

          <p className="cta-description">
            Explore healthy, high-quality Gir, Sahiwal, Jersey, and HF cows
            verified by experts. Get professional guidance, transparent
            pricing, and doorstep delivery for your dairy farm.
          </p>

          <div className="cta-buttons">

            <button
              className="primary-btn"
              onClick={handleBuyNow}
            >
              🛒 Buy Now
            </button>

            <button
              className="secondary-btn"
              onClick={handleContact}
            >
              📞 Contact Us
            </button>

          </div>

        </div>
      </section>
    </>
  );
};

export default CTA;