/* eslint-disable no-unused-vars */
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useProfile } from '../context/ProfileContext'

const PrivateRoute = () => {
    const {profile,setProfile}= useProfile()
    if(profile==null)
        return <Navigate to="/"></Navigate>

  return <Outlet />
}

export default PrivateRoute