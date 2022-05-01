import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <>
    <Router>
      <div className="h-full min-h-full">
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}
export default App;














