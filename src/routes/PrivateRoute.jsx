import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProviders.jsx';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner.jsx';

const PrivateRoute = ({children}) => {
    const {user,  loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(loading);

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }
    if (user && user.uid){
        return children
    }
    return <Navigate to='/login' state={{from: location}} /> ;
};

export default PrivateRoute;