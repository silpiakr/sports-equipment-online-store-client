import React from 'react';
import { Link } from 'react-router-dom';

const EquipmentCard = ({ equipment, equipments, setEquipments }) => {
    const { _id, name, photo, price } = equipment;



    return (
        <div>
            <Link to={`/details/${_id}`}>
                <div className="card w-48 md:w-60 mx-auto shadow-lg">
                    <figure className='w-100 h-200'>
                        <img
                            src={photo}
                            className=' object-cover p-2 mx-auto'
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
                </div>
            </Link>
        </div >
    );
};

export default EquipmentCard;