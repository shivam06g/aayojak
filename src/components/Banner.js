import React from "react";
import "../css/Banner.css";
import Login from "../Pages/Login";

export default function Banner() {
  return (
    <div>
      <div className="banner">
        <div className="row">
          <div className="col-lg-5 loginpage con hide">
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
