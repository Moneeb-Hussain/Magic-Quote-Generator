import { Navigate, Outlet, useOutletContext } from "react-router-dom";

function ProtectedRuote() {
  const [auth, setauth] = useOutletContext()

  return (
    <>
      {auth ? <Outlet /> : <Navigate to="/SignIn" />}
    </>
  );
}

export default ProtectedRuote;


