import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from '../../assets/benefits-icons/icon.png';
import image2 from '../../assets/benefits-icons/icon (1).png';
import image3 from '../../assets/benefits-icons/icon (2).png';
import image4 from '../../assets/benefits-icons/icon (3).png';

const data=[ 
  { img: image1, title: "FREE SHIPPING", desc: "Enjoy free shipping on all orders above $100" },
  { img: image2, title: "SUPPORT 24/7", desc: "Our support team is there to help you for queries" },
  { img: image3, title: "30 DAYS RETURN", desc: "Simply return it within 30 days for an exchange" },
  { img: image4, title: "100% PAYMENT SECURE", desc: "Your payments are safe and secure" },
];
const Benefits = () => {
  return (
    <div className="container text-center my-5">
      <div className="row gy-4"> 
      {data.map((benefit, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12 d-flex">
            <div>
              <img src={benefit.img} alt={benefit.title} className="w-30"/>
            </div>
            <div className="ms-3 text-start">
              <h6 className="fw-bold">{benefit.title}</h6>
              <p className="fs-6 text-muted">{benefit.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
