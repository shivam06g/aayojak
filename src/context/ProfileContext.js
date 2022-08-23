import React,{createContext, useContext, useState,useEffect} from 'react'

const ProfileContext=createContext();

export const ProfileProvider = ({ children }) => {
    const [profile,setProfile]=useState(null); 
    const [isopen,setIsOpen]=useState(false);
    useEffect(() => { 
        setProfile(null)
    }, [])
  
  return (
    <ProfileContext.Provider value={{profile,setProfile,isopen,setIsOpen}}>
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfile = () => useContext(ProfileContext);

