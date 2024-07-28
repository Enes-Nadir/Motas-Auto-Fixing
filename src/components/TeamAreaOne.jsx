import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TeamAreaOne = () => {
  const { t } = useTranslation();

  return (
    <div className="team-area-1 space-bottom">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-7 col-md-8">
            <div className="title-area">
              <span className="sub-title style2">{t("teamArea.subTitle")}</span>
              <h2 className="sec-title">
                {t("teamArea.title")}
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-30">
          <div className="col-lg-12">
            <div className="team-card">
              <div className="team-card_content">
                <h4 className="team-card_title">
                  <Link to="/team-details">Enes Nadir Tosun</Link>
                </h4>
                <span className="team-card_desig">{t("teamArea.member1.designation")}</span>
              </div>
              <div className="team-card_text">
                <p>{t("teamArea.member1.description")}</p>
              </div>
              <div className="team-card_img">
                <img src="assets/img/team/Enes.png" alt="Enes Nadir Tosun" />
              </div>
              <div className="team-social_wrap">
                <div className="social-btn style2">
                  <Link to="https://www.linkedin.com/in/enesnadirtosun/">
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link to="https://www.instagram.com/nadir_enes/">
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link to="https://www.facebook.com/enes.tosun.180/">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  {/* <Link to="https://x.com/tosun61198">
                    <i className="fab fa-twitter" />
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="team-card">
              <div className="team-card_content">
                <h4 className="team-card_title">
                  <Link to="/team-details">Umut Cakir</Link>
                </h4>
                <span className="team-card_desig">{t("teamArea.member2.designation")}</span>
              </div>
              <div className="team-card_text">
                <p>{t("teamArea.member2.description")}</p>
              </div>
              <div className="team-card_img">
                <img src="assets/img/team/Umut.png" alt="Umut Cakir" />
              </div>
              <div className="team-social_wrap">
                <div className="social-btn style2">
                  <Link to="https://www.linkedin.com/in/enesnadirtosun/">
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link to="https://www.instagram.com/umutt1461/">
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link to="https://www.facebook.com/umutt14611">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  {/* <Link to="https://twitter.com/">
                    <i className="fab fa-twitter" />
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamAreaOne;
