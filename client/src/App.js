import React from 'react';
import Navbar from './components/Navbar';
import 'semantic-ui-css/semantic.min.css'
import './css/main.css'
import Profile from './containers/Profile'
import Habits from './containers/Habits';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  return (
    <>
    {/* <Navbar/>
    <Profile/>
    <Habits/> */}
    <Login/>
    <Register/>
    </>
  );
}

export default App;
