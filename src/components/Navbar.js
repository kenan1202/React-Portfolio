import React from 'react'
import classes from './Navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className={`${classes.nav} navbar navbar-expand-lg navbar-light`}>
      <div className='container-fluid'>
        <Link className='navbar-brand text-white fs-2' to='/'>
          Kenan
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link text-white fs-4' aria-current='page' to='/'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-white fs-4' to='/portfolio'>
                Portfolio
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-white fs-4' to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
