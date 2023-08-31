import React, { useEffect, useState } from 'react'
import '../App.css'

export default function UserQuote(props) {
    const [text, settext] = useState('')
    const [storedQuotes, setstoredQuotes] = useState([])
    useEffect(() => {
        let quotesfromLocalStorage = JSON.parse(localStorage.getItem(props.username)) || []
        setstoredQuotes(quotesfromLocalStorage)
    }, [props.username])

    const handlesubmit = (e) => {
        e.preventDefault();
        if (text !== "") {
            const updatedQuotes = [...storedQuotes, text]
            localStorage.setItem(props.username, JSON.stringify(updatedQuotes))
            setstoredQuotes(updatedQuotes)
        }
        settext("")
    }
    const handledelete = (index) => {
        const updatedQuotes = [...storedQuotes]
        updatedQuotes.splice(index, 1)
        localStorage.setItem(props.username, JSON.stringify(updatedQuotes))
        setstoredQuotes(updatedQuotes)
    }

    return (
        <>
            <div className='userquote-container'>
                <form onSubmit={handlesubmit}>
                    <h1 className='heading-magicquotepage'> {props.username}'s Quotes </h1>
                    <div className='userquote-inputbox'>
                        <input
                            className='userquote-input'
                            type="text"
                            value={text}
                            onChange={(e) => { settext(e.target.value) }}
                            placeholder='Type your Quotes' />
                        <button className='quote-button' type="submit" > Add Quote </button>
                    </div>
                </form>
                <ul className='stored-quotes'>
                    {storedQuotes.map((element, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div>
                                    <li>{element}</li>
                                    <button className='delete-button' onClick={() => handledelete(index)} > Delete </button>
                                </div>
                            </React.Fragment>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}