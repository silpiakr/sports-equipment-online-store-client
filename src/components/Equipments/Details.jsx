// import React from 'react';
// import { Link, useLoaderData } from 'react-router-dom';

// const Details = ({userId, itemId}) => {
//     const loadedParams = useLoaderData();
//     const { _id, name, photo, category, description, price, rating, customization, time, status } = loadedParams;

//     const handleAddToList = () => {
//         fetch(`http://localhost:5000/equipment/${_id}`, {
//             method: 'POST',
//             body: JSON.stringify({userId, itemId})
//         })
//         .then(res => res.json())
//         .then(data => {
//             console.log("show my list", data);
//         })
//         .catch(error => console.log(error, 'error fatching'));
//     }

//     return (
//         <div className='max-w 7xl mx-auto'>
//             <div className="card card-side bg-base-100 max-w-2xl shadow-xl mx-auto my-8">
//                <div>
//                <figure className='w-48 h-48 mx-auto p-4 mt-4'>
//                     <img
//                         src={photo}
//                         alt="Item" />
//                 </figure>
//                 <div className="card-body flex-col max-w-xl justify-between">
//                     <div className='flex flex-col'>
//                         <h2 className="card-title">Name: {name}</h2>
//                         <p><span className='font-bold'>Category:</span> {category}</p>
//                         <p><span className='font-bold'>Description:</span> {description}</p>
//                         <p><span className='font-bold'>Price:</span> {price}</p>
//                         <p><span className='font-bold'>Rating:</span> {rating}</p>
//                         <p><span className='font-bold'>Customization (bat with extra grip, hit paper etc):</span> {customization}</p>
//                         <p><span className='font-bold'>Processing Time (delivery time):</span> {time}</p>
//                         <p><span className='font-bold'>Stock Status (available product quantity):</span> {status}</p>
//                     </div>
//                     <div className='flex justify-center items-end mt-4 gap-3'>
//                         <button className="btn join-item mb-2 bg-green-500 text-white btn-sm">Buy Now</button>
//                         <button onClick={() => handleAddToList(_id)} className="btn join-item mb-2 bg-black text-white btn-sm">My List</button>
//                     </div>
//                 </div>
//                </div>
//             </div>
//         </div>
//     );
// };

// export default Details;