import Quote from './components/Quote';

const quotes = {
  text: "Sample quote",
  author: "Sample author"
}

function App() {
  return (
    <Quote text={quotes.text} author={quotes.author}/>
  );
}

export default App;
