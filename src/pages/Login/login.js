import React, { useState } from "react";
import logo from '../../images/logo.png';
import './login.css'; // Import the CSS stylesheet
import { useDispatch } from "react-redux";
import { setLogin } from "./authSlice";
import axios from '../../plugins/axios'

function Login() {

    const [credentials, setCredentials] = useState({
        username: 'jaydemike04',
        password: 'dario100'
    })

    const dispatch = useDispatch()

    const handleLogin = () => {
        
        axios.post("accounts/token/login", credentials)
        .then((response) => {
          const token = response.data.auth_token;
      
          // Make a GET request to "accounts/users/me/" using the obtained token
          axios.get("accounts/users/me/", {
            headers: {
              "Authorization": `token ${token}`
            }
          })
          .then(response => {

            if(response.data.role == "ADMIN"){
                alert("Welcome to Administrator")
                dispatch(setLogin())
            }else{
                
            }

            console.log(response.data);
          })
          .catch(error => {
            console.error("Error making GET request:", error);
          });




        })
        .catch(error => {
          console.error("Error logging in:", error);
        });
      

        console.log("login")
    }

    return (
        <div className="body-container">
            <div className="login-container">
                <div>
                    <img src={logo} alt="userlogo" className="logo" />
                    <h1 className="title">Plantshoppe</h1>
                </div>

                <div className="login-form">
                    <form>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" value={credentials.username} onChange={(e) =>{
                            setCredentials({
                                ...credentials, username: e.target.value
                            })
                        }} />

                        <label htmlFor="password" >Password</label>
                        <input type="password" id="password" value={credentials.password} onChange={(e) => {
                            setCredentials({
                                ...credentials, password: e.target.value
                            })
                        }}/>

                        <button onClick={handleLogin}>Login</button>

                        <a href="#">Forgot Password?</a>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Login;
