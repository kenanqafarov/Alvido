import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../style/components_style/AboutPageComponents/faq.css';

// Images
import faqPFP from "../../images/About_Page_Images/faqPFP.png"

const faqs = [
  {
    question: 'HOW DO I KEEP MY CRYPTOCURRENCY SAFE?',
    answer: 'Use hardware wallets, enable 2FA, and never share your private keys.'
  },
  {
    question: 'CAN I USE CRYPTOCURRENCY FOR EVERYDAY TRANSACTIONS?',
    answer: 'Yes, some vendors accept crypto, but it\'s not yet widely adopted.'
  },
  {
    question: 'HOW DO TAXES WORK WITH CRYPTOCURRENCY?',
    answer: 'Crypto is taxed as property in many jurisdictions. Track your gains/losses.'
  }
];

const CryptoFAQ = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleFAQ = index => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="faq-container">
      <div className="faq-left" data-aos="fade-right">
        <p className="faq-title" data-aos="fade-down">FAQ</p>
        <h1 className="faq-heading" data-aos="fade-up">GET EVERY Q & ANS</h1>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item" data-aos="fade-up" data-aos-delay={index * 150}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span className={`faq-toggle-icon ${openIndexes.includes(index) ? 'open' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${openIndexes.includes(index) ? 'open' : ''}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="faq-right" data-aos="zoom-in">
        <img src={faqPFP} alt="Knight" className="faq-image" />
      </div>
    </div>
  );
};

export default CryptoFAQ;
