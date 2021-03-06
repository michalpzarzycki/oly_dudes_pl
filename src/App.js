import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './screens/Dashboard'
import Login from './screens/Login'
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Register from './screens/Register';
import { useSelector } from 'react-redux'
function App() {
  const userData = useSelector(state => state)
  useEffect(() => {
    console.log("USER DATA APP", userData)
  }, [userData.user.loggedIn])
  if (userData?.user?.loggedIn===true) {
    return (
      <Router>
        <div className="screen">
          <Navbar />
          <div className="body">
            <Sidebar />
            <Switch>
              <div className="App">
                <Route exact path="/" component={Dashboard} />
              </div>
            </Switch>
          </div>
        </div>
      </Router>
    )
  } else {
    return (
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
      </Router>
    )
  }
}

export default App;
