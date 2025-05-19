import React, { useEffect, useState } from "react";
import HeaderOne from "../components/HeaderOne";
import FooterAreaOne from "../components/FooterAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import AboutTwo from "../components/AboutTwo";
import ProcessAreaOne from "../components/ProcessAreaOne";
import CTAAreaOne from "../components/CTAAreaOne";
import TestimonialOne from "../components/TestimonialOne";
import SubscribeOne from "../components/SubscribeOne";
import Preloader from "../helper/Preloader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import FaqAreaThree from "../components/FaqAreaThree";


const aboutData = {
  subTitle: "Know About Us",
  title: "Our Mission And Vision",
  description: "Motas is an innovative platform designed to connect customers with local automobile repair shops. Our core mission is to make finding reliable repair services easy with user-friendly platform and efficient appointment scheduling system, enhancing the customer experience and supporting local repair shops in growing their businesses.",
  customersCount: 10,
  experienceYears: 4,
  images: {
    img1: "assets/img/normal/about_2-1.png",
    img2: "assets/img/normal/about_2-2.png",
    icon1: "assets/img/icon/about_icon2-1.svg",
    icon2: "assets/img/icon/about_icon2-2.png",
    titleBg: "assets/img/bg/title-bg-shape.png"
  },
  features: [
    {
      icon: "assets/img/icon/about_icon2-3.svg",
      title: "User-friendly Platform",
      text: "Our platform is designed with ease of use in mind, providing a seamless experience for users to find and connect with local automobile repair shops."
    },
    {
      icon: "assets/img/icon/about_icon2-4.svg",
      title: "Easy Appointment Scheduling",
      text: "Effortlessly schedule appointments with your preferred repair shops using our intuitive booking system, tailored to fit your busy schedule."
    }
  ]
};
const AboutPage = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);

  const { t } = useTranslation();

  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={t('header.about')} />

      {/* About Area */}
      <AboutTwo {...aboutData} />

      {/* Process Area One */}
      <ProcessAreaOne />

      {/*FAQ Section */}
      <FaqAreaThree />

      {/* CTA Area One */}
      <CTAAreaOne />

      {/* Testimonial One */}
      <TestimonialOne />

      {/* Team Area  */}
    <div className="team-area-2 space">
      <div className="container">
        <div className="row gx-30 justify-content-between align-items-center">
          <div className="col-lg-4">
            <div className="title-area mb-lg-0">
              <span className="sub-title">{t('teamArea2.subTitle')}</span>
              <h2 className="sec-title">{t('teamArea2.title')}</h2>
              <p className="sec-text mb-lg-5 mb-4">{t('teamArea2.description')}</p>
              <div className="icon-box">
                <button
                  data-slick-prev=".team-slider2"
                  className="team-slider2 slick-arrow style2 default team-slider2-prev"
                >
                  <i className="fas fa-arrow-left" />
                </button>
                <button
                  data-slick-next=".team-slider2"
                  className="slick-arrow style2 default team-slider2-next"
                >
                  <i className="fas fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row gx-30 global-carousel team-slider2">
              <Swiper
                loop={true}
                navigation={{
                  nextEl: ".team-slider2-next",
                  prevEl: ".team-slider2-prev",
                }}
                spaceBetween={20}
                slidesPerView={2}
                slidesPerGroup={1}
                speed={1000}
                pagination={{ clickable: true }}
                autoplay={{ delay: 6000 }}
                className="mySwiper"
                modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  992: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 2,
                  },
                  1400: {
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="team-card style2">
                    <div className="team-card_img">
                      <img src="assets/img/team/Enes.png" alt="Enes" />
                    </div>
                    <div className="team-card_content">
                      <h4 className="team-card_title">
                        <Link to="/team-details">Enes Nadir Tosun</Link>
                      </h4>
                      <span className="team-card_desig">{t('teamArea2.member1.designation')}</span>
                      <div className="team-social_wrap">
                        <div className="social-btn style2">
                          <Link to="https://linkedin.com/">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                          <Link to="https://www.instagram.com/">
                            <i className="fab fa-instagram" />
                          </Link>
                          <Link to="https://facebook.com/">
                            <i className="fab fa-facebook-f" />
                          </Link>
                          <Link to="https://twitter.com/">
                            <i className="fab fa-twitter" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="team-card style2">
                    <div className="team-card_img">
                      <img src="assets/img/team/Umut.png" alt="Fixturbo" />
                    </div>
                    <div className="team-card_content">
                      <h4 className="team-card_title">
                        <Link to="/team-details">Umut Cakir</Link>
                      </h4>
                      <span className="team-card_desig">{t('teamArea2.member2.designation')}</span>
                      <div className="team-social_wrap">
                        <div className="social-btn style2">
                          <Link to="https://linkedin.com/">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                          <Link to="https://www.instagram.com/">
                            <i className="fab fa-instagram" />
                          </Link>
                          <Link to="https://facebook.com/">
                            <i className="fab fa-facebook-f" />
                          </Link>
                          <Link to="https://twitter.com/">
                            <i className="fab fa-twitter" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default AboutPage;
