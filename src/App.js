import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

function App() {
  return (    
        <Router>
          <Switch>
            <div className="App">
              <Route exact path="/" component={} />
              <Route path="/dashboard" component={} />
            </div>
        </Switch>
      </Router>

  );
}

export default App;
