import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
const HomeLayout = () => {
    return (
        <div>
            <header className="sticky z-10">
              <Navbar />
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer className='z-10'>
              <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;