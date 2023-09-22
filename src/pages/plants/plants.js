import React from "react";
import CustomNavbar from "../../components/navbar";
import Shop from "../../components/shop";
import './plants.css'

function plants() {
    return(
        <div className="plants-container">
            <CustomNavbar />
            <div className="shop-container">
                <Shop />            
            </div>
        </div>
    )
}

export default plants;