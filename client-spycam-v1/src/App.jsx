import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome/Welcome'
import Auth from './pages/auth/Auth'
import Home from './pages/home/Home'

function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Welcome />}/>
      <Route path='/auth' element={<Auth />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  </Router>
  );
}

export default App;
