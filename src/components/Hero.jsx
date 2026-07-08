import React from "react";

function Hero() {
  return (
    <>
      <style>{`
      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:'Poppins',sans-serif;
      }

      .hero{
        min-height:100vh;
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:80px 8%;
        background:linear-gradient(135deg,#f7fff5,#ffffff,#eef9ff);
        gap:60px;
      }

      .hero-left{
        flex:1;
      }

      .tag{
        display:inline-block;
        background:#dcfce7;
        color:#15803d;
        padding:10px 20px;
        border-radius:30px;
        font-weight:600;
        margin-bottom:25px;
      }

      .hero-left h1{
        font-size:60px;
        line-height:1.2;
        color:#222;
        margin-bottom:25px;
      }

      .hero-left h1 span{
        color:#16a34a;
      }

      .hero-left p{
        font-size:18px;
        color:#666;
        line-height:1.8;
        max-width:600px;
        margin-bottom:35px;
      }

      .search-box{
        display:flex;
        max-width:500px;
        margin-bottom:35px;
        overflow:hidden;
        border-radius:50px;
        box-shadow:0 10px 30px rgba(0,0,0,.08);
      }

      .search-box input{
        flex:1;
        padding:16px;
        border:none;
        outline:none;
        font-size:16px;
      }

      .search-box button{
        background:#16a34a;
        color:#fff;
        border:none;
        padding:0 30px;
        cursor:pointer;
        font-weight:600;
      }

      .hero-buttons{
        display:flex;
        gap:20px;
      }

      .buy-btn{
        padding:16px 35px;
        border:none;
        border-radius:50px;
        background:linear-gradient(90deg,#16a34a,#22c55e);
        color:#fff;
        font-size:17px;
        font-weight:600;
        cursor:pointer;
        transition:.3s;
      }

      .buy-btn:hover{
        transform:translateY(-4px);
      }

      .outline-btn{
        padding:16px 35px;
        border:2px solid #16a34a;
        background:white;
        color:#16a34a;
        border-radius:50px;
        font-size:17px;
        font-weight:600;
        cursor:pointer;
        transition:.3s;
      }

      .outline-btn:hover{
        background:#16a34a;
        color:white;
      }

      .hero-right{
        flex:1;
        display:flex;
        justify-content:center;
      }

      .hero-image{
        width:520px;
        height:520px;
        border-radius:30px;
        overflow:hidden;
        box-shadow:0 25px 60px rgba(0,0,0,.18);
      }

      .hero-image img{
        width:100%;
        height:100%;
        object-fit:cover;
      }

      @media(max-width:992px){

        .hero{
          flex-direction:column-reverse;
          text-align:center;
        }

        .hero-left h1{
          font-size:42px;
        }

        .search-box{
          margin:auto auto 30px;
        }

        .hero-buttons{
          justify-content:center;
        }

        .hero-image{
          width:100%;
          max-width:450px;
          height:350px;
        }

      }

      @media(max-width:600px){

        .hero-left h1{
          font-size:34px;
        }

        .search-box{
          flex-direction:column;
          border-radius:20px;
        }

        .search-box button{
          padding:15px;
        }

        .hero-buttons{
          flex-direction:column;
        }

      }
      `}</style>

      <section className="hero" id="home">

        <div className="hero-left">

          <span className="tag">
            🐄 Trusted Cow Marketplace
          </span>

          <h1>
            Buy Healthy <br />
            <span>Premium Cows</span> <br />
            Direct From Farmers
          </h1>

          <p>
            Discover healthy Gir, Sahiwal, Jersey and Holstein Friesian cows
            from verified farmers with health certificates, milk production
            details, transparent pricing and safe doorstep delivery.
          </p>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search Cow Breed..."
            />

            <button>Search</button>
          </div>

          <div className="hero-buttons">

            <button className="buy-btn">
              🛒 Buy Cow
            </button>

            <button className="outline-btn">
              Learn More
            </button>

          </div>

        </div>

        <div className="hero-right">

          <div className="hero-image">

            <img
              src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600"
              alt="Healthy Cow"
            />

          </div>

        </div>

      </section>
    </>
  );
}

export default Hero;