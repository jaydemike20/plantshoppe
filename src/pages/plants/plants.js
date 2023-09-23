import React from "react";
import CustomNavbar from "../../components/navbar";
import Shop from "../../components/shop";
import './plants.css'
import Footer from "../../components/footer";

function plants() {
    return(
        <div className="plants-container">
            <CustomNavbar />
            <div className="shop-container">
                <Shop />            
            </div>

            <Footer />
        </div>
    )
}

export default plants;