import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import Navbar from '../components/Header/Navbar';
import Banner from '../components/Header/Banner';
import Footer from '../components/Footer/Footer';
import AddEquipment from '../components/Equipments/AddEquipment';
import Users from '../components/Auth/Users';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Equipments from '../components/Equipments/Equipments';
import Details from '../components/Equipments/Details';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import EquipmentList from '../components/Equipments/EquipmentList';
import Categories from '../components/Products/Categories';
import PrivateRoute from '../Route/PrivateRoute';
import UpdateEquipment from '../components/Equipments/UpdateEquipment';
import MyLists from '../components/Equipments/MyLists';
import MyEquipmentsList from '../components/Equipments/MyEquipmentsList';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://sports-equipment-online-store-server.vercel.app/equipment') 
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
        path: 'categories/:category',
        element: <Categories></Categories>,
        
    },
    {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) => fetch(`https://sports-equipment-online-store-server.vercel.app/equipment/${params.id}`)
    },
    {
        path: '/equipments',
        element: <Equipments></Equipments>,
        loader: () => fetch('https://sports-equipment-online-store-server.vercel.app/equipment')
    },
    {
        path: '/addEquipment',
        element: <PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>,
        loader: () => fetch('https://sports-equipment-online-store-server.vercel.app/users')
    },
    {
        path: '/updateEquipment/:id',
        element: <UpdateEquipment></UpdateEquipment>,
        loader: ({ params }) => fetch(`https://sports-equipment-online-store-server.vercel.app/equipment/${params.id}`)   
    },
    
    {
        path: '/equipmentList',
        element: <PrivateRoute><EquipmentList></EquipmentList></PrivateRoute>,
        loader: () => fetch('https://sports-equipment-online-store-server.vercel.app/equipment')
    },
    {
        path: '/myEquipmentList',
        element: <PrivateRoute><MyEquipmentsList></MyEquipmentsList></PrivateRoute>,
        loader: () => fetch('https://sports-equipment-online-store-server.vercel.app/equipment')
    },
    // {
    //     path: '/myList/:id',
    //     element: <MyLists></MyLists>,
    //     loader: ({ params }) => fetch(`https://sports-equipment-online-store-server.vercel.app/equipment/${params.id}`)
    // },
    
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;