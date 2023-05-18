import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Post from "../components/Root";
import { useRef, useState } from "react";
import MAgicQuote from "../components/MagicQuote";
import { loader } from "../components/MagicQuote";
import UserQuote from "../components/UserQuote";
import { Route } from 'react-router-dom'
import "../App.css";

{/* <Route path='/:username' render={(props) => <UserQuote username={props.match.params.username} />} /> */ }

function Quote() {

  const { username } = useParams();
  let searchref = useRef("")
  const [filterquote, setfilterquote] = useState([])
  const navigate = useNavigate();
  const handlesearch = (e) => {
    if (searchref.current.value !== "") {
      let storedquotes = JSON.parse(localStorage.getItem(username)) || []
      let filteredquotes = storedquotes.filter(element => element.toLowerCase().includes(searchref.current.value.toLowerCase()))
      setfilterquote(filteredquotes)
    }
  }
  const handlelogout = () => {
    navigate("/")
  }

  return (
    < div className="quotes-mainbox" >
      {/* <button className="logout-button" onClick={handlelogout}> LogOut </button>s */}
      <div className="magic-quote">
        <h1 style={{ marginBottom: "100px" }}> Magic Quote </h1>
        <MAgicQuote />
      </div>
      <div className="user-quote">
        <UserQuote username={username} handle={handlesearch} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="user-quotesearch">
            <input type="text" ref={searchref} className="userquote-input" placeholder="Search your Quotes" />
            <button className="search-button" type="Search" onClick={handlesearch}> Search Quote</button>
          </div>
          <ul className="stored-quotes">
            {filterquote.map((element, index) => {
              return (
                <li key={index}>{element}</li>
              )
            })
            }
          </ul>
        </div>
      </div>
    </div >
  );
}
export default Quote;
