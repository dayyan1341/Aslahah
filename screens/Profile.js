import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <View>
      <Pressable><Image /></Pressable>
      <Pressable><Image /></Pressable>
      <View>
        <Text>Profile</Text>
        <Image/>
        <Text>User's Name</Text>
      </View>
      <View>
        <View>
        <Text>Personal Information</Text>
        <Text></Text> <Text></Text>
        <Text></Text> <Text></Text>
        <Text></Text> <Text></Text>
        <Text></Text> <Text></Text>
        <Text></Text> <Text></Text>
        <Text>Edit Profile</Text><Pressable><Image/></Pressable>
        </View>
        <View>
          <Text>Security</Text>
        <Text>Change Password</Text><Pressable><Image/></Pressable>
        <Text>Change mobile number</Text><Pressable><Image/></Pressable>
        </View>
        <Text>About Us</Text> <Image/>
        <Text>FAQs</Text> <Image/>
        <Pressable><Text>Sign Out</Text></Pressable>
        <Pressable><Text>Contact Us</Text></Pressable>
        <Image/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})