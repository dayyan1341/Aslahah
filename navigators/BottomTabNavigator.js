import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Services from "../screens/Services";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#00e9f1",
          borderTopStartRadius:20,
          borderTopEndRadius:20,
          
        },
        tabBarItemStyle: {
          margin: 5,
          borderRadius: 10,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <Image
              source={require("../assets/static/home.png")}
              style={{ height: 20, aspectRatio: 1 }}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Services",
          tabBarIcon: () => (
            <Image
              source={require("../assets/static/services.png")}
              style={{ height: 20, aspectRatio: 1 }}
            />
          ),
        }}
        name="Services"
        component={Services}
      />
      <Tab.Screen options={{
          tabBarLabel: "Cart",
          tabBarIcon: () => (
            <Image source={require("../assets/static/cart.png")} style={{height:20,aspectRatio:1}} />
          ),
        }} name="Cart" component={Cart} />
      <Tab.Screen options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <Image source={require("../assets/static/profile_dark.png")} style={{height:20,aspectRatio:1}} />
          ),
        }} name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
