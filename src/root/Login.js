import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../redux/users/userSlice';
import '../styles/login.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser(username));
      setError(
        'Login successful!  Redirecting.....  If this alert disappears before , please log-in again.',
      );
      // Delay the navigation for a moment to allow the user to see the success message
      setTimeout(() => {
        navigate('/home');
      }, 60000); // You can adjust the delay time (in milliseconds) as needed
    } catch (error) {
      setError('Login failed. Please sign up first.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Display error message if there is an error */}
          {error && <p className="login-message">{error}</p>}
          <lord-icon
            src="https://cdn.lordicon.com/ljvjsnvh.json"
            trigger="loop"
            delay="1000"
            colors="primary:#16c72e,secondary:#242424"
            state="morph"
            style={{ width: '180px', height: '180px' }}
          />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <button type="submit">Log In</button>
        </form>
        <p>
          Don&apos;t have an account?
          <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
