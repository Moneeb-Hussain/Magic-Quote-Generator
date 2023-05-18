import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Post from "./Root";
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
        <>
            {quotes ? <p className="quotes-paragraph"> {quotes.text}</p> : <p className="quotes-paragraph">{quote[2].text}</p>}
            {quotes ? <p className="quotes-paragraph" > -{quotes.author ? quotes.author : "Anonymous"} </p > : <p className="quotes-paragraph" style={{ textAlign: "right" }} > -{quote[2].author} </p >}
            <button className="button" onClick={handlechange}> Generate Quote </button>
        </>
    )
}
export default MAgicQuote

export async function loader() {
    try {
        const res = await fetch(POSTS_URL);
        const quote = await res.json();
        return quote;
    } catch (error) {
        console.log(error);
    }
}
