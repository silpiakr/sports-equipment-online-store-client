import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import Navbar from '../components/Header/Navbar';
import Banner from '../components/Header/Banner';
import Footer from '../components/Footer/Footer';
import AddEquipment from '../components/Equipments/AddEquipment';
import UpdateEquipment from '../components/Equipments/UpdateEquipment';
import Users from '../components/Auth/Users';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Equipments from '../components/Equipments/Equipments';
import Details from '../components/Equipments/Details';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import MyEquipmentsList from '../components/Equipments/MyEquipmentsList';
import EquipmentList from '../components/Equipments/EquipmentList';

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
        path: '/footer',
        element: <Footer></Footer>
    }, 
    {
        path: '/updateEquipment/:id',
        element: <UpdateEquipment></UpdateEquipment>,
        loader: async({params}) => {
            const [equipment, users] = await Promise.all([
                fetch(`http://localhost:5000/equipment/${params.id}`).then(res => res.json()),
                fetch('http://localhost:5000/users').then(res => res.json())
            ]);
            return {equipment, users};
            
        }
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/users',
        element: <Users></Users>
    },
    {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`http://localhost:5000/equipment/${params.id}`)
    },
    {
        path: '/equipments',
        element: <Equipments></Equipments>,
        loader: () => fetch('http://localhost:5000/equipment')
    },
    {
        path: '/addEquipment',
        element: <AddEquipment></AddEquipment>,
        loader: () => fetch('http://localhost:5000/users')
    },
    {
        path: '/equipmentList',
        element: <EquipmentList></EquipmentList>,
        loader: () => fetch('http://localhost:5000/equipment')
    },
    {
        path: '/myEquipmentList',
        element: <MyEquipmentsList></MyEquipmentsList>,
        loader: () => fetch('http://localhost:5000/equipment')
    },
    
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;