import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import "../../style/components_style/TeamComponents/team.css";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import member1 from "../../images/Team_Page_Images/Members/Team-Member-1.png";
import member2 from "../../images/Team_Page_Images/Members/Team-Member-2.png";
import member3 from "../../images/Team_Page_Images/Members/Team-Member-3.png";
import member4 from "../../images/Team_Page_Images/Members/Team-Member-4.png";

const teamMembers = [
  { id: 1, name: "Kenan Qafarov", position: "CEO", image: member1 },
  { id: 2, name: "Aysel Məmmədova", position: "CTO", image: member2 },
  {
    id: 3,
    name: "Elnur Əliyev",
    position: "Software Engineer",
    image: member3,
  },
  { id: 4, name: "Leyla Həsənli", position: "UI/UX Designer", image: member4 },
];

function TeamMembers({ isDarkMode = true }) {
  return (
    <div className={isDarkMode ? "team-container theme-dark" : "team-container theme-light"}>
      <h1 className="title">Our Team</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {teamMembers.map((member) => (
          <SwiperSlide key={member.id}>
            <div className="teamMember">
              <div className="topPart">
                <img src={member.image} alt={member.name} />
                <p className="position">{member.position}</p>
              </div>
              <div className="bottomPart">
                <p className="member-name">{member.name}</p>
                <p className="member-desc">
                  Passionate about innovation and technology.
                </p>
              </div>
              <div className="social-icons">
                <CiInstagram className="icon" />
                <FaGithub className="icon" />
                <CiLinkedin className="icon" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


export default TeamMembers;
