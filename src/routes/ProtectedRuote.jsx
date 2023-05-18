import { Navigate, Outlet, useLoaderData, useOutletContext } from "react-router-dom";
import Post from "../components/Root";
import { useState } from "react";

function ProtectedRuote() {
  const [auth, setauth] = useOutletContext()

  return (
    <>
      {auth ? <Outlet /> : <Navigate to="/SignIn" />}
    </>
  );
}

export default ProtectedRuote;


