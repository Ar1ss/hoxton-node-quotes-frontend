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
      <ul className='quotes-list'>  
        {
          quotes.map(quote => <li className='quote'>
            <h2>  {quote.quote} </h2>
            <h3>  {quote.quoteName}
            <p>Age: {quote.age} </p> 
             </h3>
             <img width={200} src={quote.image} alt="" />
          </li>)
        }
      </ul>

    </div>
  )
}

export default App
