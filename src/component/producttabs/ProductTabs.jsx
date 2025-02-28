import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="container my-5">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "description" ? "active" : ""}`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "reviews" ? "active" : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews (0)
          </button>
        </li>
      </ul>

      <div className="tab-content mt-3 p-3 border rounded">
        {activeTab === "description" && (
          <div>
            <p>
              A key objective is engaging digital marketing customers and allowing them to interact
              with the brand through servicing and delivery of digital media. Information is easy
              to access at a fast rate through the use of digital communications.
            </p>
            <p>
              Users with access to the Internet can use many digital mediums, such as Facebook,
              YouTube, Forums, and Email, etc. Through digital communications, it creates a
              multi-communication channel where information can be quickly exchanged around the
              world by anyone without regard to whom they are. Social segregation plays no part
              through social mediums due to lack of face-to-face communication and information being
              widespread instead of to a selective audience.
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <p>No reviews yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
