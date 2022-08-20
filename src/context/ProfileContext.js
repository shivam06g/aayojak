import React,{createContext, useContext, useState,useEffect} from 'react'

const ProfileContext=createContext();

export const ProfileProvider = ({ children }) => {
    const [profile,setProfile]=useState(null); 
    useEffect(() => { 
        setProfile(null)
    }, [])
    
  return (
    <ProfileContext.Provider value={{profile,setProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfile = () => useContext(ProfileContext);

