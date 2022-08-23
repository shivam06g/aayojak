import React from 'react'
import { useProfile } from '../context/ProfileContext';
import '../css/Banner.css'
import Login from "../Pages/Login";

export default function Banner() {
  const {profile,setProfile}= useProfile();
  // var temp=profile
  // // temp.path="/"
  // console.log(temp)
  // setProfile(temp)
  return (
    
    <div>
      <div className="banner">
        <div className="row">
          <div className="col-lg-5 loginpage con">
            <p className="promo-title">Aayojak</p>
          </div>
          <div className="col-lg-7 abccc">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}
