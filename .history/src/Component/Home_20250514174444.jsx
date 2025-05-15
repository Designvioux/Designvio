
// import React from 'react';
// import './CSS/Home.css';

// const Home = () => {
//   return (
//     <div className="home-container">
//       <header className="home-header">
//       <div className="logo">
//         <img alt="Designvio.pvt.Ltd"  className="logo-icon"src="../Images/DLogo.png"></img>
//         </div>
//         <nav className="nav-links">
//           <a href="#about">ABOUT</a>
//           <a href="#services">SERVICES</a>
//           <a href="#work">WORK</a>
//           <a href="#contact">CONTACT</a>
//         </nav>
//       </header>

//       <main className="main-content">
//         <h1>
//           <span className="highlight-yellow">ELEVATE</span> YOUR BUSINESS
//         </h1>
//         <h1>
//           WITH <span className="highlight-yellow">INNOVATIVE</span> DESIGN
//         </h1>
//         <p>
//           Unlock the full potential of your brand with cutting-edge design solutions.
//           Let’s bring your vision to life with creativity and strategy!
//         </p>
//         <button className="cta-button">Learn more</button>
//       </main>
//     </div>
//   );
// };

// export default Home;





import React, { useState } from 'react';
import './CSS/Home.css';


const Home = ({onContactClick} ) => {
  const [menuOpen, setMenuOpen] = useState(false);
 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="logo">
          <img alt="Designvio.pvt.Ltd" className="logo-icon" src="../Images/DLogo.png" />
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about">ABOUT</a>
          <a href="#services">SERVICES</a>
          <a href="#work">WORK</a>
          {/* <a href="#contact" onClick={onContactClick} >CONTACT</a> */}
          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJlGTZBVrNpkppzldpsgtSrwGxmwHRhpKdDPvrKpmDVMRMvtkhxzxFRLmfWFwlqDzJScnwg" target="_blank" rel="noopener noreferrer">Contact</a>
        </nav>
      </header>

     

      <main className="main-content">
        <h1>
          <span className="highlight-yellow">ELEVATE</span> YOUR BUSINESS
        </h1>
        <h1>
          WITH <span className="highlight-yellow">INNOVATIVE</span> DESIGN
        </h1>
        <p>
          Unlock the full potential of your brand with cutting-edge design solutions.
          Let’s bring your vision to life with creativity and strategy!
        </p>
        <a href='#about' className="cta-button">LEARN MORE</a>


        
      </main>
    </div>
  );
};

export default Home;

