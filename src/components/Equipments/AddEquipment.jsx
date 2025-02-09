import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const AddEquipment = () => {
    const loadedUsers = useLoaderData();
    const { user } = useContext(AuthContext)

    const handleAddItem = e => {
        e.preventDefault();

        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const category = form.category.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const time = form.time.value;
        const status = form.status.value;

        const newItem = { photo, name, category, description, price, rating, customization, time, status };

        console.log(newItem);

        //send data to the server
        fetch('https://sports-equipment-online-store-server.vercel.app/addEquipment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "Item Added Successfully!"
                    });
                    e.target.reset();
                }
            })

    }
    return (
        <>
            <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            </div>
            <div className='max-w-7xl mx-auto mt-8 md:px-28 md:py-16 p-6 space-y-8'>
                <h2 className='text-5xl text-black text-center rancho font-bold'>Add Equipment</h2>
                <p className='text-center lg:px-20 text-[#1B1A1A]/70'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handleAddItem} className='space-y-6'>
                    {/* form row */}
                    {/* User data */}
                    {
                        user ? (<div key={user._id} className='flex flex-row justify-between gap-6'>
                        <div className="form-control flex-row md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Name: {user.displayName}</span>
                            </label>
                        </div>
                        <div className="form-control flex-row md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Email: {user.email}</span>
                            </label>
                        </div>
                    </div>)
                    : ''
                    }

                    {/* form row */}
                    <div className='flex flex-col md:flex-row justify-between gap-6'>
                        {/* Image */}
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='photo' placeholder="Image" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Item Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='name' placeholder="Item Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className='flex flex-col md:flex-row justify-between gap-6'>
                        {/* Category Name */}
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Category Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='category' placeholder="Category Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* Description */}
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='description' placeholder="Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className='flex flex-col md:flex-row justify-between gap-6'>
                        {/* Price */}
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='price' placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* Rating */}
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='rating' placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className='flex flex-col md:flex-row justify-between gap-6'>
                        {/* Customization */}
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Customization</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='customization' placeholder="Customization" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* taste */}
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Processing Time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='time' placeholder="Processing Time" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className='flex flex-col md:flex-row justify-between gap-6'>
                        {/* Stock Status */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Stock Status</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='status' placeholder="Stock Status" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* details */}

                    </div>
                    {/* form button */}
                    <div>
                        <input type="submit" name='btn' value="Add Item" className="py-2 rounded-lg rancho bg-[#D2B48C] text-black border text-2xl font-bold border-black w-full" />
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AddEquipment;