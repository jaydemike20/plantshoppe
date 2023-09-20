import React from "react";
import './navbar.css'
import logo from '../images/logo.png'

function customNavbar() {
    return(
        <div className="navbar-container">
            
            
            <div className="nav-logo">
                <h1>PlantShoppe</h1>
            </div>

            <div className="nav-links">
                <nav>
                    <ul>
                        <li><a href="/#">Home</a></li>
                        <li><a href="/#">Plants</a></li>
                        <li><a href="/#">About Us</a></li>
                        <li><a href="/#">Contact</a></li>
                    </ul>                    
                </nav>

            </div>

        </div>
    )
}


export default customNavbar;