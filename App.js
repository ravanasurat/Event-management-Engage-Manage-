import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './components/pages/LandingPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/ConPage';
import ForgetPasswordPage from './components/pages/ForgetPasswordPage';
import HomePage from './components/pages/HomePage';
import HomePa from './components/pages/Homepa';
import Wedcater from './components/pages/wedcat';
import Catering from './components/pages/cater1';
import lastpage from './components/pages/final';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import Endpage from './components/pages/Endpage';

function App() {
  return (
    <Router>

      <div className="App"> 
        <main>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/forget-password" component={ForgetPasswordPage} />
            <Route path="/home" component={HomePage} />
            <Route path="/homee" component={HomePa} />
            <Route path="/Wedding" component={Wedcater} />
            <Route path="/Cater" component={Catering} />
            <Route path ="/final" component={lastpage}/>
            <Route path ="/about" component={AboutPage}/>
            <Route path="/contact" component={ContactPage}/>
            <Route path="/end" component={Endpage}/>
          </Switch>
        </main>

      </div>
    </Router>
  );
}

export default App;
