import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

const AboutTwo = ({ 
  customersCount, 
  experienceYears, 
  images, 
  features 
}) => {
  const { t } = useTranslation();

  return (
    <div className="space-top">
      <div className="container">
        <div className="row">
          <div className="col-xxl-7 col-xl-6">
            <div className="about-thumb2 mb-40 mb-xl-0">
              <div className="about-img-1">
                <img src={images.img1} alt="About Image 1" />
              </div>
              <div className="about-img-2">
                <img src={images.img2} alt="About Image 2" />
              </div>
              <div className="about-counter-wrap jump-reverse">
                <img src={images.icon1} alt="Icon 1" />
                <h3 className="about-counter">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter-number">
                          <CountUp delay={0} start={0} end={customersCount} />
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h3>
                <h4 className="about-counter-text">{t('about.trustedCustomer')}</h4>
              </div>
              <div className="about-year-wrap2 movingX">
                <div className="about-year-grid-wrap">
                  <div className="icon">
                    <img src={images.icon2} alt="Icon 2" />
                  </div>
                  <h3 className="about-counter">
                    <span className="counter-number">{experienceYears}</span>+
                  </h3>
                </div>
                <h4 className="about-year-text">{t('about.yearsOfExperiences')}</h4>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-6">
            <div className="about-content-wrap">
              <div className="title-area mb-30">
                <span className="sub-title">{t('about.subTitle')}</span>
                <h2 className="sec-title">
                  {t('about.title')}{" "}
                </h2>
                <p className="sec-text">{t('about.description')}</p>
              </div>
              {features.map((feature, index) => (
                <div key={index} className="about-feature-wrap style-shadow">
                  <div className="icon">
                    <img src={feature.icon} alt={feature.title} />
                  </div>
                  <div className="about-feature-wrap-details">
                    <h5 className="about-feature-title">{t(`about.features.${index}.title`)}</h5>
                    <p className="about-feature-text">{t(`about.features.${index}.text`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
