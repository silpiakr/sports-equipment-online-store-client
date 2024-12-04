import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = () => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <span className="loading loading-spinner text-info"></span>
    }

    if(!user){
        <Navigate to='/login' state={{from: location}} replace></Navigate>
        // return children;
        
    }

    return children;
    
    // return (
    //     // <Navigate to='/login'></Navigate>
        
    // );
};

export default PrivateRoute;