import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Services from "../screens/Services";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import { Image,StyleSheet, View } from "react-native";
import SidebarNavigator from "./SidebarNavigator";
import i18n from "../context/i18n";
import { useAuth } from "../context/AuthContext";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const {locale} = useAuth()
  return (
    // <View style={styles.box}>
      // <View style={styles.innerbox}></View>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#00e9f1",
            // borderTopStartRadius: 20,
            // borderTopEndRadius: 20,
            shadowOpacity:0,
            borderTopWidth:0,
          },
          tabBarItemStyle: {
            margin: 5,
            // borderRadius: 10,
          },
          headerShown: false,
        }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: i18n[locale].home,
            
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
            tabBarLabel: i18n[locale].services,
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
        <Tab.Screen
          options={{
            tabBarLabel: i18n[locale].cart,
            tabBarIcon: () => (
              <Image
                source={require("../assets/static/cart.png")}
                style={{ height: 20, aspectRatio: 1 }}
              />
            ),
          }}
          name="Sidebar"
          component={SidebarNavigator}
        />
        <Tab.Screen
          options={{
            tabBarLabel: i18n[locale].profile,
            tabBarIcon: () => (
              <Image
                source={require("../assets/static/profile_dark.png")}
                style={{ height: 20, aspectRatio: 1 }}
              />
            ),
          }}
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>
    // </View>
  );
}
const styles = StyleSheet.create({
  // box:{
  //   position:'absolute',
  //   bottom:0,
  //   width:'100%',
  //   backgroundColor :'#00e9f1',
  // },
  // innerbox:{
  //   height:50,
  //   backgroundColor :'white',
  //   borderBottomLeftRadius:50,
  //   borderBottomRightRadius:30,
  // },
})