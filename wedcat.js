import React from 'react';
import  ProjLogo from '../../assets/images/projlogo.png'
import  cat1 from '../../assets/images/c1.jpg'
import  cat2 from '../../assets/images/c2.jpg'
import  cat3 from '../../assets/images/c3.jpg'
import  cat4 from '../../assets/images/c4.jpg'
import  cat5 from '../../assets/images/c7.jpg'
import  cat6 from '../../assets/images/c6.jpg'
import './wedcat.css'; 
import './wedcat2.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={ProjLogo} height="120px" width="200px" alt="Logo" />
      </a>
      <h1>CATERING SERVICES</h1>
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

function Card({ src, title , submitLink }) {
  return (
    <div className="project-card-view card">
      <img variant="top" src={src} height="300px" width="475px" alt="card-img" />
      <div className="card-title">{title}</div>
       <Link to = {submitLink} >
        <button className="submit-button">Book !</button>
        </Link>
    </div>
  );
}

function WeddingCard() {
  return (
   
  <Card src={cat1} height="200px" width="300px" title="SRI HEMA CATERING SERVICES" 
  submitLink="/Cater"
  /> 
  );
}

function BirthdayCard() {
  return (
  <Card src={cat2} height="200px" width="300px" title="V.M CATERING SERVICES" />
  );
}

function BabyShowerCard() {
  return (
  <Card src={cat3} height="200px" width="300px" title="M M CATERING SERVICES" />
  );
}

function HouseWarmingCard() {
  return( 
  <Card src={cat4} height="200px" width="300px" title="AMR CATERING SERVICES" />
  );
}

function FarewellPartyCard() {
  return( <Card src={cat5} title="ANNAI CATERING SERVICES" />
  );
}

function PromotionsCard() {
  return (
  <Card src={cat6} height="200px" width="300px" title="SUBIKSHA CATERING SERVICES" />
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