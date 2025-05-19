import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const ContactAreaTwo = () => {
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
    <div className="space-bottom">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-lg-6">
            <div className="contact-form-wrap p-0">
              <div className="title-area">
                <span className="sub-title">Contact form</span>
                <h2 className="sec-title">Car Repair The Best Services</h2>
              </div>
              <form ref={form} onSubmit={sendEmail} className="appointment-form ajax-contact">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
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
                        className="form-control"
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
                        className="form-control"
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
                    className="form-control"
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
    </div>
  );
};

export default ContactAreaTwo;
