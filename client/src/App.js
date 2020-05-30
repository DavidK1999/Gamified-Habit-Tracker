import React from 'react';
import Navbar from './components/Navbar';
import 'semantic-ui-css/semantic.min.css'
import './css/main.css'
import Profile from './containers/Profile'
import Habits from './containers/Habits';
function App() {
  return (
    <>
    <Navbar/>
    <Profile/>
    <Habits/>
    </>
  );
}

export default App;
