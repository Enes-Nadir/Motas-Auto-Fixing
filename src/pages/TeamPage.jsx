import React, { useEffect, useState } from "react";
import HeaderOne from "../components/HeaderOne";
import FooterAreaOne from "../components/FooterAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import SubscribeOne from "../components/SubscribeOne";
import TeamAreaTwoGrid from "../components/TeamAreaTwoGrid";
import Preloader from "../helper/Preloader";

const TeamPage = () => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 2000);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Darrell Steward",
      designation: "Software Developer",
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
      designation: "Project Manager",
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
      designation: "Scrum Master",
      img: "assets/img/team/team-1-3.png",
      socialLinks: {
        linkedin: "https://linkedin.com/",
        instagram: "https://www.instagram.com/",
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
      },
    },
    {
      id: 4,
      name: "Wade Warren",
      designation: "Development Manager",
      img: "assets/img/team/team-1-4.png",
      socialLinks: {
        linkedin: "https://linkedin.com/",
        instagram: "https://www.instagram.com/",
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
      },
    },
    {
      id: 5,
      name: "Kristin Watson",
      designation: "Ethical Hacker",
      img: "assets/img/team/team-1-5.png",
      socialLinks: {
        linkedin: "https://linkedin.com/",
        instagram: "https://www.instagram.com/",
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
      },
    },
    {
      id: 6,
      name: "Courtney Henry",
      designation: "Software Developer",
      img: "assets/img/team/team-1-6.png",
      socialLinks: {
        linkedin: "https://linkedin.com/",
        instagram: "https://www.instagram.com/",
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
      },
    },
  ];

  return (
    <>
      {/* Preloader */}
      {active && <Preloader />}

      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Team"} />

      {/* TeamArea Two Grid */}
      <TeamAreaTwoGrid teamMembers={teamMembers} />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default TeamPage;
