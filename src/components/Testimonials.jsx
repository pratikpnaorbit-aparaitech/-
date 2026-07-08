import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="section-title">
        <span>TESTIMONIALS</span>
        <h2>What Our Farmers Say</h2>
        <p>
          Trusted by thousands of farmers and livestock buyers across India.
        </p>
      </div>

      <div className="testimonial-container">

        <div className="testimonial-card">

          <div className="stars">★★★★★</div>

          <p>
            CowMarket helped me sell my cattle within three days. The buyers were genuine and the entire process was smooth.
          </p>

          <div className="user">
            <h3>Rahul Patil</h3>
            <span>Dairy Farmer</span>
          </div>

        </div>

        <div className="testimonial-card">

          <div className="stars">★★★★★</div>

          <p>
            A reliable platform with verified sellers. I found healthy cattle exactly as described.
          </p>

          <div className="user">
            <h3>Sneha Joshi</h3>
            <span>Livestock Buyer</span>
          </div>

        </div>

        <div className="testimonial-card">

          <div className="stars">★★★★★</div>

          <p>
            The interface is simple, secure and very easy to use. Highly recommended for farmers.
          </p>

          <div className="user">
            <h3>Amit Shinde</h3>
            <span>Farmer</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;