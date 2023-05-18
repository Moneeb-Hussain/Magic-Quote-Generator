import React, { useState, useRef, useEffect, useContext } from 'react'
import { Link, Navigate, redirect, useNavigate, useOutletContext } from 'react-router-dom';
import '../App.css';

function SignInForm() {
    const [auth, setauth] = useOutletContext()
    console.log(auth)
    const [formstate, setformstate] = useState({ email: "", password: "", username: "" })
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setformstate({ ...formstate, [name]: value })
    }
    const handlesubmit = (event) => {
        event.preventDefault();
        const storedusers = JSON.parse(localStorage.getItem("userData")) || []
        const matcheduser = storedusers.find((element) => element.email === formstate.email && element.password === formstate.password);
        const username = storedusers.find((element) => element.username === formstate.username)
        if (matcheduser && username) {
            navigate(`/Quotes/${formstate.username}`)
            setauth(true)
            setError("")
        }
        else if (!username) {
            setError("Username not found")
        }
        else {
            setError("Invalid Email or Password")
        }
    }
    return (
        <div className='sign-upbox'>
            <h1 style={{ marginBottom: "24px" }}> Sign In to your Account </h1>
            <form onSubmit={handlesubmit} style={{ textAlign: "center" }}  >
                <div className='input-box'>
                    <label> Email </label>
                    <input type="email" name="email" value={formstate.email} onChange={handleChange} placeholder="abc@gmail.com" required />
                    <label > Username </label>
                    <input type="text" name="username" value={formstate.username} onChange={handleChange} placeholder="Enter your Username" required />
                    <label > Password </label>
                    <input type="password" name="password" value={formstate.password} onChange={handleChange} placeholder="Enter your Password" required />
                </div>
                <p className='error'>{error}</p>
                <button className='submit-button' type="submit">Submit</button>
            </form>
        </div >
    )
}

export default SignInForm