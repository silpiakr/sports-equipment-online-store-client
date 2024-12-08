import React, { useState, useEffect, useContext } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import { AuthContext } from '../../Provider/AuthProvider';

const MyEquipmentsList = () => {
    const { user } = useContext(AuthContext);
    const userId = user?._id;
    const [myList, setMyList] = useState([]);

    useEffect(() => {
        fetch(`https://sports-equipment-online-store-server.vercel.app/my-list/${userId}`)
            .then((res) => res.json())
            .then((data) => {
                const sortedList = data.sort((a, b) => b.itemDetails.price - a.itemDetails.price);
                setMyList(sortedList);
            })
            .catch((err) => console.error('Error fetching My List:', err));
    }, [userId]);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://sports-equipment-online-store-server.vercel.app/${_id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "The item has been removed from your list.", "success");
                            const remainingItems = myList.filter((item) => item._id !== id);
                            setMyList(remainingItems);
                        }
                    })
                    .catch((error) => console.error("Error deleting item:", error));
            }
        });
    };

    return (
        <>
            <div className='max-w-7xl mx-auto'>
                <Navbar />
            </div>
            <div className='max-w-7xl min-h-screen mx-auto py-6'>
                <ul>
                    {myList.map((item) => (
                        <li key={item._id} className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-4">
                                <img src={item.itemDetails.photo} alt={item.itemDetails.name} className="w-20 h-20" />
                                <div>
                                    <h3 className="text-lg font-semibold">{item.itemDetails.name}</h3>
                                    <p>Price: ${item.itemDetails.price}</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Link to={`/updateEquipment/${item.itemDetails._id}`}>
                                    <button className="btn bg-black text-white"><MdEdit className='text-xl' /></button>
                                </Link>
                                <button onClick={() => handleDelete(item._id)} className="btn bg-red-500 text-white">
                                    <MdDelete className='text-xl' />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </>
    );
};

export default MyEquipmentsList;
