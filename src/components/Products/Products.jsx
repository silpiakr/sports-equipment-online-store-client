import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';


const Products = () => {
    const products = useLoaderData();
    const [equipments, setEquipments] = useState([]);
 
    return (
        <div className='sm-w-[425px] md:max-w-7xl mx-auto '>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6'>
               {
                equipments.map((equipment) => (<ProductCard key={product._id} product={equipment} equipments={equipments}></ProductCard>))
               }
            </div>
        </div>
    );
};

export default Products;