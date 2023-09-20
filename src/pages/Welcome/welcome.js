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
import PhotoShop from '../../images/shop.jpg'
import Footer from '../../components/footer'

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
                <PlantShoppe /> 
                <div className="welcome-shopbtn">
                    <button>See more...</button>

                </div>

            </div>

            {/* date */}

            <div className="welcome-date">

                <div className="shopdate">
                    <h3>Welcome to PlantShoppe, where green dreams come to life! Step into our lush oasis and let nature's beauty embrace you.</h3>
                    <p>Loaded with your favorite houseplants and accessories, we're thrilled to greet you and assist you with all your indoor jungle requirements 🌿. 
                        <br/>Visit us to exchange positive energy and engage in conversations about plants✌️.<br/><br/>Don't forget, we now offer local pickup every Wednesday through Sunday! </p>
                </div>

                <div className="shop-photo">
                    <img src={PhotoShop} />
                </div>

            </div>

            <Footer />
            <img src={background} className="welcome-bg" />
        </div>
    )

}


export default Welcome;