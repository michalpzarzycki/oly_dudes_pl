import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Dashboard from './screens/Dashboard'
import Login from './screens/Login'
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (isLoggedIn) {
    return (
      <Router>
        <div className="screen">
          <Navbar />
          <div className="body">
            <Sidebar />
            <Switch>
              <div className="App">
                <Route exact path="/" component={Login} />
              </div>
            </Switch>
          </div>
        </div>
      </Router>
    )
  } else {
    return (
      <Router>
        <Route path="/" component={Login} />
      </Router>
    )
  }
}

export default App;
