import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Dashboard from './screens/Dashboard'
import './App.css';

function App() {
  return (    
        <Router>
          <Switch>
            <div className="App">
              <Route path="/dashboard" component={Dashboard} />
            </div>
        </Switch>
      </Router>

  );
}

export default App;
