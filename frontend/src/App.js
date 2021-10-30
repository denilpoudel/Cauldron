import './App.css';
import {Landing, CandyLimits, Loading, Tracker} from "./components/Pages"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
              <Landing />
          </Route>
          <Route path ="/candylimits" component = {CandyLimits} />
          <Route path ="/loading" component = {Loading} />
          <Route path ="/tracker" component = {Tracker} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
