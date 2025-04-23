import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../style/components_style/AboutPageComponents/companyjourney.css';

// Images
import Journey1 from "../../images/About_Page_Images/Journey1.jpg"
import Journey2 from "../../images/About_Page_Images/Journey2.jpg"
import Journey3 from "../../images/About_Page_Images/Journey3.jpg"
import Journey4 from "../../images/About_Page_Images/Journey4.jpg"

const journey = [
  {
    year: '1990',
    title: 'JOURNEY WAS STARTED',
    description: 'While the adoption of cryptocurrency for everyday transactions is growing.',
    image: Journey1
  },
  {
    year: '2015',
    title: 'GET REWARDS',
    description: 'While the adoption of cryptocurrency for everyday transactions is growing.',
    image: Journey2
  },
  {
    year: '2018',
    title: 'NOMINATE IN AWWWARDS',
    description: 'While the adoption of cryptocurrency for everyday transactions is growing.',
    image: Journey3
  },
  {
    year: '2024',
    title: 'STILL GRINDING',
    description: 'While the adoption of cryptocurrency for everyday transactions is growing.',
    image: Journey4
  }
];

const CompanyJourney = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="journey-container">
      <h5 className="journey-subtitle" data-aos="fade-down">HISTORY</h5>
      <h1 className="journey-title" data-aos="fade-up">COMPANY JOURNEY</h1>
      <div className="journey-timeline">
        {journey.map((item, idx) => (
          <div
            key={idx}
            className="journey-row"
            data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
          >
            {idx % 2 === 0 ? (
              <>
                <div className="journey-left" data-aos="zoom-in">
                  <img src={item.image} alt={item.title} className="journey-img" />
                </div>
                <div className="journey-right" data-aos="fade-up">
                  <h6 className="journey-step-title">{item.title}</h6>
                  <h2 className="journey-year">{item.year}</h2>
                  <p className="journey-description">{item.description}</p>
                </div>
              </>
            ) : (
              <>
                <div className="journey-right" data-aos="fade-up">
                  <h6 className="journey-step-title">{item.title}</h6>
                  <h2 className="journey-year">{item.year}</h2>
                  <p className="journey-description">{item.description}</p>
                </div>
                <div className="journey-left" data-aos="zoom-in">
                  <img src={item.image} alt={item.title} className="journey-img" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyJourney;
