import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Herobg1 from "../assets/bg_2.png";
import Car from "../assets/Image_1.png";

const HeroOne = () => {
  const { t } = useTranslation();

  return (
    <div
      className="hero-wrapper hero-1"
      id="hero"
      style={{ backgroundImage: `url(${Herobg1})` }}
    >
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-xl-6">
            <div className="hero-style1">
              <span className="sub-title text-white">{t('hero.subTitle')}</span>
              <h1 className="hero-title text-white">
                {t('hero.title.part1')}{" "}
                <span>
                  {t('hero.title.part2')}
                </span>{" "}
                {t('hero.title.part3')}
              </h1>
              <p className="hero-text text-white">
                {t('hero.text')}
              </p>
              <div className="btn-group">
                <Link to="/about" className="btn">
                  {t('hero.learnAboutUs')}
                </Link>
                <Link to="/service" className="btn style-border">
                  {t('hero.ourServices')}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="hero-thumb text-center">
              <img src={Car} alt="Fixturbo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
