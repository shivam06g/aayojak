import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../css/Eventform.css";
export default function EventForm() {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <Navbar />
        </div>
      </div>
      <div className="row">
        <div className="col-3 sidebar">
          <Sidebar />
        </div>

        <div className="col-9">
          <div className="row">
            <div className="jumbotron jumbotron-fluid col-12">
              <div className="containerjumbo">
                <h1 className="display-9">
                  <i className="fa fa-calendar " aria-hidden="true"></i> Event
                  registration form
                </h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-10 profilelogo">
              <h1>Details of coordinator</h1>
            </div>
          </div>

          <div className="row">
            <div className=" col-12">
              <div className="container">
                <form>
                  <div className="form-row">
                    <div className=" form-group  col">
                      <label>First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                      />
                    </div>
                    <div className="form-group col">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputEmail4">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputEmail4">Faculty ID</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="id"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="1234 Main St"
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputCity">City</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="inputState">State</label>

                      <input
                        type="text"
                        className="form-control"
                        id="inputState"
                      />
                    </div>
                    <div className="form-group col-md-2">
                      <label htmlFor="inputZip">Zip</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputZip"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-10 profilelogo">
              <h1>Event info</h1>
            </div>
          </div>

          <div className="row">
            <div className=" col-12">
              <div className="container">
                <form>
                  <div className="form-row">
                    <div className="form-group col-md">
                      <label>Event name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Event name"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md">
                      <label htmlFor="exampleFormControlTextarea1">
                        Event detail
                      </label>
                      <textarea
                        className="form-control"
                        id="Eventdetail"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md">
                      <label htmlFor="birthday">Event date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        name="date"
                      />
                    </div>
                    <div className="col">
                      <label>Mobile No.</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="phone number"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col">
                      <label>Organisation/Institute/College</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Organisation"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col">
                      <label>Number of participants</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="no. of participants"
                      />
                    </div>
                    <div className="form-group col">
                      <label>Duration</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="no of days"
                      />
                    </div>
                  </div>
                  <button type="submit" className=" logutbtn btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
