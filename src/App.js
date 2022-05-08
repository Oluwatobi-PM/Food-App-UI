import React from 'react';
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreateNewRestaurant from './pages/CreateNewRestaurant';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <>
    <Router>
      <div className="h-full min-h-full">
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<PrivateRoute />} >
          <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/createrestaurant" element={<PrivateRoute />} >
          <Route path="/createrestaurant" element={<CreateNewRestaurant />} />
          </Route>
          <Route path="/admin" element={<PrivateRoute />} >
          <Route path="/admin" element={<AdminPage />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
    <ToastContainer />
    </>
  );
}
export default App;














