// import React from 'react';
// import './CSS/Aboutus.css'
// import headset from '../Icons/headset.png';
// import social  from '../Icons/social.png'
// import  multidevice from '../Icons/multi-device.png';

// const Aboutus = () =>{

// return(

// <div className='Aboutus-Container'>

// <div className='About-us'>About Us</div>

// <div className='About-que'>WHY CHOOSE US?</div>

// <p className='About-info'>At Designvio UX, we are more than just designers—we are problem solvers, innovators, and creators dedicated to delivering exceptional digital experiences. Here’s why businesses trust us:</p>




// <div className='Features'>Included Features</div>

// <div className='Features-head'>OPTIMIZING EVERY PHASE</div>
// <p className='Features-info'>We maximize every opportunity to drive success, ensuring each step adds value and brings you closer to your goals.</p>


// <div className='Features-grid'>

// <div className="Features-card">
//           <div className="Features-icon">
//           <img src={headset}></img>
//           </div>
//           <h3 className='Features-heading'>CUSTOM DESIGN</h3>
          
//           <p className='Features-inform'>
//           Unique and tailored designs that reflect your brand’s personality and values.
//           </p>
          
//         </div>

     
//         <div className="Features-card">
//           <div className="Features-icon">
//            <img src={multidevice} className='multidevice'></img>
//           </div>
//           <h3 className='Features-heading'>RESPONSIVE LAYOUT</h3>
//           <p className='Features-inform'>
//           Ensuring your store looks stunning and functions perfectly on all devices.
//           </p>
          
//         </div>

       
//         <div className="Features-card">
//           <div className="Features-icon">
//           <img src={social}></img>
//           </div>
//           <h3 className='Features-heading'>SOCIAL MEDIA</h3>
//           <p className='Features-inform'>
//           Linking your shop to social media sites to boost your digital visibility.
//           </p>
       
//         </div>



// </div>

//   </div>









// );

// };

// export default Aboutus;


import React, { useState } from 'react';
import './CSS/Aboutus.css';
import headset from '../Icons/headset.png';
import social from '../Icons/social.png';
import multidevice from '../Icons/multi-device.png';
import exclamination from '../Icons/exclamination.png';

const Aboutus = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (feature) => setActiveModal(feature);
  const closeModal = () => setActiveModal(null);

  return (
    <div className='Aboutus-Container'>


      <div className='About-us' > <img src={exclamination} className='ex-icon'></img>About Us </div>
      <div className='About-que'>WHY CHOOSE US?</div>
      <p className='About-info'>
        At Designvio UX, we are more than just designers—we are problem solvers, innovators, and creators dedicated to delivering exceptional digital experiences. Here’s why businesses trust us:
      </p>
     

      <div className='Features'><img src={exclamination} className='ex-icon'></img>Included Features</div>
      <div className='Features-head'>OPTIMIZING EVERY PHASE</div>
      <p className='Features-info'>
        We maximize every opportunity to drive success, ensuring each step adds value and brings you closer to your goals.
      </p>

      <div className='Features-grid'>

        {/* CUSTOM DESIGN */}
        <div className="Features-card" onClick={() => openModal('custom')}>
          <div className="Features-icon">
            <img src={headset} alt="Custom Design" />
          </div>
          <h3 className='Features-heading'>CUSTOM DESIGN</h3>
          <p className='Features-inform'>
            Unique and tailored designs that reflect your brand’s personality and values.
          </p>
        </div>

        {/* RESPONSIVE LAYOUT */}
        <div className="Features-card" onClick={() => openModal('responsive')}>
          <div className="Features-icon">
            <img src={multidevice} className='multidevice' alt="Responsive Layout" />
          </div>
          <h3 className='Features-heading'>RESPONSIVE LAYOUT</h3>
          <p className='Features-inform'>
            Ensuring your store looks stunning and functions perfectly on all devices.
          </p>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="Features-card" onClick={() => openModal('social')}>
          <div className="Features-icon">
            <img src={social} alt="Social Media" />
          </div>
          <h3 className='Features-heading'>SOCIAL MEDIA</h3>
          <p className='Features-inform'>
            Linking your shop to social media sites to boost your digital visibility.
          </p>
        </div>
      </div>

      {/* MODALS */}
      {activeModal && (
        <div className='modal-overlay' onClick={closeModal}>
          <div className='modal-content'>
            <button className='modal-close' onClick={closeModal}>×</button>
            {activeModal === 'custom' && (
              <>
              <div className='include-features'><img src={exclamination} className='ex-icon'></img><span>Included Features</span></div>
                <div className='modal-title'>CUSTOM DESIGN</div>
                <p className='modal-text'>
                Our custom design service ensures that your Shopify store stands out with a unique, tailored design that perfectly reflects your brand’s personality and values. We work closely with you to understand your vision and translate it into a visually stunning and cohesive design. From color schemes to typography, every element is meticulously crafted to create a seamless and engaging user experience. Our goal is to deliver a design that not only looks great but also enhances your brand identity and helps you connect with your target audience.
                </p>
                <button className='back-to-page' onClick={closeModal}>Back to Page</button>
              </>
            )}
            {activeModal === 'responsive' && (
              <>
               <div className='include-features'><img src={exclamination} className='ex-icon'></img><span>Included Features</span></div>
                <div className='modal-title'>RESPONSIVE LAYOUT</div>
                <p className='modal-text'>
                In today’s multi-device world, having a responsive layout is crucial. Our responsive design ensures that your Shopify store looks stunning and functions perfectly on all devices, whether it’s a desktop, tablet, or smartphone. We use the latest techniques to create fluid grids and flexible images that automatically adjust to different screen sizes. This means your customers will enjoy a consistent and optimized shopping experience no matter how they access your site, leading to higher engagement and conversion rates.
                </p>
                <button className='back-to-page' onClick={closeModal} >Back to Page</button>
              </>
            )}
            {activeModal === 'social' && (
              <>
                     <div className='include-features'><img  src={exclamination} className='ex-icon'></img><span>Included Features</span></div>
                <div className='modal-title'>SOCIAL MEDIA</div>
                <p className='modal-text'>
                Social media integration is a powerful tool for expanding your reach and engaging with your audience. We seamlessly connect your Shopify store with major social media platforms like Facebook, Instagram, and Twitter. This allows you to easily share products, updates, and promotions, driving traffic back to your store. Additionally, integrated social media feeds keep your site content fresh and engaging. By leveraging social media, we help you build a community around your brand, increase visibility, and ultimately boost sales.
                </p>
                <button className='back-to-page'onClick={closeModal} >Back to Page</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Aboutus;


