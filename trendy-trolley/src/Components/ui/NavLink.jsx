import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = () => {
    return (
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active fw-semibold" href="#!">
                    Home
                </a>
            </li>
            <li className="nav-item">
                <link to='/profile' className="nav-link fw-seminbold" href="#!">
                    Shop
                </link>
            </li>
            <li className="nav-item">
                <a className="nav-link fw-seminbold" href="#!">
                    About
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link fw-seminbold" href="#!" >
                    Contact
                </a>
            </li>
        </ul>
    )
}

export default NavLink