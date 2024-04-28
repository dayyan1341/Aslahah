import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  Pressable,
  View,
} from "react-native";
import React, { useState } from "react";
import BlinkerText from "../components/BilnkerText";
import axios from "axios";

export default function Login({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://server.aslahah.com/api/auth/login",
        {
          id: phoneNumber,
          password: password,
        }
      );
      console.log("User logged in successfully:", response.data);
      navigation.navigate("Tabs");
      // You can handle navigation or any other action upon successful login here
    } catch (error) {
      console.error("Failed to log in:", error.message);
      Alert.alert("Failed to log in", error.message);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.topright}>
        <View style={styles.toprightwrapper}>
          <Text style={styles.toprightmsg}>Repairing at</Text>
          <Text style={styles.toprightmsg}>your doorstep</Text>
        </View>
        <Image
          source={require("../assets/static/20240221_000353_0005.png")}
          style={styles.img}
        />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.greeting}>
          {/* <BlinkerText styles={{fontSize:3}}>Hi !</BlinkerText> */}
          <Text style={styles.greetingmsg}>Hi !</Text>
          <Text style={styles.greetingmsg}>Welcome to</Text>
          <Text style={styles.greetingmsg}>AS-LAHAH</Text>
        </View>

        <View style={styles.loginForm}>
          <Text style={styles.detailinfo}>Please enter details</Text>
          <View style={styles.inputbox}>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              onChangeText={setPhoneNumber}
              value={phoneNumber}
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.miscbox}>
            <BlinkerText style={styles.miscboxmsg}>Remember Me</BlinkerText>
            <Text style={styles.miscboxmsg}>Forgot Password?</Text>
          </View>

          <View style={styles.loginbtn}>
            <Pressable onPress={handleLogin}>
              <Text style={styles.loginbtnmsg}>Log In</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.signupbtn}>
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text>
            Don't have an account ?{" "}
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Sign Up</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center", // Add alignItems for centering child elements horizontally
    backgroundColor: "#00e9f1",
  },
  // toprightwrapper:{
  //   display: 'flex',
  //   flexDirection :'column',
  //   alignContent : 'flex-end'
  // },
  topright: {
    position: "absolute",
    top: 50,
    right: -10,
    display: "flex",
    flexDirection: "row",
    fontWeight: "bold",
    gap: 5,
  },
  toprightmsg: {
    fontWeight: "bold",
  },
  img: {
    height: "90%",
    width: "20%",
  },
  wrapper: {
    width: "80%",
  },
  greeting: {
    marginBottom: 20,
  },
  greetingmsg: {
    fontSize: 60,
    // fontWeight: "bold",
    color: "#333341", // Use 'color' instead of 'fontcolor'
    margin: -8,
  },

  loginForm: {},
  detailinfo: {
    fontSize: 20,
    color: "#333341",
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 3,
    borderBottomColor: "#333341",
    marginBottom: 20,
    fontSize: 15,
    color: "#333341",
  },
  miscbox: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  miscboxmsg: {
    fontSize: 15,
    fontWeight: "bold",
  },
  loginbtn: {
    width: "100%",
    backgroundColor: "#333341",
    verticalAlign: "center",
    marginBottom: 20,
  },
  loginbtnmsg: {
    width: "100%",
    color: "antiquewhite",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    margin: 10,
  },
  signupbtn: {
    position: "absolute",
    bottom: 40,
    textAlign: "center",
  },
});
