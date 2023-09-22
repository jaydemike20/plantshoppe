import React, { useEffect, useState } from "react";
import image1 from '../images/plants/image1.png'
import './shop.css'
import { Card, CardActions, Box, CardContent, Button, Typography, CardMedia } from "@mui/material";
import axios from "../../src/plugins/axios"

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

function Shop() {

    const [plants, setPlant] = useState([])

    useEffect(() => {

        axios.get("stocks/plants/").then((response) => {
            console.log(response.data)
            setPlant(response.data)
        }).catch((error) => {
            console.log(error)
        })

    }, [])

    return(
        <div className="card-container">
            {plants.map((plant, index) => (
                <Card key={index} sx={{ maxWidth: 345, maxHeight: 505 }} className="card">
                <CardMedia
                    component="img"
                    alt={plant.common_name} // Set a unique alt text for each plant
                    height="345"
                    image={plant.image} // Assuming each plant object has an 'image' property
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {plant.common_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    ₱ {plant.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Add to Cart</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
            ))}                          
        </div>
    )
}


export default Shop;