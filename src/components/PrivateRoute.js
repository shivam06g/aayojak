/* eslint-disable no-unused-vars */
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useProfile } from '../context/ProfileContext'

const PrivateRoute = () => {
    const {profile,setProfile}= useProfile()
    console.log("Profile in Pricate Route")
    console.log(profile)
    if(profile==null)
        return <Navigate to="/"></Navigate>
    // console.log(routeprops)

  return <Outlet />
}

export default PrivateRoute