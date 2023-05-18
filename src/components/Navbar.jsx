import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  return (
    <div className="navbar">
      {location.pathname == ("/") ? < Link className="Link-nav" to="/SignIn">SignIn</Link> : <Link className="Link-nav" to="/">Home</Link>}
      {location.pathname == ("/Quotes/") && < Link className="Link-nav" to="/SignIn">LogOut</Link>}
    </div >
  );
}

export default Navbar;
