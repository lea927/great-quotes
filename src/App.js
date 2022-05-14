import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        {/* navbar component goes here */}
        <Routes>
          <Route exact path="/quotes">
            {/* landing page component goes here */}
          </Route>
          <Route>
            {/* quote component goes here
            include uuid in path
            ex: /quotes/:uuid */}
          </Route>
          <Route>
            {/* add quote component goes here */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
