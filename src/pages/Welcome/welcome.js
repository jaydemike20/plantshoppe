import React from "react";
import './welcome.css'
import CustomNavbar from "../../components/navbar";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from '../../images/plants/image1.png'
import image2 from '../../images/plants/image2.png'
import image3 from '../../images/plants/image1.png'
import background from "../../images/background.png"
import PlantShoppe from "../../components/shop";

function Welcome(){


    return(
        <div className="welcomeContainer">
            <CustomNavbar />

            <div className="welcome-content">

                <div className="welcome-quotes">
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis erat venenatis ex euismod aliquet.</h4>
                    <p>Nullam turpis lacus, dapibus ac vehicula non, interdum sed nulla. Fusce suscipit purus dolor, id gravida augue fringilla in.</p>
                    <button>Explore More!</button>
                </div>

                <div className="welcome-card">
                    <Carousel className="welcome-carousel" showStatus={false} infiniteLoop={true} renderIndicator={false} showThumbs={false}  showArrows={false} autoPlay={true} centerMode={true} centerSlidePercentage={100}>
                        <div className="carousel-card">
                            <img src={image1} className="welcome-pic" />
                            <h3>Plant 1</h3>
                            <p>Vivamus vehicula tellus et ligula sagittis sodales id in odio.</p>
                        </div>
                        <div className="carousel-card">
                            <img src={image2} className="welcome-pic"/>
                            <h3>Plant 2</h3>
                            <p className="carousel-p">Vivamus vehicula tellus et ligula sagittis sodales id in odio.</p>
                        </div>
                        <div className="carousel-card">
                            <img src={image3} className="welcome-pic"/>
                            <h3>Plant 3</h3>
                            <p>Vivamus vehicula tellus et ligula sagittis sodales id in odio.</p>
                        </div>                        
                    </Carousel>
                </div>

            </div>

            {/* shop plants */}

            <div className="welcome-shop">
                <div className="shop-header">
                   <h2>Most Favorite Plants</h2>
                </div>

                <div className="shop-cards">
                    <PlantShoppe />
                                                
                </div>

            </div>



            <img src={background} className="welcome-bg" />
        </div>
    )

}


export default Welcome;