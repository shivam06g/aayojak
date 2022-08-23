import React from 'react'
import { NavLink } from 'react-router-dom';
import { useProfile } from '../context/ProfileContext';
import "../css/Sidebar.css"
import profile from "../logo/Aayojak-logos/Aayojak-1.jpg";
export default function Sidebar() {
  const {isopen}= useProfile();
  console.log(isopen);
  return (
    <div style={{display : isopen===false ? "none" : ""}}>
          <div className="row">
            <div className="col-12">
              <div className="imgs">
                <div className="container-image">
                  <img src={profile} alt="profile" className="profile" />
                </div>
              </div>
              <h1 className="username">John Smith</h1>
              <hr />
              <NavLink to="/banner" className="link">
                banner
              </NavLink>
              <a href="/" className="link">
                Profile
              </a>
              <a href="/" className="link">
                Event
              </a>
              <a href="/" className="link">
                About
              </a>
              <a href="/" className="link">
                Contact
              </a>
            </div>
          </div>
        </div>
  )
}
