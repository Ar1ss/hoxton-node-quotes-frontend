import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    fetch("http://localhost:2345/quotes")
      .then(res => res.json())
      .then(quote => setQuotes(quote))
  }, [])

  return (
    <div className="App">
      <h1>Quotes</h1>
      <ul className='quotes-list'>
        {
          quotes.map(quote => <li className='quote'>
            <h2>  {quote.quote} </h2>
            <h3>
              {quote.quoteAuthor.authorName}
              <p>
                Age : {quote.quoteAuthor.authorAge}
              </p>
            </h3>

            <img width={200} src={quote.quoteAuthor.image} alt="" />

          </li>)
        }
      </ul>

    </div>
  )
}

export default App
