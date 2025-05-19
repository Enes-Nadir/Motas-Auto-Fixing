import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const HeaderOne = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('lt');

  useEffect(() => {
    var offCanvasNav = document.getElementById("offcanvas-navigation");
    var offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='mean-expand-class'>+</span>"
      );
    }

    var menuExpand = offCanvasNav.querySelectorAll(".mean-expand-class");
    var numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenu = () => {
    setActive(!active);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  return (
    <>
      <header className="nav-header header-layout1">
        <div className={`sticky-wrapper ${scroll && "sticky"}`}>
          <div className="menu-area">
            <div className="header-navbar-logo logo-large">
              <Link to="/">
                <img src="assets/img/logo-white.svg" alt="Motas" 
                   width="224" 
                   height="100" 
                   loading="lazy" 
                   title="Motas Logo" 
                />
              </Link>
            </div>
            <div className="container">
              <div className="row align-items-center justify-content-lg-start justify-content-between">
                <div className="col-auto d-xl-none d-block">
                  <div className="header-logo">
                    <Link to="/">
                      <img src="assets/img/logo-white.svg" alt="Motas" 
                         width="224" 
                         height="100" 
                         loading="lazy" 
                         title="Motas Logo" 
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li>
                        <NavLink
                          to="/"
                          className={(navData) =>
                            navData.isActive ? "active" : ""
                          }
                        >
                          {t('header.home')}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/about"
                          className={(navData) =>
                            navData.isActive ? "active" : ""
                          }
                        >
                         {t('header.about')}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/service"
                          className={(navData) =>
                            navData.isActive ? "active" : ""
                          }
                        >
                          {t('header.services')}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/contact"
                          className={(navData) =>
                            navData.isActive ? "active" : ""
                          }
                        >
                          {t('header.contact')}
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                  <div className="navbar-right d-inline-flex d-lg-none">
                    <button
                      type="button"
                      className="menu-toggle icon-btn"
                      onClick={mobileMenu}
                    >
                      <i className="fas fa-bars" />
                    </button>
                  </div>
                </div>
                <div className="col-auto ms-auto d-xl-flex align-items-center d-none">
                  <div className="language-switcher">
                    <button>{currentLanguage.toUpperCase()}</button>
                    <div className="language-options">
                      <button onClick={() => changeLanguage('lt')}>LT</button>
                      <button onClick={() => changeLanguage('en')}>EN</button>
                      <button onClick={() => changeLanguage('ru')}>RU</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="logo-bg" />
          </div>
        </div>

        <div className={`mobile-menu-wrapper ${active && "body-visible"}`}>
          <div className="mobile-menu-area">
            <div className="mobile-logo">
              <Link to="/">
                <img src="assets/img/logo-white.svg" alt="Motas" 
                   width="100" 
                   height="44" 
                   loading="lazy" 
                   title="Motas Logo" 
                />
              </Link>
              <button className="menu-toggle" onClick={mobileMenu}>
                <i className="fa fa-times" />
              </button>
            </div>
            <div className="mobile-menu">
              <div className="language-switcher mobile-language-switcher">
                <button>{currentLanguage.toUpperCase()}</button>
                <div className="language-options">
                  <button onClick={() => changeLanguage('en')}>EN</button>
                  <button onClick={() => changeLanguage('lt')}>LT</button>
                  <button onClick={() => changeLanguage('ru')}>RU</button>
                </div>
              </div>

              <ul id="offcanvas-navigation">
                <li>
                  <NavLink
                    to="/"
                    className={(navData) => (navData.isActive ? "active" : "")}
                  >
                    {t('header.home')}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={(navData) => (navData.isActive ? "active" : "")}
                  >
                    {t('header.about')}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/service"
                    className={(navData) => (navData.isActive ? "active" : "")}
                  >
                    {t('header.services')}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={(navData) => (navData.isActive ? "active" : "")}
                  >
                    {t('header.contact')}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderOne;
