import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { AuthContext } from '../../Provider/AuthProvider';
import { FaRegCircleUser } from 'react-icons/fa6';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
             //   console.log('Sign out successfully');
            })
            .catch(error => {
              //  console.log('ERROR', error.message);
            })
    }

    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/equipmentList'>All Sports Equipment</Link></li>
        <li><Link to='/addEquipment'>Add Equipment</Link></li>
        <li><Link to='/myEquipmentList'>My Equipment List</Link></li>
    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <IoMdMenu className='text-3xl' />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img src="https://i.ibb.co.com/rwHGzSg/logo.png" className='w-16 ' alt="logo" />
                <a className="btn btn-ghost text-2xl font-bold">Sports BD</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {links}
                </ul>
            </div>
             <div className="navbar-end">
                {user ? (
                    <div className='flex items-center gap-3'>
                        <div className='group'>
                            <>
                                {user.photoURL ? (
                                    <img src={user.photoURL} alt="user" className='w-8 h-8 rounded-full cursor-pointer' />
                                ) : (
                                    <FaRegCircleUser className='text-3xl text-gray-700 cursor-pointer' />
                                )}
                            </>
                            <div className='absolute left-0 mt-2 w-40 bg-white text-gray-600 text-sm rounded-lg p-2 hidden group-hover:block'>
                                {user.displayName || 'User'}
                            </div>
                        </div>
                        <button onClick={handleSignOut} className='btn btn-sm'>Sign Out</button>
                    </div>
                ) : (
                    <div className='flex gap-2'>
                         
                        <Link to='/login' className='btn bg-base-200'>
                        Login</Link>
                        <Link to='/register' className='btn bg-base-200'>
                        Register</Link>
    
                    </div>
                    
                )
                }
            </div>
        </div>
    );
};

export default Navbar;