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
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from '../../plugins/axios';
import { Modal, Button, TextField } from '@mui/material';

import Edit from '../../images/edit.png'
import Delete from '../../images/delete.png';

function Home() {

    const token = useSelector(state => state.auth.token)

    const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal
    const [imageFile, setImageFile] = useState(null);
    const [users, setUsers] = useState([]); // State to store user data
    const [usersinfo, setUsersInfo] = useState([]);

    const [plants, setPlants] = useState({
        common_name: "",
        scientific_name: "",
        description: "",
        image: null,
        stock: "",
        price: "",
    })

    const [plantMap, setPlantsMap] = useState([])

    

  // Function to add a new item to the list
  const handleAddItem = () => {
    const formData = new FormData();
    formData.append('common_name', plants.common_name);
    formData.append('scientific_name', plants.scientific_name);
    formData.append('description', plants.description);
    formData.append('stock', plants.stock);
    formData.append('price', plants.price);

    // Append the image file if it's not null and not editing
    if (imageFile && !editItem) {
        formData.append('image', imageFile);
    }

    const request = editItem
        ? axios.put(`stocks/plants/${editItem.id}/`, formData, {
              headers: {
                  Authorization: `token ${token}`,
                  'Content-Type': 'multipart/form-data',
              },
          })
        : axios.post('stocks/plants/', formData, {
              headers: {
                  Authorization: `token ${token}`,
                  'Content-Type': 'multipart/form-data',
              },
          });

    request
        .then((response) => {
            console.log(response.data);
            setEditItem(null); // Clear the editing state
            // Clear input fields and close the modal
            setPlants({
                common_name: "",
                scientific_name: "",
                description: "",
                image: null,
                stock: "",
                price: "",
            });
            setImageFile(null);
            setIsModalOpen(false);
            // Reload the data
            fetchData();
        })
        .catch((error) => {
            console.log(error);
        });
};



const handleDelete = (itemId) => {
    axios.delete(`stocks/plants/${itemId}/`, {
        headers: {
            Authorization: `token ${token}`,
        },
    })
    .then(() => {
        // Reload the data after successful deletion
        fetchData();
    })
    .catch((error) => {
        console.log(error);
    });
};
const fetchData = () => {
    axios.get('stocks/plants/', {
        headers: {
            Authorization: `token ${token}`,
        },
    })
    .then((response) => {
        setPlantsMap(response.data);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
};

useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
}, []);



    const [editItem, setEditItem] = useState(null);

    const handleEdit = (item) => {
        setEditItem(item);
    
        // Clear the image if not editing
        if (!item.id) {
            setImageFile(null);
        }
    
        // Populate the modal with the item's data
        setPlants({
            common_name: item.common_name,
            scientific_name: item.scientific_name,
            description: item.description,
            stock: item.stock,
            price: item.price,
        });
        setIsModalOpen(true); // Open the modal
    };
    

  // Function to open the modal for adding items
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };


    useEffect(() => {
        // Fetch user data from the API
        axios.get('stocks/plants/', {
            headers: {
                Authorization: `token ${token}`,
            },
        })
        .then((response) => {
            // Set the retrieved user data in state
            console.log(response.data)
            setPlantsMap(response.data)
        })
        .catch((error) => {
            console.error('Error fetching user data:', error);
        });
    }, [handleAddItem]);

    const handleAddClient = () => {

        
    }



    return(
        <div className='homecontainer'>


            <div className='home-stocks'>
                
                <h1>Stocks</h1>

                <button className='stocks-add' onClick={openModal}>Add Item</button>
                {/* <button className='stocks-delete'>Delete Item</button> */}

                <div className='stocks-container'>

                    <TableContainer component={Paper} className='user-table'>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell align="center">common name</TableCell>
                                        <TableCell align="center">scientific name</TableCell>
                                        <TableCell align="center">description</TableCell>
                                        <TableCell align="center">image</TableCell>
                                        <TableCell align="center">stock</TableCell>
                                        <TableCell align="center">price</TableCell>
                                        <TableCell align="center">uploaded_date</TableCell>
                                        <TableCell align="center">action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {plantMap.map((plant) => (
                                        <TableRow key={plant.id}>
                                            <TableCell>{plant.id}</TableCell>
                                            <TableCell>{plant.common_name}</TableCell>
                                            <TableCell>{plant.scientific_name}</TableCell>
                                            <TableCell>{plant.description}</TableCell>                                            
                                            <TableCell>{plant.image}</TableCell>
                                            <TableCell>{plant.stock}</TableCell>
                                            <TableCell>{plant.price}</TableCell>
                                            <TableCell>{plant.uploaded_date}</TableCell>
                                            <TableCell>
                                                    <button title='edit' className='btn-edit' onClick={() => handleEdit(plant)}><img src={Edit} width="20px"/></button>
                                                    <button title='delete' className='btn-delete' onClick={() => handleDelete(plant.id)}><img src={Delete} width="20px"/></button>
                                                </TableCell>                                            
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                </div>

                {/* Modal for adding items */}
                <Modal open={isModalOpen} onClose={closeModal}>
                    <Paper style={{ padding: '16px', width: '500px', margin: 'auto', marginTop: '100px' }}>
                    <TextField
                        label="Common Name"
                        variant="outlined"
                        fullWidth
                        value={plants.common_name}
                        onChange={(e) => setPlants({
                            ...plants, common_name: e.target.value
                        })}
                    />
                    <TextField
                        label="Scientific Name"
                        variant="outlined"
                        fullWidth
                        value={plants.scientific_name}
                        onChange={(e) => setPlants({
                            ...plants, scientific_name: e.target.value
                        })}
                    />
                    <TextField
                        label="Description"
                        variant="outlined"
                        fullWidth
                        value={plants.description}
                        onChange={(e) => setPlants({
                            ...plants, description: e.target.value
                        })}
                    />

                    <TextField
                        type='number'
                        label="Stock"
                        variant="outlined"
                        fullWidth
                        value={plants.stock}
                        onChange={(e) => setPlants({
                            ...plants, stock: e.target.value
                        })}
                    />

                    <TextField
                        type='number'
                        label="Price"
                        variant="outlined"
                        fullWidth
                        value={plants.price}
                        onChange={(e) => setPlants({
                            ...plants, price: e.target.value
                        })}
                    />

                    <input
                        type='file'
                        id="photo"
                        name='filename'
                        onChange={(e) => {
                            setImageFile(e.target.files[0]); // Set the selected file to the state
                        }}
                    />

                                        
                    <div style={{ marginTop: '16px', textAlign: 'center' }}>
                        <Button variant="contained" color="primary" onClick={handleAddItem}>
                        Add Item
                        </Button>
                    </div>
                    </Paper>
                </Modal>


            </div>


        </div>
    )
}

export default Home;