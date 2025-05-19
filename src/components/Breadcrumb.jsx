import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from '../assets/Breadcrump-bg.png';
import { useTranslation } from 'react-i18next';


const Breadcrumb = ({ title }) => {
  const { t, i18n } = useTranslation();


  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '110px 0',
  };

  return (
    <div className="breadcumb-wrapper" style={backgroundImageStyle}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="breadcumb-content">
              <h1 className="breadcumb-title">{title}</h1>
              <ul className="breadcumb-menu">
                <li>
                  <Link to="/">{t('header.home')}</Link>
                </li>
                <li className="active">{title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
