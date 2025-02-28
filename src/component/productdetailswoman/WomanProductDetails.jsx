import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../assets/details-IMGS/img_1 (1).png";

const WomanProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState("");
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <div className="position-relative">
            <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2">
              -24%
            </span>
            <img
              src={image}
              alt="Plain White Shirt"
              className="img-fluid rounded"
            />
          </div>
        </div>

        <div className="col-md-6">
          <nav className="mb-2">
            <small style={{ fontWeight: 350 }}>
              HOME / SHOP / WOMEN / <b>SHOP</b>
            </small>
          </nav>

          <h2 className="fw-bold">Plain T Shirt</h2>

          <p className="text-warning fs-6">
            ★★★★☆ <span className="text-muted">(15)</span>
          </p>

          <p>
            <span className="text-decoration-line-through text-muted fs-5">
              $69.00
            </span>
            <span className="text-primary fw-bold ms-2 fs-5">$59.00</span>
          </p>

          <p style={{ fontWeight: 400 }}>
            A classic t-shirt never goes out of style. This is our most premium
            collection of shirt. This plain white shirt is made up of pure
            cotton and has a premium finish
          </p>

          <select
            className="form-select mb-3 w-50"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option value="">Select Size</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">X-Large</option>
          </select>
          <button className="btn btn-primary w-50">ADD TO CART</button>

          <p className="mt-3">
            <strong>Category:</strong> Women, Polo, Casual
          </p>
          <p>
            <strong>Tags:</strong> Modern, Design, cotton
          </p>
        </div>
      </div>
    </div>
  );
};

export default WomanProductDetails;
