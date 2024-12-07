// import React from 'react';
// import { MdDelete, MdEdit } from 'react-icons/md';
// import { Link, useLoaderData } from 'react-router-dom';

// const MyEquipmentsList = () => {
//     const params = useLoaderData()
//     const { _id, name, photo, category, price } = params;

//     const handleDelete = (_id) => {
//         console.log(_id);
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//         }).then((result) => {
//             if (result.isConfirmed) {

//                 fetch(`http://localhost:5000/equipment/${_id}`, {
//                     method: 'DELETE'
//                 })
//                     .then(res => res.json())
//                     .then(data => {
//                         console.log(data);
//                         if (data.deletedCount > 0) {
//                             Swal.fire({
//                                 title: "Deleted!",
//                                 text: "Your Coffee has been deleted.",
//                                 icon: "success"
//                             });
//                             const remainig = equipments.filter(item => item._id !== _id);
//                             setEquipments(remainig);
//                         }
//                     })
//             }
//         });
//     }
//     return (
//         <div className='max-w-7xl mx-auto py-6'>
//             <div className="card bg-base-100 w-[768px] mx-auto shadow-lg">
//                 <div className='flex items-center justify-between'>
//                     <figure>
//                         <img
//                             src={photo}
//                             className='w-40 h-40 p-3 mx-auto'
//                             alt={name} />
//                     </figure>
//                     <div className="card-body flex-row justify-between">
//                         <div className='flex flex-col'>
//                             <div>
//                                 <h2 className="card-title text-lg font-semibold capitalize">
//                                     Name: {name}
//                                 </h2>
//                                 <p className='text-sm font-medium'>Category: {category}</p>
//                                 <p className='text-sm font-medium'>Price: {price}</p>
//                             </div>
//                         </div>
//                         <div className="card-actions">
//                             <div className="join join-vertical items-center">
//                                 <Link to={`/updateEquipment/${_id}`}>
//                                     <button className="btn join-item bg-black text-white"><MdEdit className='text-xl' /></button>
//                                 </Link>
//                                 <button onClick={() => handleDelete(_id)} className="btn join-item bg-red-500 text-white "><MdDelete className='text-xl' /></button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MyEquipmentsList;