import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import HeaderOne from "../components/HeaderOne";
import FooterAreaOne from "../components/FooterAreaOne";
import Preloader from "../helper/Preloader";
import { useTranslation } from 'react-i18next';
import StarRating from "../components/StarRating";
import SamplePhoto from "../assets/Sample_Photo.png";
import Herobg1 from "../assets/Banner1.png";
import i18n from '../i18n';
import axios from 'axios';
import { Helmet } from "react-helmet-async";

const ServicePage = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(true);
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', comment: '' });
  const [rating, setRating] = useState(0);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 2000);

    axios.get('https://motas-df92da3367a5.herokuapp.com/service')
    .then(response => {
      setComments(response.data);
    })
    .catch(error => {
      console.error('Error fetching comments:', error);
    });  
}, []);


  const handleLoadMore = () => {
    setVisibleTestimonials((prevVisible) => prevVisible + 3);
  };

  const handleHideComments = () => {
    setVisibleTestimonials(3);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const renderAverageStars = () => {
    const fullStars = Math.floor(averageRating);
    const halfStar = averageRating - fullStars >= 0.5;
    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="fas fa-star" style={{ color: '#ffd700', fontSize: '30px' }}></span>
        ))}
        {halfStar && <span className="fas fa-star-half-alt" style={{ color: '#ffd700', fontSize: '30px' }}></span>}
        {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
          <span key={i} className="far fa-star" style={{ color: '#ffd700', fontSize: '30px' }}></span>
        ))}
      </>
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    if (rating === 0) {
      alert(t('servicePage.selectRatingAlert'));
      return;
    }

    const newComment = {
      name: formData.name,
      email: formData.email,
      feedback: formData.comment,
      rating: rating,
    };

  axios.post('https://motas-df92da3367a5.herokuapp.com/service', newComment)
    .then(response => {
      setComments([...comments, response.data]);
      setFormData({ name: '', email: '', comment: '' });
      setRating(0);
    })
    .catch(error => {
      console.error('Error saving comment:', error);
    });
  };

  
  const renderFilterButtons = () => {
    const starFilters = [5, 4, 3, 2, 1];
    const translations = {
      en: { singular: "Star", plural: "Stars", all: "All" },
      ru: { singular: "Звезда", plural: "Звезды", all: "Все" },
      lt: { singular: "Žvaigždutė", plural: "Žvaigždutės", all: "Visi" },
    };
    const language = i18n.language || 'lt';

    return (
      <div className="star-filter" style={{ textAlign: 'center', marginBottom: '20px' }}>
        {starFilters.map((star) => (
          <button
            key={star}
            className={`btn ${filter === star ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setFilter(star)}
            style={{ margin: '5px' }}
          >
            {star} {star === 1 ? translations[language].singular : translations[language].plural}
          </button>
        ))}
        <button
          className={`btn ${filter === null ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setFilter(null)}
          style={{ margin: '5px' }}
        >
          {translations[language].all}
        </button>
      </div>
    );
  };

  const filteredComments = filter
    ? comments.filter((comment) => comment.rating === filter)
    : comments;

  const calculateAverageRating = () => {
    const totalRating = comments.reduce((acc, comment) => acc + comment.rating, 0);
    return comments.length ? (totalRating / comments.length).toFixed(1) : 0;
  };

  const averageRating = calculateAverageRating();

  const teamMembers = [
    {
      id: 1,
      name: "Darrell Steward",
      designationKey: "servicePage.designation",
      img: "assets/img/team/team-1-1.png",
      socialLinks: {
        linkedin: "https://linkedin.com/",
        instagram: "https://www.instagram.com/",
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
      },
    },
    {
      id: 2,
      name: "Robert Fox",
      designationKey: "servicePage.designation",
      img: "assets/img/team/team-1-2.png",
      socialLinks: {
        linkedin: "https://linkedin.com/",
        instagram: "https://www.instagram.com/",
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
      },
    },
    {
      id: 3,
      name: "Ralph Edwards",
      designationKey: "servicePage.designation",
      img: "assets/img/team/team-1-3.png",
      socialLinks: {
        linkedin: "https://linkedin.com/",
        instagram: "https://www.instagram.com/",
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
      },
    },
  ];

  const services = [
    {
      id: 1,
      titleKey: "services.FirstService.title",
      descriptionKey: "services.FirstService.description",
      icon: "assets/img/icon/service-icon_1-1.svg",
      image: "assets/img/service/service-1-1.png",
      price: 50
    },
    {
      id: 2,
      titleKey: "services.SecondService.title",
      descriptionKey: "services.SecondService.description",
      icon: "assets/img/icon/service-icon_1-2.svg",
      image: "assets/img/service/service-1-2.png",
      price: 75
    },
    {
      id: 3,
      titleKey: "services.ThirdService.title",
      descriptionKey: "services.ThirdService.description",
      icon: "assets/img/icon/service-icon_1-4.svg",
      image: "assets/img/service/service-1-3.png",
      price: 60
    },
    {
      id: 4,
      titleKey: "services.FourthService.title",
      descriptionKey: "services.FourthService.description",
      icon: "assets/img/icon/service-icon_1-3.svg",
      image: "assets/img/service/service-1-4.png",
      price: 85
    },
    {
      id: 5,
      titleKey: "services.FifthService.title",
      descriptionKey: "services.FifthService.description",
      icon: "assets/img/icon/service-icon_1-5.svg",
      image: "assets/img/service/service-1-5.png",
      price: 70
    },
    {
      id: 6,
      titleKey: "services.SixthService.title",
      descriptionKey: "services.SixthService.description",
      icon: "assets/img/icon/service-icon_1-6.svg",
      image: "assets/img/service/service-1-6.png",
      price: 65
    }
  ];

  return (
    <>
    <Helmet>
      <title>Mechanic Masters - Automobilių remontas, Servisas Vilniuje</title>
      <meta name="description" content="Mechanic Masters - patikimas automobilių servisas, siūlantis aukščiausios kokybės paslaugas Vilniuje. Automobilių remontas, techninė priežiūra, diagnostika ir daugiau." />
      <link rel="canonical" href="/service" />
    </Helmet>

      {active === true && <Preloader />}

      <HeaderOne />

      <div
        className="banner-wrapper"
        style={{ backgroundImage: `url(${Herobg1})`, padding: '200px 0 0 0' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="banner-content">
                <span className="sub-title text-white">{t('banner.subTitle')}</span>
                <h1 className="banner-title text-white">
                  {t('banner.title.part1')}{" "}
                  <span>
                    {t('banner.title.part2')}
                  </span>{" "}
                  {t('banner.title.part3')} Mechanic Masters
                </h1>
                <p className="banner-text text-white">
                  {t('banner.text')}
                </p>
                <div className="btn-group">
                  <RouterLink to="https://on.sprintful.com/mechanic-masters" className="btn" title="Book Now">
                    {t('banner.bookNow')}
                  </RouterLink>
                  <ScrollLink to="services-section" smooth={true} duration={500} className="btn style-border" title="Our Services">
                    {t('banner.ourServices')}
                  </ScrollLink>
                </div>
              </div>
            </div>
            <div className="col-xl-6 text-center">
            </div>
          </div>
        </div>
      </div>

      <div className="about-section space">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <h2>{t('servicePage.about')}</h2>
                <p>{t('servicePage.aboutDescription')}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-image">
                <img src={SamplePhoto} alt={t('altText.aboutUs')} 
                  width="546" 
                  height="364" 
                  loading="lazy"
                  title={t('altText.aboutUs')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="services-section" className="service-area-1 space overflow-hidden">
        <div className="container">
          <h2>{t('ServiceTitle')}</h2> 
          <div className="row gy-4 justify-content-center">
            {services.map((service) => (
              <div className="col-lg-4 col-md-6" key={service.id}>
                <div className="service-card style-shadow">
                  <div className="service-card_content">
                    <div className="service-card_icon_price">
                      <div className="service-card_icon">
                        <img src={service.icon} alt={t(service.titleKey)} 
                          width="40" 
                          height="40" 
                          loading="lazy"
                          title={t(service.titleKey)}
                        />
                      </div>
                      <div className="service-card_price">{service.price} €</div>
                    </div>
                    <h4 className="service-card_title h5">
                      {t(service.titleKey)}
                    </h4>
                    <p className="service-card_text">{t(service.descriptionKey)}</p>
                  </div>
                  <div className="service-card_img">
                    <img src={service.image} alt={t(service.titleKey)} 
                       width="316" 
                       height="150" 
                       loading="lazy"
                       title={t(service.titleKey)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-bottom">
        <div className="container">
          <div className="map-sec">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1726.0329167479301!2d25.34984349715439!3d54.727610400852804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd96e1623f1e07%3A0xad01a5b890081f77!2sVilniaus%20Gedimino%20technikos%20universiteto%20eismo%20mokomasis%20centras!5e0!3m2!1sen!2str!4v1722173806684!5m2!1sen!2str"
              allowFullScreen=""
              loading="lazy"
              title="address"
            />
          </div>
        </div>
      </div>

      <div className="testimonials-section space">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">{t('servicePage.testimonialsTitle')}</span>
            <h2 className="sec-title">{t('servicePage.testimonialsTitle')}</h2>
            <div className="average-rating">
              {renderAverageStars()} <span style={{ fontSize: '24px', marginLeft: '10px' }}>{averageRating} / 5</span>
            </div>
          </div>
          {renderFilterButtons()}
          <div className="row">
            {filteredComments.slice(0, visibleTestimonials).map((testimonial, index) => (
              <div className="col-12 mb-4" key={testimonial._id || index}>
              <div className="testimonial-card">
                  <div className="row">
                    <div className="col-10">
                      <h3>{testimonial.name} <h6>{testimonial.formattedDate}</h6></h3>
                      <p>"{testimonial.feedback}"</p>
                    </div>
                    <div className="col-2 d-flex align-items-center justify-content-end">
                      <div className="star-rating">
                        {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {visibleTestimonials < filteredComments.length && (
            <div className="text-center mt-4">
              <button className="btn btn-primary" onClick={handleLoadMore}>
                {t('servicePage.loadMoreComments')}
              </button>
            </div>
          )}
          {visibleTestimonials > 3 && (
            <div className="text-center mt-4">
              <button className="btn btn-secondary" onClick={handleHideComments}>
                {t('servicePage.hideComments')}
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="write-comment-section space">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">{t('servicePage.leaveCommentTitle')}</span>
            <h2 className="sec-title">{t('servicePage.feedbackTitle')}</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form onSubmit={handleFormSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder={t('servicePage.yourName')}
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder={t('servicePage.emailAddress')}
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <textarea
                      className="form-control"
                      name="comment"
                      rows="5"
                      placeholder={t('servicePage.messageHere')}
                      value={formData.comment}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-12 mb-3 text-center">
                    <label>{t('servicePage.ratingLabel')}</label>
                    <StarRating rating={rating} setRating={setRating} />
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary">
                      {t('servicePage.submitComment')}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="team-area-2 space">
        <h2 style={{ marginLeft: '20px' }}>{t('teamMembers')}</h2>
        <div className="container">
          <div className="row gx-30 gy-30">
            {teamMembers.map((member) => (
              <div className="col-lg-4 col-md-6" key={member.id}>
                <div className="team-card style2">
                  <div className="team-card_img">
                    <img src={member.img} alt={member.name} 
                        width="276" 
                        height="324" 
                        loading="lazy"
                        title={member.name}
                    />
                  </div>
                  <div className="team-card_content">
                    <h4 className="team-card_title">
                      {member.name}
                    </h4>
                    <span className="team-card_desig">{t(member.designationKey)}</span>
                    <div className="team-social_wrap">
                      <div className="social-btn style2">
                        <RouterLink to={member.socialLinks.linkedin} title={`${member.name} LinkedIn`}>
                          <i className="fab fa-linkedin-in" /> LinkedIn
                        </RouterLink>
                        <RouterLink to={member.socialLinks.instagram} title={`${member.name} Instagram`}>
                          <i className="fab fa-instagram" /> Instagram
                        </RouterLink>
                        <RouterLink to={member.socialLinks.facebook} title={`${member.name} Facebook`}>
                          <i className="fab fa-facebook-f" /> Facebook
                        </RouterLink>
                        <RouterLink to={member.socialLinks.twitter} title={`${member.name} Twitter`}>
                          <i className="fab fa-twitter" /> Twitter
                        </RouterLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-bottom">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-6 text-lg-end">
              <div className="faq-thumb2 mb-xl-0 mb-50">
                <div className="about-counter-grid jump">
                  <img
                    src="assets/img/icon/faq2-counter-icon-1.svg"
                    alt="Motas"
                    width="60" 
                    height="70" 
                    loading="lazy"
                    title="Counter Icon"
                  />
                  <div className="media-right">
                    <h3 className="about-counter">
                      <span className="counter-number">250</span>+
                    </h3>
                    <h4 className="about-counter-text">{t('servicePage.servicesWeProvide')}</h4>
                  </div>
                </div>
                <img src="assets/img/normal/faq-thumb-2-1.png" alt="Motas" 
                    width="474" 
                    height="473" 
                    loading="lazy"
                    title="FAQ Thumbnail"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form-wrap p-0">
                <div className="title-area">
                  <span className="sub-title">{t('servicePage.contactForm')}</span>
                  <h2 className="sec-title">{t('servicePage.carRepairServices')}</h2>
                </div>
                <form
                  action="mail.php"
                  method="POST"
                  className="appointment-form ajax-contact"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder={t('servicePage.yourName')}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder={t('servicePage.emailAddress')}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="number"
                          id="number"
                          placeholder={t('servicePage.phoneNumber')}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select
                          name="subject"
                          id="subject"
                          className="form-select"
                          defaultValue={"Choose"}
                        >
                          <option value="Choose">{t('servicePage.chooseOption')}</option>
                          <option value="Construction">{t('servicePage.autoRepair')}</option>
                          <option value="Real Estate">{t('servicePage.carRepair')}</option>
                          <option value="Industry">{t('servicePage.automotive')}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      placeholder={t('servicePage.messageHere')}
                      id="contactForm"
                      className="form-control"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-btn col-12">
                    <button className="btn style2">
                      {t('servicePage.appointmentNow')} <i className="fas fa-arrow-right ms-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-area space">
        <div className="container">
          <div className="row gy-4 justify-content-center">
          </div>
        </div>
      </div>

      <FooterAreaOne />
    </>
  );
};

export default ServicePage;
