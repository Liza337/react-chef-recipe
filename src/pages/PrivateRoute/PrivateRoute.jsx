import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user,loading} =useContext(AuthContext);

    const location =useLocation();
    console.log(location);

    if (loading){

        return <span className="loading loading-spinner text-secondary"></span>
    }

    if (user){
        return children;
    }
    return <Navigate state={{from:location}}  to="/login" replace></Navigate>;
};

export default PrivateRoute;