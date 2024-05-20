
import React from 'react';
import BackgroundImage from '../../assets/images/response.jpg'
function Endpage() {
  return (
    <header style={ HeaderStyle }>
    <div className="about-container">
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

export default Endpage;
