import React from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import Banner from '../Header/Banner';
import Equipments from '../Equipments/Equipments';
import ThemeToggle from '../Header/ThemeToggle';

const Home = () => {
    return (
        <div>
            <header className='w-full lg:max-w-7xl mx-auto'>
                <Navbar></Navbar>
            </header>
            <div>
                <ThemeToggle></ThemeToggle>
            </div>
            <div className='w-full lg:max-w-7xl mx-auto'>
            <Banner></Banner>
            </div>
            <main className='my-12 w-full lg:max-w-7xl mx-auto'>

                <Equipments />

            </main>
        </div>
    );
};

export default Home;