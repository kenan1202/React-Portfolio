import React from 'react'
import classes from './Navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav class={`${classes.nav} navbar navbar-expand-lg navbar-light`}>
      <div class='container-fluid'>
        <Link className='navbar-brand text-white fs-2' to='/'>
          Kenan
        </Link>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li class='nav-item'>
              <Link className='nav-link text-white fs-4' aria-current='page' to='/'>
                About
              </Link>
            </li>
            <li class='nav-item'>
              <Link class='nav-link text-white fs-4' to='/portfolio'>
                Portfolio
              </Link>
            </li>
            <li class='nav-item'>
              <Link class='nav-link text-white fs-4' to='/contact'>
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
