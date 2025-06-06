import React from "react";
import "./CSS/Team.css";
import img1 from "../Images/Aniketsir.jpg";
import img2 from "../Images/Nilammam.png";
import img3 from "../Images/Ritesh.png";
import img4 from "../Images/shubham.png";
import exclamination from '../Icons/exclamination.png';

const teamMembers = [
    {
      name: "ANIKET PAWAR",
      role: "Creative Director",
      img: img1,
    },
    {
      name: "NILAM KIRDAT",
      role: "Sr. Full-Stack Developer",
      img: img2,
    },
    {
      name: "RITESH NIKAM",
      role: "UI/UX Designer",
      img: img3,
    },
    {
      name: "SHUBHAM BALLAL",
      role: "Marketing Specialist",
      img:img4,
    },
  ];

  const TeamSection = () => {

    
    return (
      <section className="team-section">
        <div className="team-header">
          {/* <button className="team-tag"> <img src={exclamination} className="ex-icon3"></img></button> */}
          <div className='team-tag' > <img src={exclamination} className='ex-icon'></img>The Team</div>
          <h2 className="team-title">KEY TEAM MEMBERS</h2>
          <p className="team-description">
            At <strong>Designvio UX</strong>, our team is the backbone of our success. Comprising talented designers, strategists, and innovators,
            we work collaboratively to deliver exceptional digital experiences. Each member brings unique expertise, creativity, and
            dedication to every project, ensuring outstanding results.
          </p>
        </div>
  
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.img} alt={member.name} />
              <div className="team-info">
                <h3 className="insta">{member.name}</h3>
                 
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TeamSection;