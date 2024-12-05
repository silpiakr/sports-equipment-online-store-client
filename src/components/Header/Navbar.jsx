import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/equipments'>All Sports Equipment</Link></li>
        <li><Link to='/addEquipment'>Add Equipment</Link></li>
        <li><Link to='/updateEquipment'>Update Equipment</Link></li>
        <li><Link to='/myEquipmentList'>My Equipment List </Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <IoMdMenu className='text-3xl' />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
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
                <Link className="btn">Login</Link>
                <Link className="btn ml-2">Register</Link>
            </div>
        </div>
    );
};

export default Navbar;