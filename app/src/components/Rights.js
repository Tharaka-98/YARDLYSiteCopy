import React from 'react'
import { Link } from 'react-router-dom'
import './Rights.css'

const Rights = () => {
  return (
    <div>
        <hr />
        <div className="social-media-wrap1">
        <div className="footer-logo1">
                <Link to='/' className='social-logo1'>
                    YARDLY 
                </Link>
            </div>
            <small className='website-rights1'> © 2023 YARDLY</small>
        </div>
    </div>
  )
}

export default Rights