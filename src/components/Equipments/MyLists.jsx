import React, { useState, useEffect, useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import { AuthContext } from '../../Provider/AuthProvider';

const MyLists = () => {
  const loadedData = useLoaderData();
  const { user } = useContext(AuthContext);
  const [myList, setMyList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Add initial data to the cart on load
  useEffect(() => {
    if (user?._id) {
      fetch(`https://sports-equipment-online-store-server.vercel.app/my-list/${user._id}`)
        .then((response) => {
          if (!response.ok) throw new Error('Failed to fetch My List');
          return response.json();
        })
        .then((data) => {
          setMyList(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching My List:', error);
          setLoading(false);
        });
    } else {
      console.warn('No user ID found!');
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (myList.length === 0) {
    return <p>No items in your list.</p>;
  }
  useEffect(() => {
    if (loadedData) {
      setCart(loadedData);

    }
  }, [loadedData]);

  // Remove item from cart
  const handleDelete = (id) => {
    fetch(`https://sports-equipment-online-store-server.vercel.app/my-list/${_id}`, {
        method: 'DELETE',
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.deletedCount > 0) {
                setMyList(myList.filter((item) => item._id !== id));
                alert('Item removed successfully');
            } else {
                alert('Failed to remove item');
            }
        })
        .catch((error) => console.error('Error removing item:', error));
};


  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto p-4">
            <h1 className="text-xl font-bold mb-4">My Equipment List</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {myList.map((item) => (
                    <div key={item.itemDetails._id} className="card bg-base-100 shadow-md">
                        <figure>
                            <img src={item.itemDetails.photo} alt={item.itemDetails.name} className="w-full h-48 object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.itemDetails.name}</h2>
                            <p>Price: ${item.itemDetails.price}</p>
                            <p>Category: {item.itemDetails.category}</p>
                            <button onClick={() => handleDelete(item._id)} className="btn btn-sm btn-red-500 mt-2">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      <Footer />
    </>
  );
};

export default MyLists;
