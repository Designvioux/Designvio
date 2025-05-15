import React from "react";
import "./CSS/Process.css";
import project from '../Images/projectprocess.jpg'
import exclamination from '../Icons/exclamination.png'

const ProjectProcess = () => {
  return (
    <div className="project-process-section">
      <div className="section-header">
        {/* <span className="tag">The Process</span> */}
        <div className='faq-top-text' > <img src={exclamination} className='ex-icon4'></img>The Process</div>
        <h1>OUR PROJECT PROCESS</h1>
        <p>
          At<strong> Designvio UX</strong>,we follow a structured yet flexible approach
          to ensure seamless and impactful design solutions
        </p>
      </div>
      <div className="process-container">
        <div className="image">
          <img className="prj" src={project} alt="Project Process" />
        </div>
        <div className="steps">
          <div className="step">
            <h2>1 YOU SHARE, WE ANALYZE</h2>
            <p>
              We begin by understanding your business, target audience, and project
              goals. Through user research, competitor analysis, and strategy development,
              we lay the foundation for a user-centric design.
            </p>
          </div>
          <div className="step">
            <h2>02. WE STRATEGIZE, YOU PROVIDE THE RESOURCES</h2>
            <p>
              After reaching a mutual agreement, we commence with the strategic planning
              stage. Your participation is crucial, though it won’t drain much of your time.
              An upfront payment of 20%, which is non-refundable, is demanded for the
              layout stage, and upon approval, we stick rigorously to an advance payment
              process.
            </p><div className="step">
            <h2>03. We Execute, You Reap the Rewards</h2>
            <p>
            Once the design is finalized, we implement it using cutting-edge tools and no-code platforms (if applicable). 
            We ensure smooth deployment and provide post-launch support for continuous improvement.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectProcess;