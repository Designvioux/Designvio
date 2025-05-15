// import React, { useState } from "react";
// import './CSS/PopUp.css';

// const ContactPopUp = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     number: "",
//     subject: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch("http://localhost/Designvio/backend/contact.php", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData)
//     });
    
//     const result = await response.json();
//     alert(result.message);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="Contact-Cont">
//       <h2 className="contact-heading">Contact Us</h2>
      
//       <label>Enter Your Name</label>
//       <input name="name" value={formData.name} onChange={handleChange} required />

//       <label>Enter Your Email</label>
//       <input name="email" type="email" value={formData.email} onChange={handleChange} required />

//       <label>Enter Your Mobile Number</label>
//       <input name="number" type="tel" value={formData.number} onChange={handleChange} required />

//       <label>Enter Subject</label>
//       <input name="subject" value={formData.subject} onChange={handleChange} required />

//       <label>Enter Your Message</label>
//       <textarea name="message" value={formData.message} onChange={handleChange} required />

//       <button type="submit">Send</button>
//     </form>
//   );
// };

// export default ContactPopUp;


import React, { useState } from "react";
import './CSS/PopUp.css';

const ContactPopUp = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost/Designvio/backend/contact.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    alert(result.message);
    onClose(); // close popup on success
  };

  return (
    <div className="popup-overlay " onClick={onClose}>
      <div className="popup-box" onClick={(e)=> e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <form onSubmit={handleSubmit} className="Contact-Cont">
          <h2 className="contact-heading">Contact Us</h2>

          <label>Enter Your Name</label>
          <input name="name" value={formData.name} onChange={handleChange} required />

          <label>Enter Your Email</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} required />

          <label>Enter Your Mobile Number</label>
          <input name="number" type="tel" value={formData.number} onChange={handleChange} required />

          <label>Enter Subject</label>
          <input name="subject" value={formData.subject} onChange={handleChange} required />

          <label>Enter Your Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPopUp;
