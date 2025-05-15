import React from 'react';
import './CSS/Portfolio.css'
import Medipro from "../Images/MediPro.jpg";
import FlexiFund from "../Images/FlexiFund.jpg";
import MallExplorer from "../Images/Mall-Explorer.jpg"
import exclamination from '../Icons/exclamination.png';

const PortFolio = ()=>{




return(

<div className='Portfolio-Container'>


<div className='Portfolio' > <img src={exclamination} className='ex-icon'></img>Portfolio</div>

<div className='Portfolio-head'>BEHAVIOUR SHOWS WORTH</div>
<p className='Portfolio-info'> We specialize in transforming businesses into extraordinary brands. We're passionate about continuing our mission. Explore our stellar client roster and the results-driven strategies we're implementing for them.</p>

<ul id="Portfolio-main">
<div className='Mobile-box' id="med1">


<div className='Mobile-Application'>MEDIPRO - PATIENT BOOKING APPLICATION </div>

<p className='Mobile-info'>To develop a user-friendly application that enhances patient experience, streamlines hospital operations, and facilitates better communication between patients and healthcare providers. This project aims to leverage technology to create a more seamless healthcare experience for patients and providers alike, ultimately leading to better health outcomes.</p>

<p className='Mobile-OurServices'>Our Services : <span className='Mobile-Service'>  Mobile Application</span></p>


<button className='Mobile-Check'>Check it out!</button>
<div className='Mobile-Profile'>
  <img src={Medipro} alt="Medipro" className='Medipro-img'></img>
</div>


</div>



<div className='Mobile-box' id="flex1">

<div className='FlexiFund-Application'>Flexi Fund- BANKING DASHBOARD </div>

<p className='FlexiFund-info'>The displays key metrics, including the total balance of revenue, total accounts, daily transactions, transaction trends, customer engagement, and account growth.</p>

<p className='FlexiFund-OurServices'>Our Services : <span className='FlexiFund-Service'> Mobile Application & Dashboard Design</span></p>

<button className='FlexiFund-Check'>Check it out!</button>

<div className='FlexiFund-Profile'>
  <img src={FlexiFund} alt="FlexiFund" className='FlexiFund-img'></img>
</div>


</div>



<div className='Mobile-box' id="mall1">
<div className='Mall-Application'>MALL EXPLORER </div>
<p className='Mall-info'>Mall Explorer is an innovative mobile application designed to enhance the shopping experience for mall-goers by providing seamless navigation assistance and exclusive discount offers. With the increasing complexity and size of modern shopping malls, finding specific stores and deals can be challenging. Mall Explorer aims to simplify this process and make shopping more enjoyable and rewarding.</p>

<p className='Mall-OurServices'>Our Services : <span className='Mall-Service'> Mobile Application Design</span></p>

<button className='Mall-Check'>Check it out!</button>

<div className='Mall-Profile'>
  <img src={MallExplorer} alt="Mall-Explorer" className='Mall-img'></img>
</div>

</div>




<div className='Mobile-box' id="mall1">
<div className='Mall-Application'>Kavitanch_Gaav</div>
<p className='Mall-info'>Mall Explorer is an innovative mobile application designed to enhance the shopping experience for mall-goers by providing seamless navigation assistance and exclusive discount offers. With the increasing complexity and size of modern shopping malls, finding specific stores and deals can be challenging. Mall Explorer aims to simplify this process and make shopping more enjoyable and rewarding.</p>

<p className='Mall-OurServices'>Our Services : <span className='Mall-Service'> Mobile Application Design</span></p>

<button className='Mall-Check'>Check it out!</button>

<div className='Mall-Profile'>
  <img src={MallExplorer} alt="Mall-Explorer" className='Mall-img'></img>
</div>

</div>


<div className='Mobile-box' id="mall1">
<div className='Mall-Application'>MALL EXPLORER </div>
<p className='Mall-info'>Mall Explorer is an innovative mobile application designed to enhance the shopping experience for mall-goers by providing seamless navigation assistance and exclusive discount offers. With the increasing complexity and size of modern shopping malls, finding specific stores and deals can be challenging. Mall Explorer aims to simplify this process and make shopping more enjoyable and rewarding.</p>

<p className='Mall-OurServices'>Our Services : <span className='Mall-Service'> Mobile Application Design</span></p>

<button className='Mall-Check'>Check it out!</button>

<div className='Mall-Profile'>
  <img src={MallExplorer} alt="Mall-Explorer" className='Mall-img'></img>
</div>

</div>

</ul>





</div>


)




}

export default PortFolio;