import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import HeaderOne from "../components/HeaderOne";
import HeroOne from "../components/HeroOne";
import CounterOne from "../components/CounterOne";
// import PortfolioOne from "../components/PortfolioOne";
import ClientAreaOne from "../components/ClientAreaOne";
import TeamAreaOne from "../components/TeamAreaOne";
import CTAAreaOne from "../components/CTAAreaOne";
import Workprocess from "../components/ProcessAreaOne";
import FaqAreaOne from "../components/FaqAreaOne";
import BlogAreaOne from "../components/BlogAreaOne";
import FooterAreaOne from "../components/FooterAreaOne";
import SubscribeOne from "../components/SubscribeOne";
import Preloader from "../helper/Preloader";
import AboutTwo from "../components/AboutTwo";

const aboutData = {
  subTitle: "Know About Us",
  title: "Our Mission And Vision",
  description: "Motas is an innovative platform designed to connect customers with local automobile repair shops. Our core mission is to make finding reliable repair services easy with user-friendly platform and efficient appointment scheduling system, enhancing the customer experience and supporting local repair shops in growing their businesses.",
  customersCount: 5,
  experienceYears: 10,
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


const HomePageOne = () => {
  const { i18n } = useTranslation();
  const [active, setActive] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (i18n.language === 'ru') {
      document.body.classList.add('russian-font');
    } else {
      document.body.classList.remove('russian-font');
    }
  }, [i18n.language]);


  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}
      {/* Header one */}
      <HeaderOne />

      {/* Hero One */}
      <HeroOne />

      {/* Counter One */}
      <CounterOne />

      {/* Portfolio One
      <PortfolioOne /> (For future!!)*/}

      {/* About One Years of Experience part */}
      <AboutTwo {...aboutData} />

      {/* Shops side */}
      <BlogAreaOne />

      {/* Process Area One */}
      <Workprocess />

      {/* Service Area One This is for services*/}
      {/* <ServiceAreaOne /> */}

      {/* Marquee One */}
      {/* <MarqueeOne /> */}


      {/* Pricing Plan One
      <PricingPlanOne /> */}

      {/* Team Area One */}
      <TeamAreaOne />

      {/* CTA Area One */}
      <CTAAreaOne />

      {/* Testimonial One */}
      {/* <TestimonialOne /> */}

      {/* Faq Area One */}
      <div style={{ marginTop: "200px" }}> {/* Adding margin-top here */}
        <FaqAreaOne />
      </div>

      {/* Client Area One */}
      <ClientAreaOne />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default HomePageOne;
