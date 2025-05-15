import React, { useState } from "react";
import "./CSS/Faqs.css";

import DownArrow from '../Icons/Down.png';
import UpArrow from '../Icons/Up.png';
import que from '../Icons/que.png';
import exclamination from '../Icons/exclamination.png';

const faqs = [
  {
    question: "What services does Designvio UX offer?",
    answer:
      "We specialize in UI/UX design, website and app design, branding & identity, no-code development, prototyping & wireframing, and user research & testing to help businesses create seamless and impactful digital experiences.",
  },
  {
    question: "What industries do we serve?",
    answer:
      "We work with a wide range of industries, including technology, e-commerce, healthcare, finance, education, and startups, ensuring tailored design solutions for every business.",
  },
  {
    question: "Do you offer no-code development?",
    answer:
      "Yes! We provide no-code development services, allowing businesses to create powerful, scalable websites and applications quickly without traditional coding.",
  },
  {
    question: "Can you redesign an existing website or app?",
    answer:
      "Absolutely! We can revamp and optimize your existing digital product to enhance usability, aesthetics, and overall user experience.",
  },
  {
    question: "How can I get started with Designvio UX?",
    answer:
      "Simply contact us via our website or email, and our team will schedule a consultation to discuss your project and how we can help bring your vision to life. Let us know if you need any modifications or additional FAQs!",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
<div className="fags-container">
    <div className="faq-wrapper">
      {/* <span className="faq-top-text">FAQs</span> */}
      <div className='faq-top-text' > <img src={exclamination} className='ex-icon4'></img>FAQs</div>
      

      <h1 className="faq-heading">QUESTIONS? WE</h1>
      <h1 className="faq-subheading">HAVE THE ANSWERS!</h1>
      <p className="faq-desc">
        This is a compilation of common inquiries about our offerings, crafted
        to aid you in your purchasing decisions.
      </p>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span className="faq-icon"><img src={que} className="que-icon"></img></span>
              <span>{faq.question}</span>
              {/* <span className="arrow">{openIndex === index ? "▼" : {Down}}</span> */}

              <span className="arrow">
  <img 
    src={openIndex === index ? UpArrow : DownArrow} 
    alt="arrow" 
    className="arrow-icon"
  />
</span>

            </div>
            {openIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
   
  );
}
