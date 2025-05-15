import React from 'react';
import './CSS/FooterNav.css'


const FooterNav = ({onContactClick} )=>{

return(
<div className='Footer-Navbar'>
 <nav className='nav-br'>
  <img src="../Images/DLogo.png" alt="Designvio"></img>
  <ul>
    <li><a href='#about'>About</a></li>
    <li><a href='#services'>Services</a></li>
    <li><a href='#work'>Work</a></li>
    <li>  <a href="#contact" onClick={onContactClick} >CONTACT</a></li>
    {/* <li> <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJlGTZBVrNpkppzldpsgtSrwGxmwHRhpKdDPvrKpmDVMRMvtkhxzxFRLmfWFwlqDzJScnwg" target="_blank" rel="noopener noreferrer">Contact</a></li> */}
  </ul>





 </nav>






</div>



)


}

export default FooterNav;