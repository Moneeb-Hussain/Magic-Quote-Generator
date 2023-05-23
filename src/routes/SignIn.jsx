import React from 'react'
import { Link } from 'react-router-dom';
import SignInForm from '../components/SignInForm';
import '../App.css';

function SignIn() {
  return (
    <div className='sign-up'>
      <SignInForm />
      <span>New to this app? {<Link className='Link' to="/SignUp"> Sign Up </Link>}  here </span>
    </div >
  )
}

export default SignIn