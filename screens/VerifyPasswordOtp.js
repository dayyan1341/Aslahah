import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
  Alert,
} from "react-native";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const VerifyOtp = ({navigation,route}) => {
  const [otp, setOtp] = useState("");
  const {email,password,forgot} = route.params
  
  const { signIn } = useAuth();

  const reqLogin = async () => {
    try {
      const response = await axios.post(
        "https://server.aslahah.com/api/auth/login",
        {
          id: email,
          password: password,
        }
      );
      console.log("User logged in successfully:", response.data.user);
      signIn(response.data.user.token);
    } catch (error) {
      console.error("Failed to log in:", error.response.data.message );
      Alert.alert("Failed to log in", error.response.data.message || "Unknown error occurred");
      navigation.navigate("Login")
    }
  };


  const handleVerify = async () => {
    try {
     
      const response = await axios.post(
        "https://server.aslahah.com/api/auth/verify",
        {
          email :email,
          otp: otp,
        }
      );
      console.log("OTP verified successfully:", response.data);
      reqLogin()
    } catch (error) {
      console.error("Failed to verify OTP:", error.response.data);
      Alert.alert("Failed to verify OTP", error.response.data.message || "Unknown error occurred");
    }
  };

  const resendOtp = async () => {
    try {
     
      const response = await axios.post(
        "https://server.aslahah.com/api/auth/resend-otp",
        {
          email :email,
        }
      );
      console.log("OTP Resent successfully:", response.data);
      Alert.alert("Otp Resent Successfully","Please enter the new otp")
    } catch (error) {
      console.error("Failed to verify OTP:", error.response.data);
      Alert.alert("Failed to verify OTP", error.response.data.message || "Unknown error occurred");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <TextInput
        placeholder="OTP"
        value={otp}
        onChangeText={(text) => setOtp(text)}
        style={styles.input}
        keyboardType="numeric"
      />
      <View style={styles.btns}>
      <Pressable style={styles.button} onPress={resendOtp}>
        <Text style={styles.buttonText}>Resend</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify</Text>
      </Pressable>
      </View>
    </View>
  );
};

export default VerifyOtp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#333",
    padding: 10,
    marginBottom: 20,
    width: "80%",
    fontSize: 18,
  },
  btns:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'80%'
  },
  button: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
