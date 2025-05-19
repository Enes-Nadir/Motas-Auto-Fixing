import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from "react-i18next";

const SubscribeOne = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div
        className="footer-top-1 bg-theme"
      >
        <div className="footer-logo">
        </div>
        <div className="call-media-wrap">
          <div className="icon">
            <img src="assets/img/icon/phone-1.svg" alt="motas" />
          </div>
          <div className="media-body">
            <h6 className="title text-white">{t('subscribe.requestingCall')}</h6>
            <h4 className="link">
              <a className="text-white" href="tel:+37069337447">
                (+370) 693 37447
              </a>
            </h4>
          </div>
        </div>
        <div className="social-btn">
          <a href="https://facebook.com/">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="https://twitter.com/">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://instagram.com/">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubscribeOne;
