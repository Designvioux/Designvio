import React from 'react';
import './CSS/Portfolio.css'
import Medipro from "../Images/MediPro.jpg";
import FlexiFund from "../Images/FlexiFund.jpg";
import MallExplorer from "../Images/Mall-Explorer.jpg"
import exclamination from '../Icons/exclamination.png';
import Kavita from '../Images/kavita.png';
import PocketCar from '../Images/pocketcar.png';
import samarth from '../Images/samarth.png';
import mdl from '../Images/mdl.png';

const PortFolio = () => {
  return (
    <div className='Portfolio-Container'>
      <div className='Portfolio'> <img src={exclamination} className='ex-icon' alt="exclamation"></img>Portfolio</div>

      <div className='Portfolio-head'>BEHAVIOUR SHOWS WORTH</div>
      <p className='Portfolio-info'> We specialize in transforming businesses into extraordinary brands. We're passionate about continuing our mission. Explore our stellar client roster and the results-driven strategies we're implementing for them.</p>

      <div id="Portfolio-main">
        {/* Medipro */}
        <div className='Mobile-box' id="med1">
          <div className='content-left'>
            <div className='Mobile-Application'>MEDIPRO - PATIENT BOOKING APPLICATION</div>
            <p className='Mobile-info'>To develop a user-friendly application that enhances patient experience, streamlines hospital operations, and facilitates better communication between patients and healthcare providers. This project aims to leverage technology to create a more seamless healthcare experience for patients and providers alike, ultimately leading to better health outcomes.</p>
            <p className='Mobile-OurServices'>Our Services: <span className='Mobile-Service'>Mobile Application</span></p>
            <button  onclick="window.location.href=''" className='Mobile-Check'>Check it out!</button>
          </div>
          <div className='Mobile-Profile'>
            <img src={Medipro} alt="Medipro" className='Medipro-img'></img>
          </div>
        </div>

        {/* FlexiFund */}
        <div className='Mobile-box' id="flex1">
          <div className='content-left'>
            <div className='FlexiFund-Application'>Flexi Fund- BANKING DASHBOARD</div>
            <p className='FlexiFund-info'>The displays key metrics, including the total balance of revenue, total accounts, daily transactions, transaction trends, customer engagement, and account growth.</p>
            <p className='FlexiFund-OurServices'>Our Services: <span className='FlexiFund-Service'>Mobile Application & Dashboard Design</span></p>
            <button onclick={()=>window.location.href=''}className='FlexiFund-Check'>Check it out!</button>
          </div>
          <div className='FlexiFund-Profile'>
            <img src={FlexiFund} alt="FlexiFund" className='FlexiFund-img'></img>
          </div>
        </div>

        {/* Mall Explorer */}
        <div className='Mobile-box' id="mall1">
          <div className='content-left'>
            <div className='Mall-Application'>MALL EXPLORER</div>
            <p className='Mall-info'>Mall Explorer is an innovative mobile application designed to enhance the shopping experience for mall-goers by providing seamless navigation assistance and exclusive discount offers. With the increasing complexity and size of modern shopping malls, finding specific stores and deals can be challenging. Mall Explorer aims to simplify this process and make shopping more enjoyable and rewarding.</p>
            <p className='Mall-OurServices'>Our Services: <span className='Mall-Service'>Mobile Application Design</span></p>
            <button  onclick={()=>window.location.href=''} className='Mall-Check'>Check it out!</button>
          </div>
          <div className='Mall-Profile'>
            <img src={MallExplorer} alt="Mall-Explorer" className='Mall-img'></img>
          </div>
        </div>


        <div className='Mobile-box' id="mall1">
          <div className='content-left'>
            <div className='Kavita-Application'>Mazagon Dock Shipbuilders Limited (MDL) </div>
            <p className='Mall-info'>is India's leading defense public sector shipyard, located in Mumbai. It specializes in building warships, submarines, and offshore platforms for the Indian Navy and Coast Guard. Established in 1934, MDL plays a key role in India's naval defense infrastructure.</p>
            <p className='Mall-OurServices'>Our Services: <span className='Mall-Service'> Website Design</span></p>
            <button onclick={()=> window.location.href= 'https://www.mdlindia.in'} className='Kavita-Check'>Check it out!</button>
          </div>
          <div className='kavita-Profile'>
            <img src={mdl} alt="Kavitancha-Gaav jakatwadi" className='KavitachaGaav-img'></img>
          </div>
        </div>


        {/* Kavita */}
        <div className='Mobile-box' id="mall1">
          <div className='content-left'>
            <div className='Kavita-Application'>Kavitanch Gaav Jakatwadi</div>
            <p className='Mall-info'>The website and Application "Kavitanch Gaav Jakatwadi" is dedicated to showcasing the local poetry, folk art, and cultural heritage of the village Jakatwadi in Maharashtra. It features poems by local poets, traditional folk songs, and information about cultural events. The platform aims to digitally preserve and promote the village's cultural identity.</p>
            <p className='Mall-OurServices'>Our Services: <span className='Mall-Service'>Mobile Application and Website Design</span></p>
            <button onclick={()=> window.location.href= 'https://www.kavitanchgaavjakatwadi.in'} className='Kavita-Check'>Check it out!</button>
          </div>
          <div className='kavita-Profile'>
            <img src={Kavita} alt="Kavitancha-Gaav jakatwadi" className='KavitachaGaav-img'></img>
          </div>
        </div>

        {/* Pocket Car */}
        <div className='Mobile-box' id="mall1">
          <div className='content-left'>
            <div className='PocketCar-Application'>Pocket Car</div>
            <p className='Mall-info'>The website pocketcars.in belongs to Pocket Cars, a business based in India that specializes in buying and selling used cars, as well as offering real estate services. They act as dealers for pre-owned vehicles and also operate as real estate agents. Their services include facilitating the purchase and sale of used cars and assisting clients with real estate transactions.</p>
            <p className='Mall-OurServices'>Our Services: <span className='Mall-Service'>Website Design</span></p>
            <button onClick={() => window.location.href = 'https://pocketcars.in'} className="PocketCar-Check">
  Check it out!
</button>

          </div>
          <div className='PocketCar-Profile'>
            <img src={PocketCar} alt="PocketCar" className='PocketCar-img'></img>
          </div>
        </div>


         {/* Sarth Tours and Travels */}
         <div className='Mobile-box' id="mall1">
          <div className='content-left'>
            <div className='PocketCar-Application'>Samarth Tours & Travels </div>
            <p className='Mall-info'>Samarth Tours & Travels is a travel service provider based in Ichalkaranji, Maharashtra, offering a range of transportation solutions. Their services include car rentals and bus bookings, catering to various travel needs. The company is located at Gaon Bhag, 6, Gujari Peth, Ichalkaranji, Maharashtra 416115 . They have an active presence on social media platforms like Facebook, where they share updates and travel-related content .</p>
            <p className='Mall-OurServices'>Our Services: <span className='Mall-Service'>Website Design</span></p>
            <button onClick={() => window.location.href = 'http://www.samarthtourstravels.in/'} className="PocketCar-Check">
  Check it out!
</button>

          </div>
          <div className='PocketCar-Profile'>
            <img src={samarth} alt="PocketCar" className='PocketCar-img'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortFolio;