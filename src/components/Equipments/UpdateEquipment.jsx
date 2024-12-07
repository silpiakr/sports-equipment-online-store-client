import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateEquipment = () => {
    const {equipment, users} = useLoaderData();
    // const { userName, email } = loadedUsers;
    // const [users, setUsers] = useState(loadedUsers);

    // const equipment = useLoaderData();
    // const { photo, name, category, description, price, rating, customization, time, status } = equipment;

    const handleUpdate = e => {
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

        const updatedItem = { photo, name, category, description, price, rating, customization, time, status };

        console.log(updatedItem);

        //send data to the server
        fetch(`https://sports-equipment-online-store-server.vercel.app/equipment/${equipment._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "Coffee!",
                        text: "Coffee Updated Successfully!"
                    });
                    e.target.reset();
                }
            })

    }
    return (
        <>
            {/* <div className='max-w-7xl mx-auto'>
        <Navbar></Navbar>
        </div> */}
            <div className='max-w-7xl mx-auto mt-8 md:px-28 md:py-16 p-6 space-y-8'>
                <h2 className='text-5xl text-black text-center rancho font-bold'>Update Equipment</h2>
                <p className='text-center lg:px-20 text-[#1B1A1A]/70'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handleUpdate} className='space-y-6'>
                    {/* User data */}

                    {/* {
                        users.map(
                            user =>
                                <div key={user._id} className='flex flex-col'>
                                    <div className="form-control flex-row">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold">Name: {user.displayName}</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name='photo' className="input input-bordered border-none w-full" />
                                        </label>
                                    </div>
                                    <div className="form-control flex-row">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold">Email: {user.email}</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name='name' className="input input-bordered border-none w-full" />
                                        </label>
                                    </div>
                                </div>
                        )
                    } */}

                    {/* form row */}
                    <div className='flex flex-col md:flex-row justify-between gap-6'>
                        {/* Image */}
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='photo' defaultValue={equipment.photo} placeholder="Image" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Item Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='name' defaultValue={equipment.name} placeholder="Item Name" className="input input-bordered w-full" />
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
                                <input type="text" name='category' defaultValue={equipment.category} placeholder="Category Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* Description */}
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='description' defaultValue={equipment.description} placeholder="Description" className="input input-bordered w-full" />
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
                                <input type="text" name='price' defaultValue={equipment.price} placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* Rating */}
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='rating' defaultValue={equipment.rating} placeholder="Rating" className="input input-bordered w-full" />
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
                                <input type="text" name='customization' defaultValue={equipment.customization} placeholder="Customization" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* taste */}
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Processing Time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='time' defaultValue={equipment.time} placeholder="Processing Time" className="input input-bordered w-full" />
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
                                <input type="text" name='status' defaultValue={equipment.status} placeholder="Stock Status" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* details */}

                    </div>
                    {/* form button */}
                    <h3>User Information:</h3>
                    {
                        users.map((user) => (
                            <div key={user._id}>
                                <p>Name: {user.displayName}</p>
                                <p>Email: {user.email}</p>
                            </div>
                        ))
                    }
                    <div>
                        <input type="submit" name='btn' value="Update" className="py-2 rounded-lg rancho bg-[#D2B48C] text-black border text-2xl font-boldchu border-black w-full" />
                    </div>
                </form>
            </div>
            {/* <Footer></Footer> */}
        </>
    );
};

export default UpdateEquipment;