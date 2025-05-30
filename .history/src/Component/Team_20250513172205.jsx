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
];

const TeamSection = () => {
  const teamGridRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const teamGrid = teamGridRef.current;
    if (!teamGrid) return;

    let animationFrameId;

    const smoothScroll = () => {
      if (!isHovered) {
        teamGrid.scrollLeft += 0.5; // Adjust speed here (0.5 is slow & smooth)
        if (teamGrid.scrollLeft >= teamGrid.scrollWidth - teamGrid.offsetWidth) {
          teamGrid.scrollLeft = 0; // Reset to start
        }
      }
      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    animationFrameId = requestAnimationFrame(smoothScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

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
          innovators, we work collaboratively to deliver exceptional digital experiences.
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
