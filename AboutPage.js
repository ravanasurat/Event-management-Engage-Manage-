
import React from 'react';
import './AboutPage.css';
import BackgroundImage from '../../assets/images/bg2.jpg'
function AboutPage() {
  return (
    <header style={ HeaderStyle }>
    <div className="about-container">
      <h1>About Event Management</h1>
      <h3>
        Event management involves the planning, organization, and execution of various types of events
        to create memorable experiences for clients and attendees. From birthdays to weddings, and from
        housewarming parties to corporate gatherings, event managers play a crucial role in ensuring
        that everything runs smoothly and according to plan.
        </h3>
    </div>
    </header>
  ) 
}
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

export default AboutPage;
