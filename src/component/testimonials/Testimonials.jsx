import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../../assets/testimonials-IMGS/unsplash_6W4F62sN_yI.png";
import image2 from "../../assets/testimonials-IMGS/unsplash_6W4F62sN_yI (1).png";
import image3 from "../../assets/testimonials-IMGS/unsplash_6W4F62sN_yI (2).png";
import icon from "../../assets/testimonials-IMGS/quote2.png";

const testimonials = [
  {
    id: 1,
    name: "Stacy",
    text: "Once we ordered some accessories items and we got the products delivered to our doorstep, the customer support was super helpful and they answered all my queries.",
    image: image1,
  },
  {
    id: 2,
    name: "Tiffany",
    text: "I ordered 5 shirts from them and received them in no time. The customer support was awesome!",
    image: image2,
  },
  {
    id: 3,
    name: "James",
    text: "I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.",
    image: image3,
  },
];

const Testimonials = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Testimonials</h1>
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="row align-items-center my-5 py-4 mx-auto"
          style={{ maxWidth: "80%" }}
        >
          <div className="col-md-3 col-sm-12 text-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-circle img-fluid"
              style={{ maxWidth: "120px", height: "auto" }}
            />
          </div>
          <div className="col-md-9 col-sm-12 text-start mt-3 mt-md-0">
            <img src={icon} alt="quote" style={{ width: "25px" }} className="mb-2" />
            <h5 className="fw-semibold mb-4">{testimonial.text}</h5>
            <h4 className="fw-bold">{testimonial.name}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
