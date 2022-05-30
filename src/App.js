import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import QuotesComponent from './components/QuotesComponent';
import QuoteComponent from './components/QuoteComponent';

function App() {
  return (
    <Router>
      <div className="App">
        {/* navbar component goes here */}
        <Switch>
          <Route exact path="/">
            <Redirect to="/quotes"/>
          </Route>
          <Route exact path="/quotes">
            <QuotesComponent/>
          </Route>
          <Route path="/quotes/:id">
            <QuoteComponent/>
          </Route>
          <Route>
            {/* add quote component goes here */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
