import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome/Welcome'
import Auth from './pages/auth/Auth'

function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Welcome />}/>
      <Route path='/auth' element={<Auth />} />
    </Routes>
  </Router>
  );
}

export default App;
