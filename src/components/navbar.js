import React from "react";
import './navbar.css'
import user from '../images/user.png'
import { Link } from "react-router-dom";

function CustomNavbar() { // Capitalize the component name
    return(
        <div className="navbar-container">
            <div className="nav-logo">
                <h1>PlantShoppe</h1>
            </div>

            <div className="nav-links">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/plants">Plants</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/login"><img src={user} width="25px" /></Link></li>
                    </ul>                    
                </nav>
            </div>
        </div>
    )
}

export default CustomNavbar;
