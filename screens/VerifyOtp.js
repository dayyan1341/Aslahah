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

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");

  const handleVerify = async () => {
    try {
      const response = await axios.post(
        "https://server.aslahah.com/api/auth/verify",
        {
          otp: otp,
        }
      );
      console.log("OTP verified successfully:", response.data);
      navigation.navigate("Tabs");
      // You can handle navigation or any other action upon successful OTP verification here
    } catch (error) {
      console.error("Failed to verify OTP:", error.message);
      Alert.alert("Failed to verify OTP", error.message);
    }
  };

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
      <Pressable style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify</Text>
      </Pressable>
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
