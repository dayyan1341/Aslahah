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
import { useAuth } from "../context/AuthContext";
import i18n from "../context/i18n";

const ForgotPass = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [pass, setPass] = useState("");
  const [otp, setOtp] = useState();
  const [lod1 , setLod1 ] = useState(false);
  const [lod2 , setLod2 ] = useState(false);

  const {locale} = useAuth()

  const handleForgotPassword = async () => {
    if (!email) {
      Alert.alert(i18n[locale]["Enter email"], i18n[locale]["Please enter your registered email"]);
      return;
    }
    try {
      setLod1(true)
      const response = await axios.post(
        "https://server.aslahah.com/api/auth/forgot-password",
        {
          email: email,
        }
      );
      console.log(i18n[locale]["Otp sent"], response.data);
      setOtpSent(true);
    } catch (error) {
      if (error.response) {
        console.error(
          "Failed to send otp. Server responded with:",
          error.response.data
        );
        console.error("Status code:", error.response.status);
        Alert.alert(
          i18n[locale]["Failed to send otp"],
          error.response.data.message || i18n[locale]["Unknown error occurred"]
        );
      } else if (error.request) {
        console.error("Failed to send otp. No response received from server.");
        Alert.alert(i18n[locale]["Failed to send otp"], i18n[locale]["No response received from server"]);
      } else {
        console.error("Failed to send otp. Error:", error.message);
        Alert.alert(i18n[locale]["Failed to send otp"], error.message);
      }
    } finally {
      setLod1(false)
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      Alert.alert(i18n[locale]["Otp Missing"], i18n[locale]["Please enter the sent Otp"]);
      return;
    }
    try {
      setLod2(true)
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
          i18n[locale]["Password reset succesfull"],
          i18n[locale]["Please login with your new password"]
        );
      } else {
        Alert.alert(i18n[locale]["Please try again"], i18n[locale]["Something went wrong"]);
      }
      navigation.navigate("Login");
    } catch (error) {
      if (error.response) {
        console.error(
          "Failed to change password. Server responded with:",
          error.response.data
        );
        console.error("Status code:", error.response.status);
        Alert.alert(
          i18n[locale]["Failed to change password"],
          error.response.data.message || i18n[locale]["Unknown error occurred"]
        );
      } else if (error.request) {
        console.error("Failed to change password. No response received from server.");
        Alert.alert(i18n[locale]["Failed to change password"], i18n[locale]["No response received from server"]);
      } else {
        console.error("Failed to change password. Error:", error.message);
        Alert.alert(i18n[locale]["Failed to change password"], error.message);
      }
    } finally {
      setLod2(false)
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topright}>
        <View style={styles.toprightwrapper}>
          <Text style={styles.toprightmsg}>{i18n[locale]["Repairing at"]}</Text>
          <Text style={styles.toprightmsg}>{i18n[locale]["your doorstep"]}</Text>
        </View>
        <Image
          source={require("../assets/static/20240221_000353_0005.png")}
          style={styles.img}
        />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.greeting}>
          <Text style={styles.greetingmsg}>{i18n[locale]["Forgot Your Pass"]}</Text>
          <Text style={styles.greetingmsg}>{i18n[locale]["Don't Worry"]}</Text>
        </View>

        <View style={styles.loginForm}>
          <Text style={styles.detailinfo}>{i18n[locale]["Please enter Email"]}</Text>
          <View style={styles.inputbox}>
            <TextInput
              placeholder={i18n[locale].Email}
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
              readOnly={otpSent}
            />
            {otpSent && (
              <>
                <TextInput
                  placeholder={i18n[locale].Otp}
                  value={otp}
                  onChangeText={setOtp}
                  style={styles.input}
                />
                <TextInput
                  placeholder={i18n[locale]["New Password"]}
                  value={pass}
                  onChangeText={setPass}
                  style={styles.input}
                />
              </>
            )}
          </View>

          <View style={styles.loginbtn}>
            {otpSent ? (
              <Pressable onPress={handleVerifyOtp} disabled={lod2}>
                <Text style={styles.loginbtnmsg}>{i18n[locale]["Verify Otp"]}</Text>
              </Pressable>
            ) : (
              <Pressable onPress={handleForgotPassword} disabled={lod1}>
                <Text style={styles.loginbtnmsg}>{i18n[locale]["Send Otp"]}</Text>
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
