import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const login = async (email, password) => {
    try {
      setError('');
      setLoading(true);
      const response = await axios.post('https://railsApi.com/login', {
        email,
        password,
      });

      // Take user data from the server, after successful login
      setUser(response.data);

      // save user info in local storage

      return response.data; // You can modify this based on your server response
    } catch (error) {
      setError(`Failed to log in: ${error.message}`);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (fullName, email, password) => {
    try {
      setError('');
      setLoading(true);
      const response = await axios.post('https://railsApi.com/signup', {
        full_name: fullName,
        email,
        password,
      });

      setUser(response.data);
      return response.data;
    } catch (error) {
      setError(`Failed to sign up: ${error.message}`);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    // Implement logout logic here if needed
    setUser(null);
  };

  const value = {
    user,
    loading,
    error,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
