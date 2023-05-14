/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../Pages/AuthPages/AuthPorvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loader} = useContext(AuthContext);
    const location = useLocation();

    if(loader){
        return <p>Loading................</p>
    }

    if(user?.email){
        return children;
    }

    return <Navigate to="/login" replace state={{from: location}}></Navigate>
};

export default PrivateRoute;