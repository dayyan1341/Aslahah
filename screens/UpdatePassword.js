import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function UpdatePassword({ navigation, route }) {
  const ins = useSafeAreaInsets();
  const [oldPass, setOldpass] = useState("");
  const [pass, setPass] = useState("");
  const { getToken } = useAuth();

  async function UpdatePassword() {
    try {
      const token = getToken();
      console.log(oldPass);
      console.log(pass);

      const response = await axios.put(
        "https://server.aslahah.com/api/auth/password",
        {
          oldPassword: oldPass,
          newPassword: pass,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Password updated successfully:", response.data);
      Alert.alert("", "Passwords updated Successfully");
      navigation.navigate("Profile");
    } catch (error) {
      console.error("Failed to update password", error);
      Alert.alert(
        "Failed to update password",
        "Something went wrong \nDouble check your password"
      );
    }
  }
  return (
    <View style={[styles.wrapper,{paddingTop:ins.top}]}>
      <View style={styles.bellandback}>
        <Pressable onPress={() => navigation.pop()}>
          <Image
            source={require("../assets/static/back_left.png")}
            style={styles.btnimg}
          />
        </Pressable>
      </View>
      <ScrollView>
        <View style={styles.profbox}>
          <Text style={styles.headings}>Update Profile</Text>
          <Image
            source={require("../assets/static/20240221_000353_0007.png")}
            style={styles.profpic}
          />
          <Text>{route.params.name}</Text>
        </View>
        <View style={styles.box}>
          <View style={styles.infobox}>
            <Text>Current Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Old Password"
              onChangeText={setOldpass}
              value={oldPass}
            />
            <Text>New Password</Text>
            <TextInput
              style={styles.input}
              placeholder="New Password"
              onChangeText={setPass}
              value={pass}
            />
            <Text>
              New Password must contain at least one uppercase letter, one
              lowercase letter, one number and one special character
            </Text>
          </View>
          <Pressable onPress={UpdatePassword} style={styles.rightbox}>
            <Text style={styles.submitbtn}>Change Password</Text>
          </Pressable>
          <View style={styles.blurbox}>
            <Text style={styles.headings}>Security</Text>
            <Pressable style={styles.linkbox}>
              <Text style={styles.headings}>About Us</Text>
              <Image
                source={require("../assets/static/20240228_031624_0028.png")}
                style={styles.followpic}
              />
            </Pressable>
            <Pressable style={styles.linkbox}>
              <Text style={styles.headings}>FAQs</Text>
              <Image
                source={require("../assets/static/20240228_031624_0027.png")}
                style={styles.followpic}
              />
            </Pressable>
            <Pressable style={styles.linkbox}>
              <Text style={styles.signoutbtn}>Sign Out</Text>
            </Pressable>
            <Pressable style={styles.rightbox}>
              <Text style={styles.contactbtn}>Contact Us</Text>
              <Image
                source={require("../assets/static/20240228_031624_0029.png")}
                style={styles.followpiccontact}
              />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#00e9f1",
    width: "100%",
    height: "100%",
  },
  headings: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#221410",
  },
  input: {
    borderWidth: 3,
    borderRadius: 5,
    padding: 5,
    borderBottomColor: "#333341",
    marginBottom: 20,
    fontSize: 15,
    color: "#333341",
  },
  btnimg: {
    height: 60,
    width: 60,
  },
  profbox: {
    display: "flex",
    alignItems: "center",
  },
  profpic: {
    height: 80,
    width: 80,
  },
  followpic: {
    height: 30,
    width: 30,
  },
  followpiccontact: {
    height: 60,
    width: 50,
  },
  linkbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    marginLeft: 0,
  },
  rightbox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  box: {
    backgroundColor: "white",
    padding: 20,
    marginTop: 15,
    borderRadius: 50,
  },
  security: {
    paddingLeft: 20,
  },
  signoutbtn: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    padding: 10,
    backgroundColor: "black",
    width: 90,
    borderRadius: 38,
  },
  contactbtn: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "black",
    width: 120,
    borderRadius: 38,
  },
  submitbtn: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    padding: 10,
    backgroundColor: "limegreen",
    width: 150,
    borderRadius: 38,
  },
  infobox: {
    padding: 20,
    gap: 5,
  },
  info: {
    width: "45%",
  },
  infohead: {
    width: "45%",
  },
  blurbox: {
    zIndex: 10,
    opacity: 0.2,
  },
});
