import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Signup from './Components/SignUpPackage/SignUp';
import Login from './Components/LoginPackage/Login';
import RestartPassword from './Components/PasswordPackage/RestartPassword';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/signup" element={<Signup/>}/> 
      <Route path="/login" element={<Login/>}/> 
      <Route path="/restartPassword" element={<RestartPassword/>}/> 
      </Routes>
    </Router>

  );
}

export default App;
