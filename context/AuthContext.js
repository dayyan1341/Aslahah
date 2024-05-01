// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    checkStoredToken();
  }, []);

  const checkStoredToken = async () => {
    try {
      const token = await SecureStore.getItemAsync('authToken');
      if (token) {
        setAuthToken(token);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error('Error checking stored token:', error);
    }
  };

  const signIn = async (token) => {
    try {
      await SecureStore.setItemAsync('authToken', token);
      setAuthToken(token);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error storing authentication token:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await SecureStore.deleteItemAsync('authToken');
      setAuthToken(null);
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Error removing authentication token:', error);
      throw error;
    }
  };

  const getToken = () => {
    return authToken;
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, signIn, signOut, getToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
