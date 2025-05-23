import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CTAAreaOne = () => {
  const { t } = useTranslation();

  return (
    <div className="cta-area-1">
      <div className="cta1-bg-thumb">
        <img src="assets/img/bg/cta-bg1-1.png" alt="Fixturbo" />
      </div>
      <div className="container">
        <div className="cta-wrap1">
          <div className="row justify-content-md-between align-items-center">
            <div className="col-lg-6 col-md-8">
              <div className="title-area mb-md-0">
                <span className="sub-title style2 text-white">{t('ctaArea.subTitle')}</span>
                <h2 className="sec-title text-white mb-0">
                  {t('ctaArea.title')}
                </h2>
              </div>
            </div>
            <div className="col-md-auto">
              <div className="title-area mb-0">
                <Link className="btn" to="/contact">
                  {t('ctaArea.buttonText')} <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAAreaOne;
