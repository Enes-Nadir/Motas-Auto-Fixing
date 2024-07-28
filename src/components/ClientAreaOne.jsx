import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';


const ClientAreaOne = () => {
  const form = useRef();
  const { t } = useTranslation();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_t1foecz', 'template_xaplh7a', form.current, '1JD0M_--MlSS2Jryw')
      .then(
        () => {
          console.log('SUCCESS!');
          window.location.reload(); 
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div
      className="client-bg-area"
      style={{ backgroundImage: "url(assets/img/bg/client-bg1-1.png)" }}
    >
      <div className="client-area-1 text-center">
        <div className="container">
          <div className="row global-carousel">
            <Swiper
              spaceBetween={20}
              slidesPerGroup={2}
              speed={1000}
              autoplay={{ delay: 6000 }}
              className="mySwiper"
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                500: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
                1400: {
                  slidesPerView: 5,
                },
              }}
            >
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link to="/">
                      <img src="assets/img/client/Sample_Brand.png" alt="Motas" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link to="/">
                      <img src="assets/img/client/Sample_Brand_Two.png" alt="Motas" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              {/* <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link to="/">
                      <img src="assets/img/client/1-3.png" alt="Motas" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link to="/">
                      <img src="assets/img/client/1-4.png" alt="Motas" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link to="/">
                      <img src="assets/img/client/1-5.png" alt="Motas" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link to="/">
                      <img src="assets/img/client/1-1.png" alt="Motas" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link to="/">
                      <img src="assets/img/client/1-2.png" alt="Motas" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link to="/">
                      <img src="assets/img/client/1-3.png" alt="Motas" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link to="/">
                      <img src="assets/img/client/1-4.png" alt="Motas" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link to="/">
                      <img src="assets/img/client/1-5.png" alt="Motas" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      </div>
      {/*==============================
    Appointment Area  
    ==============================*/}
      <div className="appointment-area-1 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="appointment-form-wrap bg-theme">
                <div className="title-area">
                  <span className="sub-title text-white">{t('clientArea.sendRequest')}</span>
                  <h2 className="sec-title text-white">
                    {t('clientArea.oneStopCarRepair')}
                  </h2>
                </div>
                
                <form ref={form} onSubmit={sendEmail} className="appointment-form ajax-contact">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control style-border2"
                        name="user_name"
                        id="name"
                        placeholder={t('servicePage.yourName')}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control style-border2"
                        name="user_email"
                        id="email"
                        placeholder={t('servicePage.emailAddress')}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control style-border2"
                        name="phone_number"
                        id="number"
                        placeholder={t('servicePage.phoneNumber')}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group col-12">
                  <textarea
                    name="message"
                    placeholder={t('servicePage.messageHere')}
                    id="contactForm"
                    className="form-control style-border2"
                    required
                  />
                </div>
                <div className="form-btn col-12">
                  <button type="submit" value="Send" className="btn style2">
                  {t('servicePage.appointmentNow')} <i className="fas fa-arrow-right ms-2" />
                  </button>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
        <div className="appointment-thumb-1">
          <img
            src="assets/img/normal/appointment-thumb-1-1.png"
            alt="Motas"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientAreaOne;
