// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { getLocales, addEventListener } from 'expo-localization';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState(null);
  const [locale, setLocale] = useState(getLocales()[0].languageCode);

  useEffect(() => {
    checkStoredToken();
  
    // Set up a listener to monitor changes in preferred locales
    const intervalId = setInterval(() => {
      const newLocale = getLocales()[0].languageCode;
      if (newLocale !== locale) {
        setLocale(newLocale);
      }
    }, 1000);
  
    // Clean up the listener when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Remove locale from the dependency array
  
  const handleLocalesChange = () => {
    // Update locale when preferred locales change
    setLocale(getLocales()[0].languageCode);
  };
  
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
    <AuthContext.Provider value={{ isLoggedIn, signIn, signOut, getToken , locale, setLocale }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
