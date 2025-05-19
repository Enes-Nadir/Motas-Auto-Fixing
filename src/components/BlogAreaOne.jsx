import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ServicePage from "../pages/ServicePage";

const BlogAreaOne = () => {
  const { t } = useTranslation();

  const repairShops = [
    {
      id: 1,
      imgSrc: "assets/img/blog/blog_s1_3.png",
      name: t("repairShops.1.name"),
      description: t("repairShops.1.description"),
      address: t("repairShops.1.address"),
      phone: t("repairShops.1.phone"),
      link: "/shop-details/1"
    }
  ];

  return (
    <>
      <section className="blog-area-1 space-bottom position-relative">
        <div className="blog-shape-img1 shape-mockup d-lg-block d-none">
          <img
            className="about1-shape-img-1 spin"
            src="assets/img/normal/about_shape1-2.svg"
            alt="Fixturbo"
          />
          <img
            className="about1-shape-img-2 spin2"
            src="assets/img/normal/about_shape1-1.svg"
            alt="Fixturbo"
          />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="title-area text-center">
                <span className="sub-title">{t("blogArea.subTitle")}</span>
                <h2 className="sec-title">
                  {t("blogArea.title")}
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {repairShops.map(shop => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={shop.id}>
                <Link to={"/service"} className="shop-card-link">
                  <div className="shop-card">
                    <div className="shop-img">
                      <img src={shop.imgSrc} alt={shop.name} />
                    </div>
                    <div className="shop-content">
                      <h3 className="shop-title">{shop.name}</h3>
                      <p className="shop-description">{shop.description}</p>
                      <p className="shop-address"><i className="fas fa-map-marker-alt"></i> {shop.address}</p>
                      <p className="shop-phone"><i className="fas fa-phone-alt"></i> {shop.phone}</p>
                      <div className="btn style-border3">
                        {t("blogArea.viewDetails")} <i className="fas fa-arrow-right ms-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogAreaOne;
