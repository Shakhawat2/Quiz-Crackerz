import AOS from 'aos';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Navbar from '../components/Navbar';
import "aos/dist/aos.css";

const Root = () => {
    AOS.init({
        // initialise with other settings
        duration : 1000
      });
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Root;