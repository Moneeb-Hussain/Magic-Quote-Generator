import React, { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom';
import '../App.css';

function SignInForm() {
    const [auth, setauth] = useOutletContext()
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
        const storedUsers = JSON.parse(localStorage.getItem("userData")) || []
        const matchedUser = storedUsers.find((element) => element.email === formstate.email && element.password === formstate.password && element.username === formstate.username);
        const uniqueUsername = storedUsers.find((element) => element.username === formstate.username)
        if (matchedUser) {
            navigate(`/Quotes/${formstate.username}`)
            setauth(true)
            setError("")
        }
        else if (!uniqueUsername) {
            setError("Username not found")
        }
        else {
            setError("Invalid Email or Password")
        }
    }
    return (
        <div className='signing-box'>
            <h1 className='heading-signing'> Sign In to your Account </h1>
            <form onSubmit={handlesubmit}>
                <div className='input-box'>
                    <label> Email </label>
                    <input
                        type="email"
                        name="email"
                        value={formstate.email}
                        onChange={handleChange}
                        placeholder="abc@gmail.com"
                        required />
                    <label > Username </label>
                    <input type="text"
                        name="username"
                        value={formstate.username}
                        onChange={handleChange}
                        placeholder="Enter your Username"
                        required />
                    <label > Password </label>
                    <input
                        type="password"
                        name="password"
                        value={formstate.password}
                        onChange={handleChange}
                        placeholder="Enter your Password"
                        required />
                </div>
                <p className='error'>{error}</p>
                <button className='submit-button' type="submit">Submit</button>
            </form>
        </div >
    )
}

export default SignInForm