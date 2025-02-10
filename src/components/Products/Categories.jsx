import React, { useEffect, useState } from 'react';
import Category from '../Products/Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://sports-equipment-online-store-server.vercel.app/equipment')
        .then(res => res.json())
        .then(data => {
            setCategories(data);
        })
        
    }, [])

    return (
        <div className=''>
            <h2 className='text-gray-800 text-center py-6 font-bold text-2xl md:text-4xl'>Category:</h2>
            <div className='flex flex-col items-center gap-6 bg-slate-100 px-8 py-3 rounded-2xl'>
            {
                categories.map((categoryItem, idx) => <Category key={idx} categoryItem={categoryItem} setCategories={setCategories}></Category>)
            }
            </div>
        </div>
    );
};

export default Categories;