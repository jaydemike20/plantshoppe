import React from "react";
import CustomNavbar from "../../components/navbar";
import './contact.css'
import { TextField, Button } from "@mui/material"; // Import Material-UI components
import Footer from "../../components/footer";

function Contact() {
    return(
        <div className="contact-container">
            <CustomNavbar />
            <div className="contact-content">
                <h1>Contact Us Here!👋</h1>

                <form className="form-contact">
                    <TextField
                        label="First Name"
                        variant="outlined"
                        placeholder="John"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Last Name"
                        variant="outlined"
                        placeholder="Doe"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        placeholder="@example.com"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        margin="normal"
                    />
                    <Button variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default Contact;
