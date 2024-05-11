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

const ForgotPass = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [pass, setPass] = useState("");
  const [otp, setOtp] = useState();

  const handleForgotPassword = async () => {
    if (!email) {
      Alert.alert("Enter email", "Please enter your registered email");
      return;
    }
    try {
      const response = await axios.post(
        "https://server.aslahah.com/api/auth/forgot-password",
        {
          email: email,
        }
      );
      console.log("Otp sent:", response.data);
      setOtpSent(true);
    } catch (error) {
      if (error.response) {
        console.error(
          "Failed to send otp. Server responded with:",
          error.response.data
        );
        console.error("Status code:", error.response.status);
        Alert.alert(
          "Failed to send otp",
          error.response.data.message || "Unknown error occurred"
        );
      } else if (error.request) {
        console.error("Failed to send otp. No response received from server.");
        Alert.alert("Failed to send otp", "No response received from server");
      } else {
        console.error("Failed to send otp. Error:", error.message);
        Alert.alert("Failed to send otp", error.message);
      }
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      Alert.alert("Otp Missing", "Please enter the sent Otp");
      return;
    }
    try {
      const response = await axios.post(
        "https://server.aslahah.com/api/auth/reset-password",
        {
          email: email,
          otp: otp,
          password: pass,
        }
      );
      console.log("Password reset:", response.data);

      if (response.data.message == "Password reset successfully") {
        Alert.alert(
          "Password reset succesfull",
          "Please login with your new password"
        );
      } else {
        Alert.alert("Please try again", "Something went wrong");
      }
      navigation.navigate("Login");
    } catch (error) {
      if (error.response) {
        console.error(
          "Failed to send otp. Server responded with:",
          error.response.data
        );
        console.error("Status code:", error.response.status);
        Alert.alert(
          "Failed to send otp",
          error.response.data.message || "Unknown error occurred"
        );
      } else if (error.request) {
        console.error("Failed to send otp. No response received from server.");
        Alert.alert("Failed to send otp", "No response received from server");
      } else {
        console.error("Failed to send otp. Error:", error.message);
        Alert.alert("Failed to send otp", error.message);
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
          <Text style={styles.greetingmsg}>Forgot Your Pass</Text>
          <Text style={styles.greetingmsg}>Don't Worry</Text>
        </View>

        <View style={styles.loginForm}>
          <Text style={styles.detailinfo}>Please enter Email</Text>
          <View style={styles.inputbox}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
              readOnly={otpSent}
            />
            {otpSent && (
              <>
                <TextInput
                  placeholder="Otp"
                  value={otp}
                  onChangeText={setOtp}
                  style={styles.input}
                />
                <TextInput
                  placeholder="New Password"
                  value={pass}
                  onChangeText={setPass}
                  style={styles.input}
                />
              </>
            )}
          </View>

          <View style={styles.loginbtn}>
            {otpSent ? (
              <Pressable onPress={handleVerifyOtp}>
                <Text style={styles.loginbtnmsg}>Verify Otp</Text>
              </Pressable>
            ) : (
              <Pressable onPress={handleForgotPassword}>
                <Text style={styles.loginbtnmsg}>Send Otp</Text>
              </Pressable>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ForgotPass;

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
    fontSize: 40,
    // fontWeight: "bold",
    color: "#333341", // Use 'color' instead of 'fontcolor'
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
