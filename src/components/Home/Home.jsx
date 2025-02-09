import React from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import Banner from '../Header/Banner';
import ThemeToggle from '../Header/ThemeToggle';
import Categories from '../Products/Categories';
import Equipments from '../Equipments/Equipments';
import Brand from '../OurBrand/Brand';
import NewsLetter from '../NewsLetter/NewsLetter';

const Home = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            {/* header section */}
            <header className='w-full lg:max-w-7xl mx-auto'>
                <Navbar></Navbar>
            </header>
            {/* toggle section */}
            <section className='py-4'>
                <ThemeToggle></ThemeToggle>
            </section>
            {/* banner section */}
            <section className='py-6'>
                <Banner></Banner>
            </section>
            {/* main section */}
            <main className='max-w-7xl mx-auto my-8'>
                <section className='gap-4'>
                    <Categories></Categories>
                </section>
                <section>
                    <Equipments></Equipments>
                </section>
                <section>
                    <Brand></Brand>
                </section>
                <section>
                    <NewsLetter></NewsLetter>
                </section>
            </main>

            <Footer></Footer>
        </div>
    );
};

export default Home;