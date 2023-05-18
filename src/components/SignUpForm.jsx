import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import UserQuote from './UserQuote';
import '../App.css';

function SignUpForm() {

    const [formstate, setformstate] = useState({ email: "", password: "", username: "", firstname: "", lastname: "", confirmPassword: "" })
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
        const existinguser = storedusers.find((element) => element.email === formstate.email)
        const existingusername = storedusers.find((element) => element.username === formstate.username)
        if (existinguser) {
            setError("This email already exists.")
        }
        else if (existingusername) {
            setError("Username already exists.")
        }
        else if (formstate.password.length <= 6) {
            setError("Password too short")
        }
        else if (formstate.password !== formstate.confirmPassword) {
            setError("Passwords don't match")
        }
        else {
            storedusers.push(formstate)
            setError("")
            localStorage.setItem('userData', JSON.stringify(storedusers))
            setformstate({ email: "", password: "", username: "", firstname: "", lastname: "", confirmPassword: "" })
            navigate("/SignIn")
        }
    }

    return (
        <div className='sign-upbox'>
            <h1 style={{ marginBottom: "24px" }} > Registration Form </h1>
            <form onSubmit={handlesubmit} style={{ textAlign: "center" }}  >
                <div className='input-box'>
                    <label> First Name </label>
                    <input type="text" name="firstname" value={formstate.firstname} onChange={handleChange} placeholder="First Name" required />
                    <label> Last Name </label>
                    <input type="text" name="lastname" value={formstate.lastname} onChange={handleChange} placeholder="Last Name" required />
                    <label> Username </label>
                    <input type="text" name="username" value={formstate.username} onChange={handleChange} placeholder="Enter your Username" required />
                    <label> Email </label>
                    <input type="email" name="email" value={formstate.email} onChange={handleChange} placeholder="abc@gmail.com" required />
                    <label > Password </label>
                    <input type="password" name="password" value={formstate.password} onChange={handleChange} placeholder="Enter your Password (Atleast 6 characters)" required />
                    <label > Confirm Password </label>
                    <input type="password" name="confirmPassword" value={formstate.confirmPassword} onChange={handleChange} placeholder="Re-enter your Password" required />
                </div>
                <div>
                    <p className='error'>{error}</p>
                </div>
                <button className='submit-button' type="submit">Submit</button>
            </form>
        </div >
    )
}

export default SignUpForm