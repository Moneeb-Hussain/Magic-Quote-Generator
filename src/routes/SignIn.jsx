import React, { useState, useRef, useEffect, useContext } from 'react'
import { Link, Navigate, redirect, useNavigate, useOutletContext } from 'react-router-dom';
import SignInForm from '../components/SignInForm';
import '../App.css';

function SignIn() {
  return (
    <div className='sign-up'>
      <SignInForm />
      <Link className='Link' to="/SignUp"> New User? Sign Up here </Link>
    </div >
  )
}

export default SignIn