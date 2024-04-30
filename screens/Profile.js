import { Image, Pressable, StyleSheet, Text, View,ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Profile({navigation}) {

  const [name, setname] = useState([]);
  const [email, setemail] = useState([]);
  const [phone, setphone] = useState([]);
  const [username, setusername] = useState([]);
  const [gender, setgender] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProf();
  }, []);


  async function getProf(){
    try {
      const response = await axios.get(
        "https://server.aslahah.com/api/auth/profile",
        
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmUzNTViZWExM2Q0MTEzZjBmNTI5OCIsIm1vYmlsZU51bWJlciI6IjYzOTY0MTY1NTciLCJlbWFpbCI6ImF6aGFua2FtaWwwQGdtYWlsLmNvbSIsImlhdCI6MTcxNDQ3Mjc1OCwiZXhwIjoxNzE5NjU2NzU4fQ.J6ofgZBCrVi7S6y3TaGCRQdxjvYgkh_5dTw5TPRpdjI",
          },
        }
      );
      console.log("Booking created successfully:", response.data);
      setname(response.data.user.name);
      setemail(response.data.user.email);
      setphone(response.data.user.mobileNumber);
      // navigation.navigate("Tabs");
    } catch (error) {
      console.error("Failed to book in:", error);
      Alert.alert("Failed to book in", error.message);
    }
  }
  return (
    <View style={styles.wrapper}>
      <View style={styles.bellandback}>
        <Pressable>
          <Image
            source={require("../assets/static/20240228_031624_0025.png")}
            style={styles.btnimg}
          />
        </Pressable>
        <Pressable>
          <Image
            source={require("../assets/static/20240228_031624_0024.png")}
            style={styles.btnimg}
          />
        </Pressable>
      </View>
      <ScrollView>

      <View style={styles.profbox}>
        <Text style={styles.headings}>Profile</Text>
        <Image
          source={require("../assets/static/20240221_000353_0007.png")}
          style={styles.profpic}
        />
        <Text>{name}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.headings}>Personal Information</Text>
        <View style={styles.infobox}>
          <Text style={styles.infohead}>Name</Text>
          <Text style={styles.info}>{name}</Text>
          <Text style={styles.infohead}>E-Mail</Text>
          <Text style={styles.info}>{email}</Text>
          <Text style={styles.infohead}>Phone</Text>
          <Text style={styles.info}>{phone}</Text>
        </View>
        <Pressable onPress={()=> {navigation.navigate("updateprof",{
          name, email,phone
        })}} style={styles.rightbox}>
          <Text style={styles.editprofbtn}>Edit Profile</Text>
          <Image
            source={require("../assets/static/20240228_031624_0026.png")}
            style={styles.followpic}
          />
        </Pressable>
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
  bellandback: {
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
  editprofbtn: {
    fontWeight: "bold",
    color: "#221410",
  },
  infobox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: 20,
    gap: 10,
  },
  info: {
    width: "45%",
    // margin:10,
  },
  infohead: {
    width: "45%",
  },
});
