import * as SecureStore from 'expo-secure-store';


const isLoggedIn = async () => {
  try {
    const loggedIn = await SecureStore.getItemAsync('isLoggedIn');
    return loggedIn === 'true';
  } catch (error) {
    console.error('Error retrieving login state:', error);
    return false;
  }
};
