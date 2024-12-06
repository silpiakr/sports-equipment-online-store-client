import React from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import Banner from '../Header/Banner';
import Equipments from '../Equipments/Equipments';
import ThemeToggle from '../Header/ThemeToggle';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <header className='w-full lg:max-w-7xl mx-auto'>
                <Navbar></Navbar>
            </header>
            <div>
                <ThemeToggle></ThemeToggle>
            </div>
            <div>
                <Banner></Banner>
            </div>
            <section>
                <Equipments />
            </section>
            <main>
              
                
            
            </main>

            <Footer></Footer>
        </div>
    );
};

export default Home;