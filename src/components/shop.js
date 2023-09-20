import React from "react";
import image1 from '../images/plants/image1.png'
import './shop.css'
import { Card, CardActions, Box, CardContent, Button, Typography, CardMedia } from "@mui/material";


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

function shop() {
    return(
        <div className="card-container">
            <Card sx={{ maxWidth: 345, maxHeight: 505 }} className="card">
            <CardMedia
                component="img"
                alt="green iguana"
                height="345"
                image={image1}
                
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Lemon Grass
                </Typography>
                <Typography variant="body2" color="text.secondary">
                ₱ 1000.00
                </Typography>
            </CardContent>
            <CardActions >
                <Button size="small">Add to Cart</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345, maxHeight: 505 }} className="card">
            <CardMedia
                component="img"
                alt="green iguana"
                height="345"
                image={image1}
                
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Lemon Grass
                </Typography>
                <Typography variant="body2" color="text.secondary">
                ₱ 1000.00
                </Typography>
            </CardContent>
            <CardActions >
                <Button size="small">Add to Cart</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>            <Card sx={{ maxWidth: 345, maxHeight: 505 }} className="card">
            <CardMedia
                component="img"
                alt="green iguana"
                height="345"
                image={image1}
                
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Lemon Grass
                </Typography>
                <Typography variant="body2" color="text.secondary">
                ₱ 1000.00
                </Typography>
            </CardContent>
            <CardActions >
                <Button size="small">Add to Cart</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>            <Card sx={{ maxWidth: 345, maxHeight: 505 }} className="card">
            <CardMedia
                component="img"
                alt="green iguana"
                height="345"
                image={image1}
                
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Lemon Grass
                </Typography>
                <Typography variant="body2" color="text.secondary">
                ₱ 1000.00
                </Typography>
            </CardContent>
            <CardActions >
                <Button size="small">Add to Cart</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>            <Card sx={{ maxWidth: 345, maxHeight: 505 }} className="card">
            <CardMedia
                component="img"
                alt="green iguana"
                height="345"
                image={image1}
                
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Lemon Grass
                </Typography>
                <Typography variant="body2" color="text.secondary">
                ₱ 1000.00
                </Typography>
            </CardContent>
            <CardActions >
                <Button size="small">Add to Cart</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>            <Card sx={{ maxWidth: 345, maxHeight: 505 }} className="card">
            <CardMedia
                component="img"
                alt="green iguana"
                height="345"
                image={image1}
                
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Lemon Grass
                </Typography>
                <Typography variant="body2" color="text.secondary">
                ₱ 1000.00
                </Typography>
            </CardContent>
            <CardActions >
                <Button size="small">Add to Cart</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>            <Card sx={{ maxWidth: 345, maxHeight: 505 }} className="card">
            <CardMedia
                component="img"
                alt="green iguana"
                height="345"
                image={image1}
                
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Lemon Grass
                </Typography>
                <Typography variant="body2" color="text.secondary">
                ₱ 1000.00
                </Typography>
            </CardContent>
            <CardActions >
                <Button size="small">Add to Cart</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>            <Card sx={{ maxWidth: 345, maxHeight: 505 }} className="card">
            <CardMedia
                component="img"
                alt="green iguana"
                height="345"
                image={image1}
                
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Lemon Grass
                </Typography>
                <Typography variant="body2" color="text.secondary">
                ₱ 1000.00
                </Typography>
            </CardContent>
            <CardActions >
                <Button size="small">Add to Cart</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>                
        </div>
    )
}


export default shop;