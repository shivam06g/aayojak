import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useProfile } from '../context/ProfileContext'

const PublicRoute = () => {
    const {profile,setProfile}= useProfile();
    console.log("Public route",profile)
    if(profile==null)
    return <Outlet />

    return <Navigate to={profile.path}></Navigate>
}

export default PublicRoute