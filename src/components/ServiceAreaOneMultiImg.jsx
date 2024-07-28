import React from "react";
import { Link } from "react-router-dom";

const ServiceAreaOneMultiImg = ({ services = [] }) => {
  return (
    <div className="service-area-1 space overflow-hidden">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          {services.map((service) => (
            <div className="col-lg-4 col-md-6" key={service.id}>
              <div className="service-card style-shadow">
                <div className="service-card_content">
                  <div className="service-card_icon_price">
                    <div className="service-card_icon">
                      <img src={service.icon} alt={service.title} />
                    </div>
                    <div className="service-card_price">{service.price} €</div>
                  </div>
                  <h4 className="service-card_title h5">
                    {service.title}
                  </h4>
                  <p className="service-card_text">{service.description}</p>
                </div>
                <div className="service-card_img">
                  <img src={service.image} alt={service.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaOneMultiImg;
