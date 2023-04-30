import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from './Auth'

const ProtectedRoute = () => {
    const currentUser = useContext(AuthContext);
    console.log(currentUser);
    return currentUser.currentUser? <Outlet/> : <Navigate to='/login'/>
}

export default ProtectedRoute