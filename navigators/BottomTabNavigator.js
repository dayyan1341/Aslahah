import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Services from '../screens/Services';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';



const Tab = createBottomTabNavigator();

export default function App() {
  return ( 
      <Tab.Navigator screenOptions={{headerShown:false}}> 
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Services" component={Services} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>  
  );
}