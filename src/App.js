import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Dashboard from './screens/Dashboard'
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (isLoggedIn) {
    return (
      <Router>
        <Switch>
          <div className="App">
            <Route exact path="/login" component={Navbar} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </Switch>
      </Router>
    )
  } else {
    return (
      <Router>
        <Route path="/" component={Navbar} />
      </Router>
    )
  }
}

export default App;
