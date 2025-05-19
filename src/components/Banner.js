import React from "react";
import { Link } from "react-router-dom";
import Herobg1 from "../assets/bg_2.png";
import Car from "../assets/Image_1.png";

const Banner = () => {
  return (
    <div
      className="banner-wrapper"
      style={{ backgroundImage: `url(${Herobg1})`, padding: '200px 0 0 0' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="banner-content">
              <span className="sub-title text-white">Top-Notch Repair Services</span>
              <h1 className="banner-title text-white">
                Get Your Car{" "}
                <span>
                  Back On Track
                </span>{" "}
                With Us
              </h1>
              <p className="banner-text text-white">
                Quality repair services to keep your vehicle running smoothly.
              </p>
              <div className="btn-group">
                <Link to="/about" className="btn">
                  Learn About Us
                </Link>
                <Link to="/service" className="btn style-border">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 text-center">
            <div className="banner-thumb">
              <img src={Car} alt="Repair Shop" style={{ width: '100%', height: 'auto', maxHeight: '600px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
