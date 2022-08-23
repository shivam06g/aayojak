<<<<<<< HEAD
import React from 'react'
import { useProfile } from '../context/ProfileContext';
import '../css/Banner.css'
import home2 from '../image/home2.png'
import wav1 from '../image/wave1.png'
=======
import React from "react";
import "../css/Banner.css";
import Login from "../Pages/Login";

>>>>>>> 92d4817a155048dc147d9e1425534e2d249260af
export default function Banner() {
  const {profile,setProfile}= useProfile();
  var temp=profile
  temp.path="/banner"
  // console.log(temp)
  setProfile(temp)
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
