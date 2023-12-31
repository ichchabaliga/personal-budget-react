import React from 'react';
// import './App.css';
import './App.scss'
import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/Homepage';
import LoginPage from './LoginPage/LoginPage';
import AboutPage from './AboutPage/aboutPage';

import Footer from './Footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      
    <div className="App">
    <Menu/>
      <Hero/>
    <Routes>
            <Route path='/about' element={<AboutPage/>}>
            </Route>
            <Route path='/login' element={<LoginPage/>}>
            </Route>
            <Route path='/' element={<HomePage/>}>
            </Route>
        </Routes>


      
      {/* <HomePage/> */}
      <Footer/>
    </div>
    </Router>
  );
}

export default App;