import { StyleSheet, Text,TextInput,Pressable, View, Switch } from 'react-native'
import React from 'react'

export default function Login() {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState("");
  
    const onPressFunction = () => console.log("pressed")
    return (
      <View style={styles.container}>
        <View>
          <Text>Hi !</Text>
          <Text>Welcome to</Text>
          <Text>AS-LAHAH</Text>
        </View>
  
        <View style={styles.loginForm}>
          <Text>Please enter details</Text>
          <Text>Phone Number</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
          />
          <Text>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
          <Text>Remember Me</Text>
          <Switch/>
  
          <Text>Forgot Password?</Text>
          <Pressable onPress={onPressFunction}>
            <Text>Log In</Text>
          </Pressable>
        </View>
        <View>
          <Pressable onPress={onPressFunction}>
            <Text>Don't have an account ? Sign Up</Text>
          </Pressable>
        </View>
        </View>
  
  )
}

const styles = StyleSheet.create({})