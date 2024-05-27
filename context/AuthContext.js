// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { getLocales, addEventListener } from 'expo-localization';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState(null);
  const [details ,setDetails] = useState()
  const [locale, setLocale] = useState(getLocales()[0].languageCode);

  useEffect(() => {
    checkStoredToken();
    
    if(locale !=  'ar') setLocale('en')
    console.log(locale)
    console.log("token : "+authToken)
    console.log("Details : "+details)

  }, []);  
  
  const checkStoredToken = async () => {
    try {
      const token = await SecureStore.getItemAsync('authToken');
      const detail = await SecureStore.getItemAsync('details');
      if (token) {
        setAuthToken(token);
        if (detail) setDetails(JSON.parse(detail))
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error('Error checking stored token:', error);
    }
  };

  const signIn = async (user) => {
    try {
      await SecureStore.setItemAsync('authToken', user.token);
      await SecureStore.setItemAsync('details', JSON.stringify(user));
      setAuthToken(user.token);
      setDetails(user)
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error storing authentication token:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await SecureStore.deleteItemAsync('authToken');
      await SecureStore.deleteItemAsync('details');
      setAuthToken(null);
      setDetails(null)
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Error removing authentication token:', error);
      throw error;
    }
  };

  const getToken = () => {
    return authToken;
  };

  const getName = () => {
    return details.name;
  }

  const getEmail = () => {
    return details.email;
  }
  const getNumber = () => {
    return details.mobileNumber;
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, signIn, signOut, getToken , locale ,setLocale, getName, getEmail, getNumber }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
