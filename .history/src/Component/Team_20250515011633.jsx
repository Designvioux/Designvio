import React, { useEffect, useRef, useState } from "react";
import "./CSS/Team.css";
import img1 from "../Images/Aniketsir.jpg";
import img2 from "../Images/Nilammam.png";
import img3 from "../Images/Ritesh.png";
import img4 from "../Images/shubham.png";
import exclamination from "../Icons/exclamination.png";

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
    img: img4,
  },

  {
    name: "Sahil Dubhal",
    role: "DotNet Angular Devloper",
    img: img4,
  },

  {
    name: "Netra Shelar",
    role: "UI/UX Designer",
    img: img4,
  },

  {
    name: "Riya Mulla",
    role: "Mern Stack Devloper",
    img: img4,
  },

  UI/UX Designer
];

const TeamSection = () => {
  const teamGridRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const teamGrid = teamGridRef.current;
    if (!teamGrid) return;

    const scrollStep = teamGrid.offsetWidth;

    const autoScroll = () => {
      if (isHovered) return; // Stop scrolling on hover

      if (teamGrid.scrollLeft + teamGrid.offsetWidth >= teamGrid.scrollWidth) {
        teamGrid.scrollLeft = 0;
      } else {
        teamGrid.scrollLeft += scrollStep;
      }
    };

    const interval = setInterval(autoScroll, 1000); // Scroll every 1s

    return () => clearInterval(interval); // Cleanup on unmount
  }, [isHovered]); // Depend on isHovered state

  return (
    <section
      className="team-section"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="team-header">
        <div className="team-tag">
          <img src={exclamination} className="ex-icon" alt="!" />
          The Team
        </div>
        <h2 className="team-title">KEY TEAM MEMBERS</h2>
        <p className="team-description">
          At <strong>Designvio UX</strong>, our team is the backbone of our success. Comprising talented designers, strategists, and
          innovators, we work collaboratively to deliver exceptional digital experiences. Each member brings unique expertise,
          creativity, and dedication to every project, ensuring outstanding results.
        </p>
      </div>

      <div className="team-grid" ref={teamGridRef}>
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

export default TeamSection;
