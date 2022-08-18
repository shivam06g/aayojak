import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    if(localStorage.getItem('jwt')==null)
        return <Navigate to="/"></Navigate>
    // console.log(routeprops)

  return <Outlet />
}

export default PrivateRoute