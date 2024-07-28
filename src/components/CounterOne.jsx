import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

const CounterOne = () => {
  const { t } = useTranslation();

  return (
    <div className="counter-area-1 space-bottom">
      <div className="container">
        <div className="counter-wrap1">
          <div className="row gx-0 align-items-center">
            <div className="col-lg-6">
              <div className="counter-card-wrap">
                <div className="row gy-30 justify-content-between">
                  <div className="col-sm-6 col-lg-auto">
                    <div className="counter-card">
                      <div className="media-body">
                        <h2 className="counter-card_number">
                          <TrackVisibility once>
                            {({ isVisible }) =>
                              isVisible && (
                                <span className="counter-number">
                                  <CountUp delay={0} start={0} end={100} />
                                  %
                                </span>
                              )
                            }
                          </TrackVisibility>
                        </h2>
                        <p className="counter-card_text">{t('counter.qualityService')}</p>
                      </div>
                      <div className="counter-card_icon">
                        <img
                          src="assets/img/icon/counter-icon_1-1.svg"
                          alt="Motas"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-auto">
                    <div className="counter-card">
                      <div className="media-body">
                        <h2 className="counter-card_number">
                          <TrackVisibility once>
                            {({ isVisible }) =>
                              isVisible && (
                                <span className="counter-number">
                                  <CountUp delay={0} start={0} end={300} />
                                  +
                                </span>
                              )
                            }
                          </TrackVisibility>
                        </h2>
                        <p className="counter-card_text">{t('counter.happyClients')}</p>
                      </div>
                      <div className="counter-card_icon">
                        <img
                          src="assets/img/icon/counter-icon_1-2.svg"
                          alt="Motas"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-auto">
                    <div className="counter-card">
                      <div className="media-body">
                        <h2 className="counter-card_number">
                          <TrackVisibility once>
                            {({ isVisible }) =>
                              isVisible && (
                                <span className="counter-number">
                                  <CountUp delay={0} start={0} end={10} />
                                </span>
                              )
                            }
                          </TrackVisibility>
                        </h2>
                        <p className="counter-card_text">{t('counter.teamMember')}</p>
                      </div>
                      <div className="counter-card_icon">
                        <img
                          src="assets/img/icon/counter-icon_1-3.svg"
                          alt="Motas"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-auto">
                    <div className="counter-card">
                      <div className="media-body">
                        <h2 className="counter-card_number">
                          <TrackVisibility once>
                            {({ isVisible }) =>
                              isVisible && (
                                <span className="counter-number">
                                  <CountUp delay={0} start={0} end={1} />
                                </span>
                              )
                            }
                          </TrackVisibility>
                        </h2>
                        <p className="counter-card_text">{t('counter.shops')}</p>
                      </div>
                      <div className="counter-card_icon">
                        <img
                          src="assets/img/icon/counter-icon_1-4.svg"
                          alt="Motas"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="counter-checklist-wrap"
                style={{
                  backgroundImage:
                    "url(assets/img/bg/counter-checklist-bg.png)",
                }}
              >
                <div className="checklist style-white mb-50">
                  <ul>
                    <li>
                      <i className="fas fa-check" />
                      {t('counter.checklist1')}
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      {t('counter.checklist2')}
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      {t('counter.checklist3')}
                    </li>
                  </ul>
                </div>
                <div className="call-media-wrap">
                  <div className="icon">
                    <img src="assets/img/icon/phone-1.svg" alt="Motas" />
                  </div>
                  <div className="media-body">
                    <h6 className="title text-white">{t('counter.requestCall')}</h6>
                    <h4 className="link">
                      <a className="text-white" href="tel:6295550129">
                        (629) 555-0129
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterOne;
