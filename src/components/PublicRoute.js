import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = () => {
    if(localStorage.getItem('jwt')==null)
    return <Outlet />
    
    return <Navigate to="/users"></Navigate>
}

export default PublicRoute