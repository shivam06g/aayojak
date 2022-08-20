import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../css/Eventdashboard.css'
import Mininavbar from '../components/Mininavbar'

export default function Eventdashboard() {
  return (
    <div>
      <div className='row'>
        <div className='col-12'>
            <Navbar />
        </div>
      </div>

      <div className='row' style={{height:"100vh"}}>
        <div className='col-3 sidebar'>
            <Sidebar/>
        </div>


        <div className="col-9">
            <Mininavbar/>
          <div className="row">
            <div className="col-12 profilelogo">
              <h1>Event details</h1>
            </div>
          </div>
          {/* data and button */}
          <div className="row">
            <div className="col-12 column1">
              <div className="container detail">
                <div className="col-lg-10">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Full Name</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">John Smith</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Email</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">example@example.com</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Faculty Id</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">1234asv</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Adress</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">124 400/78 abc nearncksnv,haryana</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Event Name</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">habibi</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Event detail</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">eabra ka dabra gili gili chu</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Event date</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">14/5/2023</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Phone</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">9876543210</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Organisation name</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">chuitya UIET</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Number of participants</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">200</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Duration</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">41 days</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 column1">
            <button className="editbtn my-3">Report Generation</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
