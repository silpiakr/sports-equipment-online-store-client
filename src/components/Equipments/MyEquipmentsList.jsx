// import React from 'react';

// const MyEquipmentsList = () => {
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
//         <div>
//             <div className="card bg-base-100 w-80 mx-auto shadow-lg">
//                 <figure>
//                     <img
//                         src={photo}
//                         className='w-40 h-40 p-3 mx-auto'
//                         alt={name} />
//                 </figure>
//                 <div className="card-body flex-row justify-between">
//                     <div>
//                         <h2 className="card-title text-sm font-normal capitalize">
//                             {name}
//                         </h2>
//                         <p className='text-lg font-semibold'>Price: {price}</p>
//                     </div>
//                     <div className="card-actions">
//                         <div className="join join-vertical lg:join-horizontal items-center">
//                             <Link to={`/updateEquipment/${_id}`}>
//                                 <button className="btn join-item mb-2 bg-black text-white btn-sm"><MdEdit className='text-xl' /></button>
//                             </Link>
//                             <button onClick={() => handleDelete(_id)} className="btn join-item bg-red-500 text-white btn-sm"><MdDelete className='text-xl' /></button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MyEquipmentsList;