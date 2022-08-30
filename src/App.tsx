import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    fetch("http://localhost:2345/quotes")
    .then (res => res.json())
    .then (quote => setQuotes(quote))
  } , [])

  return (
    <div className="App">
     <h1>Quotes</h1>
      <ul>  
        {
          quotes.map(quote => <li>
            <h2> Quote : {quote.quote} </h2>
            <h3> Name : {quote.quoteName} </h3>
          </li>)
        }
      </ul>

    </div>
  )
}

export default App
