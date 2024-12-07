import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const EquipmentList = () => {
    const loadedData = useLoaderData() || [];
    const [equipments, setEquipments] = useState(loadedData);

    return (
        <div className='max-w-7xl mx-auto my-8'>
            <h2 className='text-3xl text-center font-bold py-8'>Equipments: {equipments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-lg font-bold text-gray-800'>
                            <th>Sl. No.</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            equipments.map((equipment, index) => <tr key={equipment._id}>
                                <th>{index + 1}</th>
                                <th>{equipment.name}</th>
                                <td>{equipment.category}</td>
                                <td>{equipment.price}</td>
                                <td className=' flex gap-2'>
                                <Link to={`/details/${equipment._id}`}>
                                    <button className='btn bg-red-100'>
                                    Details
                                    </button>
                                </Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EquipmentList;