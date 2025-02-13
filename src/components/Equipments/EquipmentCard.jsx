import React from 'react';
import { Link } from 'react-router-dom';

const EquipmentCard = ({ equipment, equipments, setEquipments }) => {
    const { _id, name, photo, price } = equipment;

    return (
        <div>
            <div className="card border w-64 md:w-72 mx-auto">
                <figure className='w-[160px] h-[160px] mx-auto p-3'>
                    <img
                        src={photo}
                        className='w-full object-cover p-3 mx-auto'
                        alt={name} />
                </figure>
                <div className="card-body flex-row justify-between">
                    <div>
                        <h2 className="card-title text-sm font-normal capitalize">
                            {name}
                        </h2>
                        <p className='text-lg font-semibold'>Price: {price}</p>
                    </div>
                </div>
                <Link to={`/details/${_id}`} className='pb-5 text-center mr-6 mt-0 pt-0'>
                    <button className='btn'>Details</button>
                </Link>
                {/* <Link to={`/showDetails/${_id}`} className='pb-5 text-center mr-6 mt-0 pt-0'>
                    <button className='btn'>Show Details</button>
                </Link> */}
            </div>
        </div >
    );
};

export default EquipmentCard;