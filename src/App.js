import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Dashboard from './screens/Dashboard'
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  if (isLoggedIn) {
    return (
      <Router>
        <div className="screen">
        <Navbar />
        <div className="body">
        <Sidebar />
        <Switch>
          <div className="App">
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </Switch>
        </div>
        </div>
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
