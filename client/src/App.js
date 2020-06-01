import React from 'react'
import Navbar from './components/Navbar'
import Profile from './containers/Profile'
import Habits from './containers/Habits'
import Login from './components/Login'
import Register from './components/Register'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import './css/main.css'
function App() {
  return (
   <Router>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/register" component={Register}/>
   </Router>
  );
}

export default App;
