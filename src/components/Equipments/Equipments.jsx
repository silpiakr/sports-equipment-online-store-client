import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import EquipmentCard from './EquipmentCard';


const Equipments = () => {
    const loadedequipments = useLoaderData() || [];
    const [equipments, setEquipments] = useState(loadedequipments);


    return (
        <>
        <div className='sm-w-[425px] md:max-w-7xl mx-auto '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
                {
                    equipments.map(equipment => <EquipmentCard key={equipment._id} equipment={equipment} setEquipments={setEquipments}></EquipmentCard>)
                }
            </div>
        </div>
        </>
    );
};

export default Equipments;
