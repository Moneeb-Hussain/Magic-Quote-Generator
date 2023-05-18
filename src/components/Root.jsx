import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import Navbar from "./Navbar";

function Root() {
  const [auth, setauth] = useState(false);
  return (
    <>
      <Navbar />
      <Outlet context={[auth, setauth]} />
    </>
  )
}

export default Root