import React from 'react'
import { Link } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';
import '../App.css';
function SignUp() {
  return (
    <div className='sign-up'>
      <SignUpForm />
      <span>Already have an account? {<Link className='Link' to="/SignIn"> Sign in </Link>}</span>
    </div>
  )
}

export default SignUp