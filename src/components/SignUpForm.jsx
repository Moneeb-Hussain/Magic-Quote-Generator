import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
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
        const storedUsers = JSON.parse(localStorage.getItem("userData")) || []
        const existingUserEmail = storedUsers.find((element) => element.email === formstate.email)
        const existingUserName = storedUsers.find((element) => element.username === formstate.username)
        if (existingUserEmail) {
            setError("This email already exists.")
        }
        else if (existingUserName) {
            setError("Username already exists.")
        }
        else if (formstate.password !== formstate.confirmPassword) {
            setError("Passwords don't match")
        }
        else {
            storedUsers.push(formstate)
            setError("")
            localStorage.setItem('userData', JSON.stringify(storedUsers))
            setformstate({ email: "", password: "", username: "", firstname: "", lastname: "", confirmPassword: "" })
            navigate("/SignIn")
        }
    }

    return (
        <div className='signing-box'>
            <h1 className='heading-signing'> SignUp Form </h1>
            <form onSubmit={handlesubmit} >
                <div className='input-box'>
                    <label> First Name </label>
                    <input
                        type="text"
                        name="firstname"
                        value={formstate.firstname}
                        onChange={handleChange}
                        placeholder="First Name"
                        required />
                    <label> Last Name </label>
                    <input
                        type="text"
                        name="lastname"
                        value={formstate.lastname}
                        onChange={handleChange}
                        placeholder="Last Name"
                        required />
                    <label> Username </label>
                    <input type="text"
                        name="username"
                        value={formstate.username}
                        onChange={handleChange}
                        placeholder="Enter your Username"
                        required />
                    <label> Email </label>
                    <input
                        type="email"
                        name="email"
                        value={formstate.email}
                        onChange={handleChange}
                        placeholder="abc@gmail.com"
                        required />
                    <label > Password </label>
                    <input
                        type="password"
                        name="password"
                        value={formstate.password}
                        onChange={handleChange}
                        placeholder="Enter your Password (Atleast 8 characters)"
                        pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                        title='Password must include alphabets, numbers and special characters'
                        required />
                    <label > Confirm Password </label>
                    <input type="password"
                        name="confirmPassword"
                        value={formstate.confirmPassword}
                        onChange={handleChange}
                        placeholder="Re-enter your Password"
                        required />
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