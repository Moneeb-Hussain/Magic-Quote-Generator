import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';
import MAgicQuote from '../components/MagicQuote';
import '../App.css';
function SignUp() {
  return (
    <div className='sign-up'>
      <SignUpForm />
      <Link className='Link' to="/SignIn"> Already have an account? Sign in </Link>
    </div>
  )
}

export default SignUp