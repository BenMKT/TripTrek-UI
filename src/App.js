import './App.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './root/Root';
import MainPage from './components/MainPage';
import ErrorPage from './components/ErrorPage';
import DetailsPage from './components/DetailsPage';
import ToDeleteList from './components/ListToDelete';
import AddCar from './components/AddCar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Login from './root/Login';
import Signup from './root/CreateAccount';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/details',
        element: <DetailsPage />,
      },
      {
        path:'/add_car',
        element: <AddCar />
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/to_delete',
        element: <ToDeleteList />,
      },
    ],
  },
]);
const App = () => (
  <Container>
    <RouterProvider router={router} />
  </Container>

);

export default App;
