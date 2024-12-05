import React from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import Banner from '../Header/Banner';
import Equipments from '../Equipments/Equipments';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Equipments></Equipments>
            <Footer></Footer>
        </div>
    );
};

export default Home;