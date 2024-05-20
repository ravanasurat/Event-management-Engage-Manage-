import React from 'react';
import ProjLogo from '../../assets/images/projlogo.png'
import weddingImage from '../../assets/images/wed.jpg'
import birthdayImage from '../../assets/images/birthday.jpg'
import babyShowerImage from '../../assets/images/baby shower.png'
import houseWarmingImage from '../../assets/images/housewarming.jpg'
import farewellImage from '../../assets/images/farewell.jpg'
import promotionsImage from '../../assets/images/promotions.png'
import './Homepa1.css'; 
import './Homepa2.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={ProjLogo} height="120px" width="200px" alt="Logo" />
      </a>
      <ul className="navbar-nav">
        <li className="nav-item active">
        <Link to='./homee'>
          <a className="nav-link" href="#">Home </a></Link>
        </li>
        <li className="nav-item">
        <Link to='./about'>
          <a className="nav-link" href="#">About</a></Link>
        </li>
        <li className="nav-item">
        <Link to='./contact'>
          <a className="nav-link" href="#">Contact</a></Link>
        </li>
      </ul>
    </nav>
  );
}

function ProjectSection() {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex gap-2 project-card">
          <WeddingCard />
          <BirthdayCard />
          <BabyShowerCard />
        </div>
      </div>
      <div className="row">
        <div className="d-flex gap-2 project-card">
          <HouseWarmingCard />
          <FarewellPartyCard />
          <PromotionsCard />
        </div>
      </div>
    </div>
  );
}

function Card({ src, title, text ,submitLink}) {
  return (
    <div className="project-card-view card">
      <img variant="top" src={src} height="400px" width="475px" alt="card-img" />
      <div className="card-body">
        <div className="card-title">{title}</div>
        <div className="card-text" style={{ textAlign: 'justify' }}>
          {text}
        <Link to={submitLink}>
          <button className="submit-button">Visit for book !</button>
        </Link>
        </div>
      </div>
    </div>
  );
}

function WeddingCard() {
  return (
    <Card 
      src={weddingImage}  height="400px" width="475px" alt="card-img"
      title="WEDDING EVENTS" 
     // text="Providing: Decoration, Pendel, Food with Compliments & etc..."
     submitLink="/Wedding"
    />
  );
}

function BirthdayCard() {
  return (
    <Card
      src={birthdayImage}  height="400px" width="475px" alt="card-img"
      title="BIRTHDAY EVENTS" 
      //text="Providing: Decoration, cakes, Food with Compliments & etc..."
    />
  );
}

function BabyShowerCard() {
  return (
    <Card  
      src={babyShowerImage} height="400px" width="475px" alt="card-img"
      title="BABY SHOWER EVENTS" 
     // text="Providing: Decoration, Pendel, Food with Compliments & etc..."
    />
  );
}

function HouseWarmingCard() {
  return (
    <Card 
      src={houseWarmingImage} height="400px" width="475px" alt="card-img"
      title="HOUSE WARMING EVENTS" 
     // text="Providing: Decoration, Pendel, Food with Compliments & etc..."
    />
  );
}

function FarewellPartyCard() {
  return (
    <Card 
      src={farewellImage} height="400px" width="475px" alt="card-img"
      title="FAREWELL PARTY EVENTS" 
   //   text="Providing: Decoration, cakes, Food with Compliments & etc..." 
    />
  );
}

function PromotionsCard() {
  return (
    <Card 
      src={promotionsImage} height="400px" width="475px" alt="card-img"
      title="PROMOTIONS EVENTS"
      //text="Providing: Decoration, Pendel, Food with Compliments & etc..."
    />
  );
}

function App() {
  return (
    <>
      <Navbar />
      <div id="Project">
        <ProjectSection />
      </div>
    </>
  );
}
export default App;
