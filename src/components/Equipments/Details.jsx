// import React from 'react';
// import { Link, useLoaderData } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const Details = () => {
//     const loadedParams = useLoaderData();
//     const { _id, name, photo, category, description, price, rating, customization, time, status } = loadedParams;


//     return (
//         <div className="card card-side bg-base-100 shadow-xl">
//             <figure>
//                 <img
//                     src={photo}
//                     alt="Item" />
//             </figure>
//             <div className="card-body flex-row justify-between">
//                 <div>
//                     <h2 className="card-title">Name: {name}</h2>
//                     <p><span className='font-bold'>Category:</span> {category}</p>
//                     <p><span className='font-bold'>Description:</span> {description}</p>
//                     <p><span className='font-bold'>Price:</span> {price}</p>
//                     <p><span className='font-bold'>Rating:</span> {rating}</p>
//                     <p><span className='font-bold'>Customization (bat with extra grip, hit paper etc):</span> {customization}</p>
//                     <p><span className='font-bold'>Processing Time (delivery time):</span> {time}</p>
//                     <p><span className='font-bold'>Stock Status (available product quantity):</span> {status}</p>
//                 </div>
//                 <div className='flex justify-end items-end'>
//                     <button className="btn join-item mb-2 bg-green-500 text-white btn-sm">Buy Now</button>
//                     <button className="btn join-item mb-2 bg-black text-white btn-sm">Wish</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Details;