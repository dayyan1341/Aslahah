import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Profile() {
  return (
    <View>
      <Pressable>
        <Image source={require("../assets/favicon.png")} />
      </Pressable>
      <Pressable>
        <Image source={require("../assets/favicon.png")} />
      </Pressable>
      <View>
        <Text>Profile</Text>
        <Image source={require("../assets/favicon.png")} />
        <Text>User's Name</Text>
      </View>
      <View>
        <Text>Hello world</Text>
        <View>
          <Text>Personal Information</Text>
          <Text> Name </Text>
          <Text>Mariya</Text>
          <Text>Username</Text>
          <Text>mariya_786</Text>
          <Text>Gender</Text> 
          <Text>Female</Text>
          <Text>E-Mail</Text> 
          <Text>hello@world.com</Text>
          <Text>Phone</Text> 
          <Text>97884654</Text>
          <Text>Edit Profile</Text>
          <Pressable>
            <Image />
          </Pressable>
        </View>
        <View>
          <Text>Security</Text>
          <Text>Change Password</Text>
          <Pressable>
            <Image />
          </Pressable>
          <Text>Change mobile number</Text>
          <Pressable>
            <Image />
          </Pressable>
        </View>
        <Text>About Us</Text> 
        <Image />
        <Text>FAQs</Text> 
        <Image />
        <Pressable>
          <Text>Sign Out</Text>
        </Pressable>
        <Pressable>
          <Text>Contact Us</Text>
        </Pressable>
        <Image />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
