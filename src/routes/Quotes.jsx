import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
import MAgicQuote from "../components/MagicQuote";
import UserQuote from "../components/UserQuote";
import "../App.css";

function Quote() {

  const { username } = useParams();
  let searchRef = useRef("")
  const [filteredQuote, setfilteredQuote] = useState([])
  const handlesearch = (e) => {
    if (searchRef.current.value !== "") {
      let storedQuotes = JSON.parse(localStorage.getItem(username)) || []
      let filteredQuotes = storedQuotes.filter(element => element.toLowerCase().includes(searchRef.current.value.toLowerCase()))
      setfilteredQuote(filteredQuotes)
    }
  }

  return (
    <div className="quotes-mainbox" >
      <div className="magic-quote">
        <MAgicQuote />
      </div>
      <div className="user-quote">
        <UserQuote username={username} />
        <div className="userquote-container">
          <div className="user-quotesearch">
            <input
              type="text"
              ref={searchRef}
              className="userquote-input"
              placeholder="Search your Quotes" />
            <button className="search-button" onClick={handlesearch}> Search </button>
          </div>
          <ul className="stored-quotes">
            {filteredQuote.map((element, index) => {
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
