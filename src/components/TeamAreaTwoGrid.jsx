import React from "react";
import { Link } from "react-router-dom";

const TeamAreaTwoGrid = ({ teamMembers = [] }) => {
  console.log('Rendering TeamAreaTwoGrid with members:', teamMembers);

  return (
    <div className="team-area-2 space">
     <h1 style={{ marginLeft: '20px' }}>Team Members</h1>
      <div className="container">
        <div className="row gx-30 gy-30">
          {teamMembers.map((member) => (
            <div className="col-lg-4 col-md-6" key={member.id}>
              <div className="team-card style2">
                <div className="team-card_img">
                  <img src={member.img} alt={member.name} />
                </div>
                <div className="team-card_content">
                  <h4 className="team-card_title">
                      {member.name}
                  </h4>
                  <span className="team-card_desig">{member.designation}</span>
                  <div className="team-social_wrap">
                    <div className="social-btn style2">
                      <Link to={member.socialLinks.linkedin}>
                        <i className="fab fa-linkedin-in" />
                      </Link>
                      <Link to={member.socialLinks.instagram}>
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link to={member.socialLinks.facebook}>
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link to={member.socialLinks.twitter}>
                        <i className="fab fa-twitter" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamAreaTwoGrid;
