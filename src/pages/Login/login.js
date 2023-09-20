import React, { useState } from "react";
import logo from '../../images/logo.png';
import './login.css'; // Import the CSS stylesheet
import { useDispatch } from "react-redux";
import { setLogin } from "./authSlice";

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const handleLogin = () => {
        
        console.log("login")
        dispatch(setLogin())
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
                        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

                        <label htmlFor="password" value={password} onChange={(e) => setPassword(e.target.value)}>Password</label>
                        <input type="password" id="password" />

                        <button onClick={handleLogin}>Login</button>

                        <a href="#">Forgot Password?</a>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Login;
