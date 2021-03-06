import { useState, useEffect } from "react";

export function Quotes() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('/quotes.json')
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setQuotes(result);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  },[]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return(
      <ul>
        {quotes.map(quote =>
          <li key={quote.id}>
            {quote.quote} - {quote.author}
          </li>
        )}
      </ul>
    )
  }
}
export default Quotes;
