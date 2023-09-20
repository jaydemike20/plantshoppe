import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import image from '../../images/plant.jpeg'
import "./home.css"

function Home() {
    return(
        <div className='homecontainer'>
            <h1>Stocks</h1>

            <div className="button">
                <button>Add Item</button>
                <button>Delete Item</button>
            </div>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 400 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="center">Common Name</TableCell>
                        <TableCell align="center">Scientific Name</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="center">Image</TableCell>
                        <TableCell align="center">Stock</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">uploaded_date</TableCell>
                        <TableCell align="center">action</TableCell>

                    </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableCell>1</TableCell>
                        <TableCell align="center">Plants</TableCell>
                        <TableCell align="center">Plantae</TableCell>
                        <TableCell align="center">Plants are the eukaryotes that form the kingdom Plantae; they are predominantly photosynthetic. This means that they obtain their energy from sunlight, using chloroplasts derived from endosymbiosis with cyanobacteria to produce sugars from carbon dioxide and water, using the green pigment chlorophyll.</TableCell>
                        <TableCell align="center"><img src={image}></img></TableCell>
                        <TableCell align="center">20</TableCell>
                        <TableCell align="center">25000</TableCell>
                        <TableCell align="center">09-18-2023</TableCell>
                        <TableCell align="center">Modify</TableCell>
                    </TableBody>
                </Table>
            </TableContainer>



        </div>
    )
}

export default Home;