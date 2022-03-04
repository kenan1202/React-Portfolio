import React from 'react'
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';



function Navbar() {
    return (
        <div className = {classes.navbar}>
            <h1>Kenan</h1>
            <nav className = 'd-none d-sm-block'>
                <ul>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to = "/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to = "/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar