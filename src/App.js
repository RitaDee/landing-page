import React from 'react';
import CustomNavbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Client from './components/Client';
import About from './components/About';
import Community from './components/Community';
import './App.css';
import Courses from './components/Courses';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
const App = () => (
  <>
    <CustomNavbar />
    <Client />
    <About />
    <Courses />
    <Testimonial />
    <Community />
    <FAQ />
    <Footer />
  </>
);
export default App;