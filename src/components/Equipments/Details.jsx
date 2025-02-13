import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Details = () => {
    const { user, cart, setCart } = useContext(AuthContext);
    const userId = user?.id;

    const loadedParams = useLoaderData();
    const { _id, name, photo, category, description, price, rating, customization, time, status } = loadedParams;

    const handleAddToMyList = () => {
        fetch('https://sports-equipment-online-store-server.vercel.app/my-list', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId: _id, itemId: _id }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.insertedId || data.acknowledged) {
                    Swal.fire({
                        title: "Success!",
                        text: `${name} Equipment added to My Equipments List.`,
                        icon: "success",
                    });
                   
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: `${name} Equipment added failed.`,
                        icon: "Error",
                    });
                  
                }
            })
            .catch((err) => console.error('Error adding to My List:', err));

    };


    return (
        <>
            <div className="max-w-7xl mx-auto">
                <Navbar />
            </div>
            <div className="max-w-7xl mx-auto p-4">
                <div className="card card-side bg-base-100 max-w-2xl shadow-xl mx-auto my-8">
                    <div className="flex flex-col md:flex-row">
                        <figure className="w-48 h-48 mx-auto p-4 mt-4">
                            <img src={photo} alt={name} />
                        </figure>
                        <div className="card-body flex-col justify-between">
                            <div className="flex flex-col">
                                <h2 className="card-title">Name: {name}</h2>
                                <p><span className="font-bold">Category:</span> {category}</p>
                                <p><span className="font-bold">Description:</span> {description}</p>
                                <p><span className="font-bold">Price:</span> ${price}</p>
                                <p><span className="font-bold">Rating:</span> {rating}</p>
                                <p><span className="font-bold">Customization:</span> {customization}</p>
                                <p><span className="font-bold">Processing Time:</span> {time}</p>
                                <p><span className="font-bold">Stock Status:</span> {status}</p>
                            </div>
                            <div className="flex justify-center items-end mt-4 gap-3">
                                <button onClick={handleAddToMyList} className="btn join-item mb-2 bg-black text-white btn-sm">Add To List</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Details;
