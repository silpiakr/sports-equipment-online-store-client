import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import Navbar from '../components/Header/Navbar';
import Banner from '../components/Header/Banner';
import Footer from '../components/Footer/Footer';
import AddEquipment from '../components/Equipments/AddEquipment';
import UpdateEquipment from '../components/Equipments/UpdateEquipment';
import Users from '../components/Users/Users';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Equipments from '../components/Equipments/Equipments';
import Details from '../components/Equipments/Details';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
    },
    {
        path: '/navbar',
        element: <Navbar></Navbar>
    },
    {
        path: '/banner',
        element: <Banner></Banner>
    },
    {
        path: '/equipments',
        element: <Equipments></Equipments>,
        loader: () => fetch('http://localhost:5000/equipment')
    },
    {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({params}) => fetch(`http://localhost:5000/equipment${params.id}`)
    },
    {
        path: '/addEquipment',
        element: <AddEquipment></AddEquipment>
    },
    {
        path: '/updateEquipment',
        element: <UpdateEquipment></UpdateEquipment>
    },
    {
        path: '/users',
        element: <Users></Users>
    },
    {
        path: '/footer',
        element: <Footer></Footer>
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;