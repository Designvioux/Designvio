import React, {useState, useEffect} from "react";

import "./App.css";
import Aboutus from "./Component/Aboutus";
import Home from "./Component/Home";
import PortFolio from "./Component/Portfolio";
import Services from "./Component/Services";
import TeamSection from "./Component/Team";
import Faqs from "./Component/Faqs";
import Process from "./Component/Process";
import Contact from "./Component/Contactus";
import FooterNav from "./Component/FooterNavbar";
import ContactPopUp from "./Component/ContactPopUp";
import GoogleMapEmbed from "./Component/GoogleMap";
// import Book from "./Component/Book";



const App = () => {
  // const [showPopup, setShowPopup] = useState(false);

  // const handleContactClick = (e) => {
  //   e.preventDefault(); // Prevent anchor jump
  //   setShowPopup(true);
  // };


  const [showFooter, setShowFooter] = useState(false);


  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleContactClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

useEffect(() => {
  const handleScroll = () => {
    const hero = document.getElementById("home");
    const services = document.getElementById("services");
    const contact = document.getElementById("contact"); // Add ID around <Contact /> in JSX

    if (hero && services && contact) {
      const heroBottom = hero.getBoundingClientRect().bottom;
      const servicesTop = services.getBoundingClientRect().top;
      const contactTop = contact.getBoundingClientRect().top;

      const hasScrolledPastHero = heroBottom <= 2 || servicesTop <= window.innerHeight / 2;
      const contactIsVisible = contactTop < window.innerHeight && contactTop > 0;

      // Show footer only if past hero and NOT yet at contact
      setShowFooter(hasScrolledPastHero && !contactIsVisible);
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial check

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <div>
      <div className="heroSection" id="home">
      <Home onContactClick={handleContactClick} />
      {isPopupOpen && <ContactPopUp onClose={handleClosePopup} />}
      </div>
      <div className="back-container">
        <div className="page2" id="services">
          <Services />
        </div>
        <div className="page3">
          <div id="about">
          <Aboutus />
          </div>
          <div id="work">
          <PortFolio />
          </div>
          <div id="team">
          <TeamSection />
          </div>
          <div id="faqs">
          <Faqs />
          </div>
          {/* <div>
      <h1 style={{ textAlign: 'center' }}>📘 3D Book in React</h1>
      <Book/>
    </div> */}
          <div id="process">
          <Process />
          </div>
          <GoogleMapEmbed/>
        {/* <div id="contact">
          <Contact />
          </div> */}
        
         {/* <div id="contact">
          <ContactPopUp/>
         </div> */}
        </div>
      </div>
      
      {/* {showPopup && <ContactPopUp onClose={() => setShowPopup(false)} />} */}
      <div id="footer">
      {showFooter &&<FooterNav/>}
      </div>
      
    </div>
  );
};

export default App;
