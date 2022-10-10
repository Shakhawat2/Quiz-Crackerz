import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Navbar from '../components/Navbar';

const Root = () => {
    return (
        <div className='relative'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Root;