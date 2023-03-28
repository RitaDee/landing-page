import React from 'react';
import CustomNavbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import Client from './components/Client';
import About from './components/About';

const App = () => (
  <div>
    <CustomNavbar />
    <Banner />
    <Client />
    <About />
  </div>
);

export default App;
