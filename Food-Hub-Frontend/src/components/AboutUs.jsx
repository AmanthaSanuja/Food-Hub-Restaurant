import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function AboutUs () {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">About Us</h1>
      <p className="text-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
        Welcome to Food Hub! We are passionate about serving delicious, high-quality meals
        crafted with the freshest ingredients. Our mission is to bring people together 
        through amazing food experiences.
      </p>

      {/* Mission & Vision */}
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h3 className="card-title">Our Mission</h3>
              <p className="card-text">
                To deliver exceptional culinary experiences that delight our customers
                and support local communities.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h3 className="card-title">Our Vision</h3>
              <p className="card-text">
                To be the leading restaurant in innovation, quality, and sustainability, 
                loved by food enthusiasts everywhere.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <h2 className="text-center mb-4">Meet Our Team</h2>
      <div className="row g-4 justify-content-center">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card text-center shadow h-100">
            <img src="https://via.placeholder.com/120" className="card-img-top rounded-circle mx-auto mt-4 img-thumbnail" style={{ width: "120px", height: "120px", objectFit: "cover" }} alt="Chef John" />
            <div className="card-body">
              <h5 className="card-title">Chef John</h5>
              <p className="card-text text-muted">Head Chef</p>
            </div>
          </div>
        </div>
        
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card text-center shadow h-100">
            <img src="https://via.placeholder.com/120" className="card-img-top rounded-circle mx-auto mt-4 img-thumbnail" style={{ width: "120px", height: "120px", objectFit: "cover" }} alt="Emma" />
            <div className="card-body">
              <h5 className="card-title">Emma</h5>
              <p className="card-text text-muted">Operations Manager</p>
            </div>
          </div>
        </div>
        
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card text-center shadow h-100">
            <img src="https://via.placeholder.com/120" className="card-img-top rounded-circle mx-auto mt-4 img-thumbnail" style={{ width: "120px", height: "120px", objectFit: "cover" }} alt="Liam" />
            <div className="card-body">
              <h5 className="card-title">Liam</h5>
              <p className="card-text text-muted">Customer Experience</p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card text-center shadow h-100">
            <img src="https://via.placeholder.com/120" className="card-img-top rounded-circle mx-auto mt-4 img-thumbnail" style={{ width: "120px", height: "120px", objectFit: "cover" }} alt="Liam" />
            <div className="card-body">
              <h5 className="card-title">Liam</h5>
              <p className="card-text text-muted">Customer Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
