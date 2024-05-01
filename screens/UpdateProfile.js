import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UpdateProfile({ navigation, route }) {
  const [name, setname] = useState(route.params.name);
  const [email, setemail] = useState(route.params.email);
  const [phone, setphone] = useState(route.params.phone);

  const [loading, setLoading] = useState(true);

  async function UpdateProf() {
    try {
      const token = await getAuthToken();
      if (token){
        const response = await axios.put(
          "https://server.aslahah.com/api/auth/profile",
          {
            name: name,
            email: email,
            mobileNumber: phone,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        console.log("Profile updated successfully:", response.data);
        navigation.navigate("Profile")
      }else {
        console.error("User not Logged in");
        Alert.alert("User not Logged in");
        navigation.navigate("Login");
      }
    } catch (error) {
      console.error("Failed to update:", error);
      Alert.alert("Failed to update", error.message);
    }
  }
  return (
    <View style={styles.wrapper}>
      <View style={styles.bellandback}>
        <Pressable onPress={() => navigation.pop()}>
          <Image
            source={require("../assets/static/20240228_031624_0025.png")}
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
          <Text>{name}</Text>
        </View>
        <View style={styles.box}>
          <View style={styles.infobox}>
            <Text style={styles.infohead}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              onChangeText={setname}
              value={name}
            />
            <Text style={styles.infohead}>E-Mail</Text>
            <TextInput
              style={styles.input}
              placeholder="email"
              onChangeText={setemail}
              value={email}
            />
            <Text style={styles.infohead}>Phone</Text>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              onChangeText={setphone}
              value={phone}
              keyboardType="phone-pad"
            />
          </View>
          <Pressable onPress={UpdateProf} style={styles.rightbox}>
            <Text style={styles.submitbtn}>Submit</Text>
          </Pressable>
          <View style={styles.blurbox}>
            <Text style={styles.headings}>Security</Text>
            <View style={styles.security}>
              <Pressable style={styles.linkbox}>
                <Text>Change Password</Text>
                <Image
                  source={require("../assets/static/20240228_031624_0026.png")}
                  style={styles.followpic}
                />
              </Pressable>
              <Pressable style={styles.linkbox}>
                <Text>Change mobile number</Text>
                <Image
                  source={require("../assets/static/20240228_031624_0026.png")}
                  style={styles.followpic}
                />
              </Pressable>
            </View>
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
    width: 90,
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
  blurbox:{
    zIndex:10,
    opacity:0.2,
  },
});
