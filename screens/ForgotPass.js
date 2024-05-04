import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  Pressable,
  View,
} from "react-native";
import axios from "axios";

const Signup = ({navigation}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post("https://server.aslahah.com/api/auth/register", {
        name: name,
        email: email,
        password: password,
        mobileNumber: mobile,
      });
      console.log("User registered successfully:", response.data);
      if(response.data.user){
        navigation.navigate("Verify",{email,password})
      }
        navigation.navigate("Login")

    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(
          "Failed to register user. Server responded with:",
          error.response.data
        );
        console.error("Status code:", error.response.status);
        Alert.alert(
          "Failed to register user",
          error.response.data.message || "Unknown error occurred"
        );
      } else if (error.request) {
        // The request was made but no response was received
        console.error(
          "Failed to register user. No response received from server."
        );
        Alert.alert(
          "Failed to register user",
          "No response received from server"
        );
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Failed to register user. Error:", error.message);
        Alert.alert("Failed to register user", error.message);
      }
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
          <Text style={styles.greetingmsg}>Register to</Text>
          <Text style={styles.greetingmsg}>AS-LAHAH</Text>
        </View>

        <View style={styles.loginForm}>
          <Text style={styles.detailinfo}>Please enter details</Text>
          <View style={styles.inputbox}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
            />
            {/* <TextInput
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={styles.input}
            /> */}
            <TextInput
              placeholder="Otp"
              value={mobile}
              onChangeText={(text) => setMobile(text)}
              keyboardType="phone-pad"
              style={styles.input}
            />
          </View>

          <View style={styles.loginbtn}>
            <Pressable onPress={handleSignup}>
              <Text style={styles.loginbtnmsg}>Send Otp</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Signup;

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
