import { useLoaderData, useNavigate, useParams, Link, useOutletContext } from "react-router-dom";
import Post from "../components/Root";
import { useEffect, useRef, useState } from "react";
import MAgicQuote from "../components/MagicQuote";
import { loader } from "../components/MagicQuote";
import UserQuote from "../components/UserQuote";
import { Route } from 'react-router-dom'
import "../App.css";

function Home() {
  const navigate = useNavigate();
  const [auth, setauth] = useOutletContext()
  useEffect(() => {
    setauth(false)
    console.log(auth)
  }, [])
  return (
    <div className="Quote-Box">
      <h1 style={{ marginBottom: "100px", fontSize: "37px" }}> Magic Quote Generator</h1>
      <MAgicQuote />
      <Link className="Link" to="/SignUp">Sign Up and get started by making your own Quotes </Link>
    </div >
  );
}
export default Home;
