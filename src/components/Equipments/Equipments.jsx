import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import EquipmentCard from './EquipmentCard';
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';

const Equipments = () => {
    const loadedequipments = useLoaderData() || [];
    const [equipments, setEquipments] = useState(loadedequipments);


    return (
        <>
        <div className='max-w-7xl mx-auto'>
        <Navbar></Navbar>
        </div>
        <div className='sm-w-[425px] md:max-w-7xl mx-auto '>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6'>
                {
                    equipments.map(equipment => <EquipmentCard key={equipment._id} equipment={equipment} setEquipments={setEquipments}></EquipmentCard>)
                }
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Equipments;

// xl:max-w-screen-xl 2xl:max-w-screen-2xl
// xl:grid-cols-5 2xl:grid-cols-6