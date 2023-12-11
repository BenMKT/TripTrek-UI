import './App.css';
import React from 'react';
import {
  BrowserRouter, Routes, Route, useLocation,
} from 'react-router-dom';
import axios from 'axios';
// import Root from './root/Root';
import MainPage from './components/MainPage';
// import ErrorPage from './components/ErrorPage';
import DetailsPage from './components/DetailsPage';
import ToDeleteList from './components/ListToDelete';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Login from './root/Login';
import Signup from './root/CreateAccount';
import Private from './components/Private';
import Navigation from './components/Navigation';
import AddCar from './components/AddCar';
import ReserveCar from './components/ReserveCar';
import Reservations from './components/Reservations';

const App = () => {
  const token = localStorage.getItem('token');
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};
const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/signup';

  const renderSidebar = !isLoginPage && !isSignupPage;

  return (
    <>
      {renderSidebar && <Navigation />}
      <Routes>
        <Route index element={<Private><MainPage /></Private>} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Private><MainPage /></Private>} />
        <Route path="addCar" element={<Private><AddCar /></Private>} />
        <Route path="to_delete" element={<Private><ToDeleteList /></Private>} />
        <Route path="/details" element={<Private><DetailsPage /></Private>} />
        <Route path="reserveform" element={<Private><ReserveCar /></Private>} />
        <Route path="myreservations" element={<Private><Reservations /></Private>} />
      </Routes>
    </>
  );
};
export default App;
