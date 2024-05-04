import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  Pressable,
  View,
  Alert,
} from "react-native";
import React, { useContext, useState } from "react";
import * as SecureStore from "expo-secure-store";
import i18n from "../context/i18n";
import BlinkerText from "../components/BilnkerText";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default function Login({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [fieldEmpty, setFieldEmpty] = useState();
  const { signIn, locale } = useAuth(); 


  const handleLogin = () => {
    if (phoneNumber && password) reqLogin();
    else setFieldEmpty(true);
  };

  const reqLogin = async () => {
    try {
      const response = await axios.post(
        "https://server.aslahah.com/api/auth/login",
        {
          id: phoneNumber,
          password: password,
        }
      );
      console.log("User logged in successfully:", response.data.user);
      signIn(response.data.user.token);

      // navigation.navigate("Tabs");
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
          <Text style={styles.greetingmsg}>{i18n[locale].hi}</Text>
          <Text style={styles.greetingmsg}>{i18n[locale].welcomeToAslahah}</Text>
        </View>

        <View style={styles.loginForm}>
          <Text style={styles.detailinfo}>{i18n[locale].pleaseEnterDetails}</Text>
          <View style={styles.inputbox}>
            <TextInput
              style={styles.input}
              placeholder={i18n[locale].phoneNumber}
              onChangeText={setPhoneNumber}
              value={phoneNumber}
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.input}
              placeholder={i18n[locale].password}
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.miscbox}>
            <BlinkerText style={styles.miscboxmsg}>Remember Me</BlinkerText>
            <Pressable onPress={()=>{navigation.navigate("Forgot")}}>
            <Text style={styles.miscboxmsg}>Forgot Password?</Text>
            </Pressable>
            <BlinkerText style={styles.miscboxmsg}>{i18n[locale].rememberMe}</BlinkerText>
            <Text style={styles.miscboxmsg}>{i18n[locale].forgotPassword}</Text>
          </View>

          <View style={styles.loginbtn}>
            <Pressable onPress={handleLogin} android_ripple>
              <Text style={styles.loginbtnmsg}>{i18n[locale].loginButton}</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.signupbtn}>
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text>
          {i18n[locale].dontHaveAccount}
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>{i18n[locale].signUp}</Text>
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
    alignItems: "center", 
    backgroundColor: "#00e9f1",
  },

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
