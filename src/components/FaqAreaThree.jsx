import React from "react";
import { useTranslation } from "react-i18next";

const FaqAreaThree = () => {
  const { t } = useTranslation();

  return (
    <div className="faq-area-1 space">
      <div className="container">
        <div
          className="faq-wrap space"
          style={{
            backgroundColor: "#F4F4F4",
            backgroundSize: "cover",
          }}
        >
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-11">
              <div className="title-area text-center">
                <span className="sub-title">{t('faqArea2.subTitle')}</span>
                <h2 className="sec-title">
                  {t('faqArea2.title')}
                </h2>
              </div>
            </div>
            <div className="col-xl-8 col-md-10 col-11">
              <div className="accordion-area accordion" id="faqAccordion">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div key={index} className={`accordion-card style3 ${index === 1 ? 'active' : ''}`}>
                    <div className="accordion-header" id={`collapse-item-${index}`}>
                      <button
                        className={`accordion-button ${index === 1 ? '' : 'collapsed'}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${index}`}
                        aria-expanded={index === 1 ? "true" : "false"}
                        aria-controls={`collapse-${index}`}
                      >
                        {t(`faqArea2.faq${index}.question`)}
                      </button>
                    </div>
                    <div
                      id={`collapse-${index}`}
                      className={`accordion-collapse collapse ${index === 1 ? 'show' : ''}`}
                      aria-labelledby={`collapse-item-${index}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">
                          {t(`faqArea2.faq${index}.answer`)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqAreaThree;
