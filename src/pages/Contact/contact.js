import React from "react";
import CustomNavbar from "../../components/navbar";
import './contact.css'
import { Form } from "react-bootstrap";
import Footer from "../../components/footer";
function Contact() {
    return(
        <div className="contact-container">
            <CustomNavbar />
            <div className="contact-content">
                <h1>Contact Us Here!👋</h1>

                <form>
                    <label>First Name</label>
                    <input placeholder="John"></input>
                    <label>Last Name</label>
                    <input placeholder="Doe"></input>
                    <label>Email</label>
                    <input placeholder="@example.com"></input>

                    <label>Message</label>
                    <textarea></textarea>
                    <button>Submit</button>
                </form>
            </div>

            <Footer />

        </div>
    )
}

export default Contact;