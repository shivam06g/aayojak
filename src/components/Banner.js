import React from 'react'
import '../css/Banner.css'
import home2 from '../image/home2.png'
import wav1 from '../image/wave1.png'
export default function Banner() {
  return (
    <div>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="promo-title">Aayojak</p>
              {/* <p>
                Components and options for laying out your Bootstrap project,
                including wrapping containers, a powerful grid system, a
                flexible media object, and responsive utility classNamees.
              </p> */}
            </div>
            <div className="col-md-6 text-center">
              <img src={home2} alt="home2" className="img-fluid" />
            </div>
          </div>
        </div>
        <img src={wav1} alt="nfgvjfs" className="bottom-img" />
      </div>
    </div>
  )
}
