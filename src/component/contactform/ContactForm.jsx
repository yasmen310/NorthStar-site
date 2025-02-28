import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8">
          <h2 className="fw-bold">We would love to hear from you.</h2>
          <p>
            If you have any query or any type of suggestion, you can contact us here. 
            We would love to hear from you.
          </p>

          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Write your message"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">SEND MESSAGE</button>
          </form>
        </div>

        <div className="col-md-4">
          <h4 className="fw-bold">Visit Us</h4>
          <p>UET Lahore, Punjab, Pakistan</p>
          <p>Phone: +923039898987</p>

          <h4 className="fw-bold mt-4">Get In Touch</h4>
          <p>You can get in touch with us on this provided email.</p>
          <p>Email: <a href="mailto:hmjawad087@gmail.com">hmjawad087@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
