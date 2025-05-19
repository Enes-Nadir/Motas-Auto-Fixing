import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FooterAreaOne = () => {
  const { t } = useTranslation();

  return (
    <footer
      className="footer-wrapper footer-layout1"
      style={{ backgroundImage: "url(assets/img/bg/footer-bg1-1.png)" }}
    >
      <div className="container">
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">{t('footer.company')}</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link to="/about">{t('footer.about')}</Link>
                    </li>
                    <li>
                      <Link to="/team">{t('footer.team')}</Link>
                    </li>
                    <li>
                      <Link to="/contact">{t('footer.faq')}</Link>
                    </li>
                    <li>
                      <Link to="/contact">{t('footer.privacyPolicy')}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">{t('footer.services')}</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link to="/service">{t('footer.mechanicMasters')}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">{t('footer.contact')}</h3>
                <div className="widget-contact">
                  <p>
                    <Link to="tel:+37069337447">(+370) 693 37447</Link>
                  </p>
                  <p>
                    <Link to="mailto:infoname@mail.com">enes.nadirt@gmail.com</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget widget-newsletter">
                <h3 className="widget_title">{t('footer.getInTouch')}</h3>
                <p className="footer-text mb-50">
                  {t('footer.getLatestNews')}
                </p>
                <form className="newsletter-form">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder={t('footer.yourEmailAddress')}
                      required=""
                    />
                  </div>
                  <button type="submit" className="btn">
                    <i className="fas fa-arrow-right" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-3 justify-content-md-between justify-content-center">
            <div className="col-auto align-self-center">
              <p className="copyright-text text-center">
                © <Link to="#">Motas</Link> 2024 | {t('footer.allRightsReserved')}
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links">
                <Link to="/contact">{t('footer.termsCondition')}</Link>
                <Link to="/contact">{t('footer.privacyPolicy')}</Link>
                <Link to="/contact">{t('footer.contactUs')}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAreaOne;
