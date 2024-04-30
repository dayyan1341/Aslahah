import * as SecureStore from 'expo-secure-store';

const getAuthToken = async () => {
  try {
    const token = await SecureStore.getItemAsync('authToken');
    return token;
  } catch (error) {
    console.error('Error retrieving token:', error);
    return null;
  }
};


export default getAuthToken