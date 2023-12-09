import './App.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './root/Root';
import MainPage from './components/MainPage';
import ErrorPage from './components/ErrorPage';
import DetailsPage from './components/DetailsPage';
import ToDeleteList from './components/ListToDelete';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { AuthProvider } from './utils/AuthContext';
import 'bootstrap-icons/font/bootstrap-icons.css';

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
        path: '/to_delete',
        element: <ToDeleteList />,
      },
      {
        path:'/login',
        element: <Login />
      },
      {
        path:'/sign-up',
        element: <SignUp />
      }
    ],
  },
]);
const App = () => (
  <Container>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </Container>

);

export default App;
