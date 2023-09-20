import React from "react";
import './about.css'
import CustomNavbar from "../../components/navbar";
import Footer from "../../components/footer";
import BG from "../../images/bg.jpeg"
import Shop from "../../images/shop.jpg"
import Asian from '../../images/asian.jpg'
function About() {
    return(
        <div className="about-container">
            <CustomNavbar />
            <div className="about-header">
                <h1>About</h1>
                <p>Welcome to PlantShoppe, where our love for plants grows as deep as our roots!</p>
            </div>

            <div className="about-content">

                <div className="about-pic">
                    <img src={BG} width="400px" />
                </div>

                <div className="about-story">
                    <h3>Our Story</h3>
                    <p>At PlantShoppe, we're not just a business; we're a community of passionate plant enthusiasts dedicated to bringing the beauty and benefits of greenery into your life. Our journey began when disney princess, our founder and chief plant lover, decided to turn their personal passion into a thriving plant paradise. Since then, we've been on a mission to make every space a little greener, one plant at a time.</p>
                </div>



            </div>

            <div className="about-content1">
                <div className="about-storyrev">
                    <h3>Why Choose Us?</h3>
                    <p>Quality is our promise. Each plant at PlantShoppe is handpicked and nurtured with the utmost care. We believe that every plant deserves a loving home, and we're here to match you with the perfect leafy companion. Whether you're a seasoned plant parent or a newbie, we've got something special waiting for you.</p>
                </div>
                
                <div className="about-picrev">
                    <img src={Asian} width="700px" />
                </div>


            </div>

<div className="about-content">

<div className="about-pic">
    <img src={Shop} width="700px" />
</div>

<div className="about-story">
    <h3>Our Commitment</h3>
    <p>At PlantShoppe, we're not just selling plants; we're promoting a lifestyle. We understand the importance of sustainable and eco-friendly practices, which is why we strive to source our plants and products responsibly. Our commitment to environmental responsibility extends to our packaging, which is designed to minimize waste and our carbon footprint.</p>
</div>



</div>

        <Footer />
        </div>
    )
}

export default About;