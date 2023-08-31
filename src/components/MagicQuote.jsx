import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import "../App.css";

const POSTS_URL = "https://type.fit/api/quotes";

function MAgicQuote() {
    const [quotes, setquotes] = useState("")
    const quote = useLoaderData();
    const handlechange = () => {
        let randomnum = Math.floor(Math.random() * quote.length)
        setquotes(quote[randomnum])
    }
    return (
        <div className="quote-container">
            {quote[1] && (quotes
                ? <p className="quotes-paragraph"> {quotes.text}</p>
                : <p className="quotes-paragraph">{quote[2].text}</p>)}
            {quote[1] && (quotes
                ? <p className="quotes-author" > <em> -{quotes.author ? quotes.author : "Anonymous"}  </em></p >
                : <p className="quotes-author"> <em> -{quote[2].author} </em> </p >
            )}
            {quote.message && <p className="error-fetch"> Failed to Fetch Data </p>}
            <button className="button" onClick={handlechange}> Generate Quote </button>
        </div>
    )
}
export default MAgicQuote

export async function loader() {
    let getQuotes = JSON.parse(localStorage.getItem("magicQuotes"))
    if (!getQuotes) {
        try {
            const res = await fetch(POSTS_URL);
            const quote = await res.json();
            localStorage.setItem("magicQuotes", JSON.stringify(quote))
            return quote
        }
        catch (error) {
            return error;
        }
    }
    else {
        return getQuotes;
    }
}
