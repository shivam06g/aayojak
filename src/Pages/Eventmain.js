import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useProfile } from "../context/ProfileContext";
import "../css/Eventmain.css";

export default function Eventmain() {
  const { profile, setProfile,isopen} = useProfile();
  useEffect(() => {
    var temp = profile;
    temp.path = "/events";
    // console.log(temp)
    setProfile(temp);
  }, [profile, setProfile]);


  return (
    <div>
      <div className="row">
        <div className="col-12">
          <Navbar />
        </div>
      </div>

      <div className="row ">
        <div className={isopen ?"col-3 sidebar":""}>
          <Sidebar />
        </div>

        <div className={isopen ?"col-9":"col-12"}>
          <div className="row">
            <div className="col-10 profilelogo">
              <h1>Events</h1>
            </div>
            <div className="col-2 faviconplus">
              <NavLink to="/createEvent">
                <i className="fa fa-plus-circle fa-3x" aria-hidden="true" ></i>
              </NavLink>
            </div>
          </div>

          <div className="row">
            <div className="jumbotron jumbotron-fluid col-12">
              <div className="containerjumbo">
                <h1 className="display-9">Approved</h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="container col-12">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="/" className="btn btn-primary">
                    View Detail
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div
              className="jumbotron jumbotron-fluid col-12"
              style={{ marginTop: "30px" }}
            >
              <div className="containerjumbo">
                <h1 className="display-9">Pending</h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="container col-12">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="/" className="btn btn-primary">
                    View Detail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
