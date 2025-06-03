// import React, { useState, useEffect } from "react";
// import "./App.css";
// import Aboutus from "./Component/Aboutus";
// import Home from "./Component/Home";
// import PortFolio from "./Component/Portfolio";
// import Services from "./Component/Services";
// import TeamSection from "./Component/Team";
// import Faqs from "./Component/Faqs";
// import Process from "./Component/Process";
// import Contact from "./Component/Contactus";
// import FooterNav from "./Component/FooterNavbar";
// import ContactPopUp from "./Component/ContactPopUp";
// import GoogleMapEmbed from "./Component/GoogleMap";

// const App = () => {
// const [showFooter, setShowFooter] = useState(false);
// const [isPopupOpen, setIsPopupOpen] = useState(false);

// const handleContactClick = () => {
// setIsPopupOpen(true);
// };

// const handleClosePopup = () => {
// setIsPopupOpen(false);
// };

// useEffect(() => {
// const handleScroll = () => {
// const hero = document.getElementById("home");
// const services = document.getElementById("services");
// const contact = document.getElementById("contact");

//   if (hero && services && contact) {
//     const heroBottom = hero.getBoundingClientRect().bottom;
//     const servicesTop = services.getBoundingClientRect().top;
//     const contactTop = contact.getBoundingClientRect().top;

//     const hasScrolledPastHero =
//       heroBottom <= 2 || servicesTop <= window.innerHeight / 2;
//     const footerIsInView = contactTop < window.innerHeight;

//     setShowFooter(hasScrolledPastHero && !footerIsInView);
//   }
// };

// window.addEventListener("scroll", handleScroll);
// handleScroll();

// return () => window.removeEventListener("scroll", handleScroll);
// }, []);


// useEffect(() => {
// const handleContextMenu = (e) => {
// e.preventDefault();
// alert("Right-click is disabled. Copying content is not allowed.");
// }; 

// const handleCopy = (e) => {
//   e.preventDefault();
//   alert("Copying content is disabled.");
// };

// const handleSelectStart = (e) => {
//   e.preventDefault();
//   alert("Text selection is disabled.");
// };

// document.addEventListener("contextmenu", handleContextMenu);
// document.addEventListener("copy", handleCopy);
// document.addEventListener("selectstart", handleSelectStart);

// return () => {
//   document.removeEventListener("contextmenu", handleContextMenu);
//   document.removeEventListener("copy", handleCopy);
//   document.removeEventListener("selectstart", handleSelectStart);
// };
// }, []);

// return (
// <div style={{ userSelect: "none" }}>
// <div className="heroSection" id="home">
// <Home onContactClick={handleContactClick} />
// {isPopupOpen && <ContactPopUp onClose={handleClosePopup} />}
// </div>
//   <div className="back-container">
//     <div className="page2" id="services">
//       <Services onContactClick={handleContactClick} />
//       {isPopupOpen && <ContactPopUp onClose={handleClosePopup} />}
//     </div>

//     <div className="page3">
//       <div id="about">
//         <Aboutus />
//       </div>
//       <div id="work">
//         <PortFolio />
//       </div>
//       <div id="team">
//         <TeamSection />
//       </div>
//       <div id="faqs">
//         <Faqs />
//       </div>
//       <div id="process">
//         <Process />
//       </div>
//       <GoogleMapEmbed />
//       <div id="contact">
//         <Contact />
//       </div>
//     </div>
//   </div>

//   {isPopupOpen && <ContactPopUp onClose={handleClosePopup} />}

//   <div id="footer">
//     {showFooter && <FooterNav onContactClick={handleContactClick} />}
//   </div>
// </div>
// );
// };

// export default App;




import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
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

const App = () => {
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
      const contact = document.getElementById("contact");

      if (hero && services && contact) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        const servicesTop = services.getBoundingClientRect().top;
        const contactTop = contact.getBoundingClientRect().top;

        const hasScrolledPastHero =
          heroBottom <= 2 || servicesTop <= window.innerHeight / 2;
        const footerIsInView = contactTop < window.innerHeight;

        setShowFooter(hasScrolledPastHero && !footerIsInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔒 Prevent Copying and Right Click
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      alert("Right-click is disabled. Copying content is not allowed.");
    };

    const handleCopy = (e) => {
      e.preventDefault();
      alert("Copying content is disabled.");
    };

    const handleSelectStart = (e) => {
      e.preventDefault();
      alert("Text selection is disabled.");
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("selectstart", handleSelectStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("selectstart", handleSelectStart);
    };
  }, []);

  return (
    <div style={{ userSelect: "none" }}>
      <Helmet>
        <title>DesignVio | UX & Full Stack Development Courses</title>
        <meta
          name="description"
          content="DesignVio offers premium UI/UX and Full Stack Development courses in Satara."
        />
        <meta
          name="keywords"
          content="DesignVio, UIUX Courses, Full Stack Developers, Satara, Karanje Satara"
        />
        <link rel="canonical" href="https://designvio.in/" />
        <meta property="og:title" content="DesignVio | UX Design Agency" />
        <meta
          property="og:description"
          content="DesignVio offers premium UI/UX and Full Stack Development courses in Satara."
        />
        <meta property="og:url" content="https://designvio.in/" />
        <meta
          property="og:image"
          content="https://designvio.in/preview-image.png
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="heroSection" id="home">
        <Home onContactClick={handleContactClick} />
        {isPopupOpen && <ContactPopUp onClose={handleClosePopup} />}
      </div>

      <div className="back-container">
        <div className="page2" id="services">
          <Services onContactClick={handleContactClick} />
          {isPopupOpen && <ContactPopUp onClose={handleClosePopup} />}
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
          <div id="process">
            <Process />
          </div>
          <GoogleMapEmbed />
          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>

      {isPopupOpen && <ContactPopUp onClose={handleClosePopup} />}

      <div id="footer">
        {showFooter && <FooterNav onContactClick={handleContactClick} />}
      </div>
    </div>
  );
};

export default App;
