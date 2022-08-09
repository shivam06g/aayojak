import React from 'react'
import "./Login.css"
import profile from "../logo/Aayojak-logos/Aayojak-1.jpg";

export default function Login() {
  return (
    <div className='cover'>
      <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile" />
              </div>
            </div>
        <h1 className='headinglogin'>Login</h1>
        <input type="text" placeholder ="username"></input>
        <input type="password" placeholder ="password"></input>
        {/* <div class="form-group"> */}
        <select className="form-control select1" id="inputGroupSelect01">
                    <option value="1">Owner</option>
                    <option value="2">admin</option>
                    <option value="3">Enduser</option>
        </select>
        {/* </div>        */}
        <button className='loginbtn my-3'>Login</button>
        <p className='text'><a href="/">Forgot password ?</a> Or <a href="/">Sign Up</a></p>
    </div>
  )
}
