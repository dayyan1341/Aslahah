import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  Pressable,
  View,
  Alert,
} from "react-native";
import axios from "axios";
import i18n from "../context/i18n";
import { useAuth } from "../context/AuthContext";

const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const { locale } = useAuth();

  const handleSignup = () => {
    if (name && email && mobile && password) {
      reqSignup();
    } else Alert.alert("Field Empty", "Please enter in all the details");
  };

  const reqSignup = async () => {
    // Password validation criteria
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[$&+,:;=?@#|'<>.^*()%!-]/;

    if (
      !uppercaseRegex.test(password) ||
      !lowercaseRegex.test(password) ||
      !numberRegex.test(password) ||
      !specialCharRegex.test(password)
    ) {
      Alert.alert(
        "Weak Password",
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "https://server.aslahah.com/api/auth/register",
        {
          name: name,
          email: email,
          password: password,
          mobileNumber: mobile,
        }
      );
      console.log("User registered successfully:", response.data);
      if (response.data.user) {
        navigation.navigate("Verify", { email, password });
      } else {
        Alert.alert("Something Bad Happened", "Please try again later");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response) {
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
        console.error(
          "Failed to register user. No response received from server."
        );
        Alert.alert(
          "Failed to register user",
          "No response received from server"
        );
      } else {
        console.error("Failed to register user. Error:", error.message);
        Alert.alert("Failed to register user", error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topright}>
        <View style={styles.toprightwrapper}>
          <Text style={styles.toprightmsg}>{i18n[locale].firstSentence}</Text>
          <Text style={styles.toprightmsg}>{i18n[locale].secondSentence}</Text>
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
            <Text>Name : </Text>
            <TextInput
              placeholder="Name"
              value={name}
              onChangeText={(text) => setName(text)}
              style={styles.input}
            />
            <Text>Email : </Text>

            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
            />
            <Text>Password : </Text>

            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={styles.input}
            />
            <Text>Mobile Number : </Text>

            <TextInput
              placeholder="Mobile Number"
              value={mobile}
              onChangeText={(text) => setMobile(text)}
              keyboardType="phone-pad"
              style={styles.input}
            />
          </View>

          <View style={[styles.loginbtn,{ backgroundColor: loading ? "grey" : "#333341" }]}>
            <Pressable
              onPress={handleSignup}
              disabled={loading}
            >
              <Text style={styles.loginbtnmsg}>Sign Up</Text>
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
    paddingEnd:25,
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
