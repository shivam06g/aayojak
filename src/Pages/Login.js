import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useProfile } from "../context/ProfileContext";
import "../css/Login.css";
// eslint-disable-next-line no-unused-vars
// import profile from "../logo/Aayojak-logos/Aayojak-1.jpg";

export default function Login() {
  // eslint-disable-next-line no-unused-vars
  const {profile,setProfile} = useProfile();
  const [values, setValues] = useState({
    email: "",
    password: "",
    userType: "",
    error: "",
    doRedirect: false,
  });

  // eslint-disable-next-line no-unused-vars
  const { email, password, doRedirect, userType, error } = values;

  const handleChange = (event, name) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const signinHelper = async (user) => {
    let API = "";

    if (userType === "aicte") API = "http://localhost:3100/auth/aicte";
    else if (userType === "institute") {
      API = "http://localhost:3100/auth";
    } else {
      API = "http://localhost:3100/auth/facultymembers";
    }

    try {
      const response = await fetch(`${API}/signin`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      return await response.json();
    } catch (err) {
      return console.log(err);
    }
  };

  const authenticate = (data) => {
    console.log(data);
    if (typeof window !== "undefined") {
      localStorage.setItem("jwt", JSON.stringify(data));
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    //   setValues({...values,error:false,loading:true})
    const data = await signinHelper({ email, password });

    if (data.error) {
      setValues({ ...values, error: data.error, loading: false });
      alert(data.error);
    } else {
      authenticate(data);
      setValues({
        ...values,
        doRedirect: true,
      });
      setProfile({...values});
      // alert("signin success");
      // <Navigate to="/users"></Navigate>
    }
  };

  const LoginForm = () => {
    if (doRedirect === true) return <Navigate to="/users"></Navigate>;
    return (
      <div className="page">
        <div className="cover">
          <div className="imgs">
            <div className="container-image">
              <img  alt="profile" className="profile" />
            </div>
          </div>
          <h1 className="headinglogin">Login</h1>
          <input
            type="email"
            onChange={(e) => handleChange(e, "email")}
            placeholder="email"
            value={email}
          />
          <input
            type="password"
            onChange={(e) => handleChange(e, "password")}
            placeholder="password"
            value={password}
          />
          {/* <div class="form-group"> */}
          <select
            className="form-control select1"
            id="userType"
            onChange={(e) => handleChange(e, "userType")}
          >
            <option value="">Select user Type</option>
            <option value="aicte">AICTE Admin</option>
            <option value="institute">Insitute SPOC</option>
            <option value="faculty">Factulty</option>
          </select>
         
          {/* </div>        */}
          <button className="loginbtn my-3" onClick={onSubmit}>
            Login
          </button>
          {/* <p className="text"> */}
          {/* <a href="/">Forgot password ?</a> Or <a href="/">Sign Up</a> */}
          {/* </p> */}
        </div>
      </div>
    );
  };

  return <>{LoginForm()}</>;
}
