import React from 'react'
import '../css/Mininavbar.css'

export default function Mininavbar() {
  return (
    <div>
      <div className='row'>
        <div className='col-2 sylebut'>
            <a href="/" className='color'>Dashboard</a>
        </div>
        <div className='col-3 sylebut'>
            <a href="/" className='color'>Canteen detail</a>
        </div>
        <div className='col-3 sylebut'>
            <a href="/" className='color'>Auditorium</a>
        </div>
        <div className='col-2 sylebut'>
            <a href="/" className='color'>Social media</a>
        </div>
        <div className='col-2 sylebut'>
            <a href="/" className='color'>Email</a>
        </div>
      </div>
    </div>
  )
}
