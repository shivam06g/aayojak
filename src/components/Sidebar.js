import React from 'react'
import "../css/Sidebar.css"
import profile from "../logo/Aayojak-logos/Aayojak-1.jpg";
export default function Sidebar() {
  return (
    <div>
          <div className="row">
            <div className="col-12">
              <div className="imgs">
                <div className="container-image">
                  <img src={profile} alt="profile" className="profile" />
                </div>
              </div>
              <h1 className="username">John Smith</h1>
              <hr />
              <a href="/" className="link">
                Home
              </a>
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
