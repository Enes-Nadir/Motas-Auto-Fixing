import React from "react";
import { useTranslation } from "react-i18next";

const Workprocess = () => {
  const { t } = useTranslation();

  return (
    <section className="process-area-1 space position-relative">
      <div className="portfolio-shape-img shape-mockup d-lg-block d-none">
        <img
          className="about1-shape-img-1 spin"
          src="/assets/img/normal/about_shape1-2.svg"
          alt="Motas"
        />
        <img
          className="about1-shape-img-2 spin2"
          src="/assets/img/normal/about_shape1-1.svg"
          alt="Motas"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">{t("processArea.subTitle")}</span>
              <h2 className="sec-title">
                {t("processArea.title")}
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-30">
          <div className="col-lg-4 process-card-wrap">
            <div className="process-card">
              <div className="process-card-icon">
                <img src="/assets/img/icon/process-icon-1-1.svg" alt="Motas" />
              </div>
              <h4 className="process-card-title">{t("processArea.step1.title")}</h4>
              <p className="process-card-text">
                {t("processArea.step1.description")}
              </p>
            </div>
          </div>
          <div className="col-lg-4 process-card-wrap">
            <div className="process-card process-card-center">
              <div className="process-card-icon">
                <img src="/assets/img/icon/process-icon-1-2.svg" alt="Motas" />
              </div>
              <h4 className="process-card-title">{t("processArea.step2.title")}</h4>
              <p className="process-card-text">
                {t("processArea.step2.description")}
              </p>
            </div>
          </div>
          <div className="col-lg-4 process-card-wrap">
            <div className="process-card">
              <div className="process-card-icon">
                <img src="/assets/img/icon/process-icon-1-3.svg" alt="Motas" />
              </div>
              <h4 className="process-card-title">{t("processArea.step3.title")}</h4>
              <p className="process-card-text">
                {t("processArea.step3.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workprocess;
