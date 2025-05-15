import React from 'react'
import './CSS/Services.css';
import uiux from "../Images/ui-ux.png"
import digital from "../Images/digital.png"
import ecommerce from "../Images/ecommerce.png"
import consulting from "../Images/consulting.png"
import Nocode from "../Images/No-code.png"
import product1 from "../Images/product.png"
import exclamination from '../Icons/exclamination.png';
const Services = ()=>{

return (
  
<div className='Services-Container'>

  <div className='Our-Services'> <img src={exclamination} className='ex-icon'></img> Our Services</div>
  <div>
  <div className='Services-que'>HOW CAN WE HELP?</div>
<p className='info'>Designvio UX , we specialise in crafting exceptional user experiences that elevate brands and drive business success</p>
</div>

{/* <div className='Tech-Container'>

<div className='Services-box'>
  <img className='logo'></img>
  <label className='UX-heading'>UX/UI DESIGN</label>
  <p className='UX-info'>Enhance your Customer experience with intuitive and engaging UX/UI design. We create user-friendly interfaces and seamless interactions that keep your customers coming back. Prices start from 1800€.</p>
   <a classname="ux-offer">Ask for Offer</a>
</div>
<div className='Digital-Marketing'></div>
<div className='Ecommerce'></div>
<div className='Consulting'></div>
<div className='No-Code'></div>
<div className='Product-Video'></div>

</div> */}



<div className="service-grid">
        {/* UX/UI Design */}
        <div className="service-card">
          <div className="service-icon">
            <img className ="uiux" src ={uiux} alt=''></img>
          </div>
          <h3>UX/UI DESIGN</h3>
          
          <p>
            Enhance your customer experience with intuitive and engaging UX/UI design. We create user-friendly interfaces and seamless interactions that keep your customers coming back. 
          </p>
          <a href="#contact" onClick={onContactClick} >Ask for offer →</a>
        </div>

        {/* Digital Marketing */}
        <div className="service-card">
          <div className="service-icon">
            <img src={digital} className="digital" alt=""></img>
          </div>
          <h3>DIGITAL MARKETING</h3>
          <p>
            Expand your reach and grow your business with our comprehensive digital marketing services. From SEO and PPC to content marketing and social media management.
          </p>
          <a href="#contact" onClick={onContactClick} >Ask for offer →</a>
        </div>

        {/* E-Commerce Solutions */}
        <div className="service-card">
          <div className="service-icon">
            <img src={ecommerce} className="ecommerce" alt=""></img>
          </div>
          <h3>E-COMMERCE SOLUTIONS</h3>
          <p>
            Optimize your online store with our tailored e-commerce solutions. We offer everything from Shopify setup to advanced customizations and integrations.
          </p>
          <a href="#contact" onClick={onContactClick} >Ask for offer →</a>
        </div>

{/* CONSULTING & STRATEGY */}
<div className="service-card">
          <div className="service-icon">
          <img src={consulting} className="consulting" alt=""></img>
          </div>
          <h3>CONSULTING & STRATEGY</h3>
          <p>
          Gain insights and direction with our expert consulting services. We provide strategic advice on branding, marketing, and digital transformation to help you navigate and thrive in the competitive landscape.
          </p>
          <a href="#">Ask for offer →</a>
        </div>
{/* No-code Development */}
<div className="service-card">
          <div className="service-icon">
          <img src={Nocode} className="Nocode" alt=""></img>
          </div>
          <h3>No-code Development</h3>
          <p>
          Build powerful websites and applications without writing a single line of code! Our no-code solutions enable rapid development, seamless customization, and cost-effective scalability—perfect for startups and businesses.
          </p>
          <a href="#">Ask for offer →</a>
        </div>
{/* Product Video Editing */}
<div className="service-card">
          <div className="service-icon">
          <img src={product1} className="product1" alt=""></img>
          </div>
          <h3>Product Video Editing</h3>
          <p>
          Engage and captivate your audience with high-quality content. Our services include blog posts, videos, graphics, and more, all crafted to boost your brand’s visibility and impact for businesses.           </p>
          <a href="#">Ask for offer →</a>
        </div>
      </div>




</div>




)


}

export  default Services;