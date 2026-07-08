import React from "react";

const reviews = [
  {
    id: 1,
    name: "Rahul Patil",
    city: "Pune",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=11",
    review:
      "Healthy Gir cow received in excellent condition. Delivery was on time, and all health certificates were provided.",
  },
  {
    id: 2,
    name: "Amit Sharma",
    city: "Nashik",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=12",
    review:
      "Excellent platform for purchasing dairy cows. The team guided me throughout the buying process.",
  },
  {
    id: 3,
    name: "Sneha Joshi",
    city: "Kolhapur",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=32",
    review:
      "Professional service and premium-quality cattle. Milk production exceeded my expectations.",
  },
];

const Reviews = () => {
  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:'Poppins',sans-serif;
        }

        .reviews{
          padding:90px 8%;
          background:linear-gradient(135deg,#f7fff7,#ffffff,#eef9ff);
        }

        .title{
          text-align:center;
          margin-bottom:60px;
        }

        .title span{
          display:inline-block;
          background:#dffbe5;
          color:#16a34a;
          padding:8px 18px;
          border-radius:30px;
          font-weight:600;
          margin-bottom:18px;
        }

        .title h2{
          font-size:42px;
          color:#222;
          margin-bottom:15px;
        }

        .title p{
          max-width:650px;
          margin:auto;
          color:#666;
          line-height:1.8;
        }

        .review-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
          gap:35px;
        }

        .card{
          background:white;
          border-radius:20px;
          padding:35px;
          box-shadow:0 15px 40px rgba(0,0,0,.08);
          transition:.35s;
          position:relative;
          overflow:hidden;
        }

        .card:hover{
          transform:translateY(-10px);
          box-shadow:0 25px 50px rgba(0,0,0,.15);
        }

        .card::before{
          content:"";
          position:absolute;
          top:0;
          left:0;
          width:100%;
          height:6px;
          background:linear-gradient(90deg,#16a34a,#22c55e,#84cc16);
        }

        .quote{
          font-size:60px;
          color:#22c55e;
          opacity:.2;
          line-height:40px;
        }

        .review-text{
          margin:20px 0;
          color:#555;
          line-height:1.8;
        }

        .stars{
          font-size:22px;
          margin-bottom:25px;
        }

        .customer{
          display:flex;
          align-items:center;
          gap:15px;
        }

        .customer img{
          width:65px;
          height:65px;
          border-radius:50%;
          border:3px solid #22c55e;
          object-fit:cover;
        }

        .customer h4{
          color:#222;
        }

        .customer span{
          color:#666;
          font-size:14px;
        }

        @media(max-width:768px){
          .title h2{
            font-size:30px;
          }

          .card{
            padding:25px;
          }
        }
      `}</style>

      <section className="reviews" id="reviews">
        <div className="title">
          <span>⭐ Testimonials</span>

          <h2>What Our Customers Say</h2>

          <p>
            Trusted by dairy farmers across India for healthy cattle,
            transparent pricing, and reliable service.
          </p>
        </div>

        <div className="review-grid">
          {reviews.map((item) => (
            <div className="card" key={item.id}>
              <div className="quote">❝</div>

              <p className="review-text">{item.review}</p>

              <div className="stars">
                {"⭐".repeat(item.rating)}
              </div>

              <div className="customer">
                <img src={item.image} alt={item.name} />

                <div>
                  <h4>{item.name}</h4>
                  <span>
                    📍 {item.city} • ✅ Verified Buyer
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Reviews;