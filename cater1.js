import React, { useState } from 'react';
import ProjLogo from '../../assets/images/projlogo.png';
import w1 from '../../assets/images/w1.jpg';
import './cater1.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  const [location, setLocation] = useState('');
  const [foodChecked, setFoodChecked] = useState(false);
  const [cakeChecked, setCakeChecked] = useState(false);
  const [foodType, setFoodType] = useState('');
  const [foodDishes, setFoodDishes] = useState('');
  const [cakeVariety, setCakeVariety] = useState('');
  const [cakeQuantity, setCakeQuantity] = useState('');
  const [decorationType, setDecorationType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', {
      location,
      foodChecked,
      cakeChecked,
      foodType,
      foodDishes,
      cakeVariety,
      cakeQuantity,
      decorationType
    });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="fixed-height">
          <section id="about" className="division">
            <h2>SRI HEMA CATERING SERVICES</h2>
            <img src={w1} alt="flow" width="600" height="300" />
            <br />
            <h2>Owner name: Mr Mahendhra</h2>
            <h2>Contact no: 7358316204</h2>
          </section>
        </div>
        <div className="scrollable">
          <section id="frames" className="division">
            <h2>Book Here !!!</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="location">Location:</label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  id="food"
                  checked={foodChecked}
                  onChange={(e) => setFoodChecked(e.target.checked)}
                  className="form-check-input"
                />
                <label htmlFor="food" className="form-check-label">Food</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  id="cake"
                  checked={cakeChecked}
                  onChange={(e) => setCakeChecked(e.target.checked)}
                  className="form-check-input"
                />
                <label htmlFor="cake" className="form-check-label">Cake</label>
              </div>
              {foodChecked &&
                <>
                  <div className="form-group">
                    <label htmlFor="foodType">Food Type:</label>
                    <input
                      type="text"
                      id="foodType"
                      value={foodType}
                      onChange={(e) => setFoodType(e.target.value)}
                      className="form-control"
                      required={foodChecked}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="foodDishes">Food Dishes:</label>
                    <input
                      type="text"
                      id="foodDishes"
                      value={foodDishes}
                      onChange={(e) => setFoodDishes(e.target.value)}
                      className="form-control"
                      required={foodChecked}
                    />
                  </div>
                </>
              }
              {cakeChecked &&
                <>
                  <div className="form-group">
                    <label htmlFor="cakeVariety">Cake Variety:</label>
                    <input
                      type="text"
                      id="cakeVariety"
                      value={cakeVariety}
                      onChange={(e) => setCakeVariety(e.target.value)}
                      className="form-control"
                      required={cakeChecked}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cakeQuantity">Cake Quantity:</label>
                    <input
                      type="text"
                      id="cakeQuantity"
                      value={cakeQuantity}
                      onChange={(e) => setCakeQuantity(e.target.value)}
                      className="form-control"
                      required={cakeChecked}
                    />
                  </div>
                </>
              }
              <div className="form-group">
                <label>Decoration Type:</label><br />
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="decorationType1"
                    value="Floral"
                    onChange={(e) => setDecorationType(e.target.value)}
                    className="form-check-input"
                  />
                  <label htmlFor="decorationType1" className="form-check-label">Floral</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="decorationType2"
                    value="Balloon"
                    onChange={(e) => setDecorationType(e.target.value)}
                    className="form-check-input"
                  />
                  <label htmlFor="decorationType2" className="form-check-label">Balloon</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="decorationType3"
                    value="Theme"
                    onChange={(e) => setDecorationType(e.target.value)}
                    className="form-check-input"
                  />
                  <label htmlFor="decorationType3" className="form-check-label">Theme</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="decorationType4"
                    value="Lighting"
                    onChange={(e) => setDecorationType(e.target.value)}
                    className="form-check-input"
                  />
                  <label htmlFor="decorationType4" className="form-check-label">Lighting</label>
                </div>
              </div>
              <Link to='./final'>
              <button type="submit" className="btn btn-primary">Submit</button></Link>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={ProjLogo} alt="Logo" />
      </a>
    </nav>
  );
}

export default App;
