import React from 'react';
import CustomNavbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import Client from './components/Client';
import About from './components/About';
import Community from './components/Community';

const App = () => (
  <div>
    <CustomNavbar />
    <Banner />
    <Client />
    <About />
    <Community />
  </div>
);

export default App;
