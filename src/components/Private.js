import { Navigate } from 'react-router';

const Private = ({ children }) => {
  const savedUsername = localStorage.getItem('username');

  if (savedUsername) {
    return children;
  }
  return <Navigate to="/login" />;
};


export default Private;