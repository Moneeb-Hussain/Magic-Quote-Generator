import { useNavigate, Link, useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import MAgicQuote from "../components/MagicQuote";
import "../App.css";

function Home() {
  const navigate = useNavigate();
  const [auth, setauth] = useOutletContext()
  useEffect(() => {
    setauth(false)
    //eslint-disable-next-line react-hooks/exhaustive deps
  }, [])
  return (
    <div className="home-container">
      <h1 className="heading-magicquote"> Magic Quote Generator</h1>
      < div className="Quote-Box" >
        <MAgicQuote />
        <span>
          {<Link className="Link" to="/SignUp"> Sign Up </Link>}
          and get started by making your own Quotes
        </span>
      </div>
    </div>
  );
}
export default Home;
