import React from "react";
import "./footer.css"

function footer() {
    return(
        <div className="footer">
            <h4>Green Makes You Clean!</h4>
            <a href="">Zone 2b Cugman, Cagayan de Oro City</a>
            <p><span className="disclaimer">Disclaimer:</span>All Resources are for Educational Purposes Only <br />
The content and resources provided on this website are intended for educational purposes. <br/>Any information, articles, materials, or resources presented here are not intended as professional advice or endorsements of any kind. </p>
            <p style={{fontWeight: 700}}>©2023 PlantShoppe</p>
        </div>
    )
}


export default footer;