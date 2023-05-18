import { useEffect, useState } from 'react'
import Home from '../routes/Home'
import '../App.css'

export default function UserQuote(props) {
    const [text, settext] = useState('')
    let storedquotes = JSON.parse(localStorage.getItem(props.username)) || []
    const handlesubmit = (e) => {
        e.preventDefault();
        if (!text == "") {
            storedquotes.push(text)
            localStorage.setItem(props.username, JSON.stringify(storedquotes))
        }
        settext("")
    }
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <form onSubmit={handlesubmit}>
                    <div className='userquote-inputbox'>
                        <input className='userquote-input' type="text" value={text} onChange={(e) => { settext(e.target.value) }} placeholder='Type your Quotes' />
                        <button className='quote-button' type="submit" > Add Quote </button>
                    </div>
                </form>
                <ul className='stored-quotes'>
                    {storedquotes.map((element, index) => {
                        return (
                            <li key={index}>{element}</li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}