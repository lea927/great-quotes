import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Quotes from './components/Quotes';

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
            <Quotes/>
          </Route>
          <Route>
            {/* quote component goes here
            include uuid in path
            ex: /quotes/:uuid */}
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
