import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Promo = () => {
  return (
    <div className="container text-center my-5">
      <div className="row g-3"> 
        <div className="col-md-8">
          <div className="h-100 bg-black text-white p-4 rounded">
            <h4 className="text-uppercase">Peace of Mind</h4>
            <p>A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind.</p>
            <button className="btn btn-light text-uppercase">Buy Now</button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="h-100 bg-black text-white p-4 rounded">
            <h4 className="text-uppercase">Buy 2 Get 1 Free</h4>
            <p>End of season sale. Buy any 2 items of your choice and get 1 free.</p>
            <button className="btn btn-light text-uppercase">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
