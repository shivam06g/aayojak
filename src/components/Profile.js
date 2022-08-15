import React from "react";
import Navbar from "./Navbar";
import "../css/Profile.css";

import profile from "../logo/Aayojak-logos/Aayojak-1.jpg";
export default function Profile() {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <Navbar />
        </div>
      </div>
      <div className="row">
        {/* sidebar */}
        <div className="col-3 sidebar">
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
        <div className="col-9">
          {/* profle logo */}
          <div className="row">
            <div className="col-12 profilelogo">
              <h1>Profile</h1>
            </div>
          </div>
          {/* data and button */}
          <div className="row">
            <div className="col-12 column1">
              <div className="container detail">
                <div class="col-lg-10">
                  <div class="card mb-4">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Full Name</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">John Smith</p>
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Email</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">example@example.com</p>
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Phone</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">(097) 234-5678</p>
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Mobile</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">(098) 765-4321</p>
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Address</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">
                            Bay Area, San Francisco, CA
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 column1">
              <button className="editbtn my-3">Edit profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
