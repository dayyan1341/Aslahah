import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import i18n from "../context/i18n";

export default function Profile({ navigation }) {
  const [name, setname] = useState([]);
  const [email, setemail] = useState([]);
  const [phone, setphone] = useState([]);

  const { signOut, getToken,locale } = useAuth();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getProf();
    });

    return unsubscribe;
  }, []);

  async function getProf() {
    try {
      const token = getToken();

      const response = await axios.get(
        "https://server.aslahah.com/api/auth/profile",

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("User Details:", response.data);
      setname(response.data.user.name);
      setemail(response.data.user.email);
      setphone(response.data.user.mobileNumber);
    } catch (error) {
      console.error("Something went wrong while fetching profile", error);
      Alert.alert("Something went wrong while fetching profile");
    }
  }
  return (
    <View style={styles.wrapper}>
      <View style={styles.bellandback}>
        <Pressable>
          {/* <Image
            source={require("../assets/static/back_left.png")}
            style={styles.btnimg}
          /> */}
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Notifications")}>
          <Image
            source={require("../assets/static/20240228_031624_0024.png")}
            style={styles.btnimg}
          />
        </Pressable>
      </View>
      <ScrollView>
        <View style={styles.profbox}>
          <Text style={styles.headings}>{i18n[locale].profile}</Text>
          <Image
            source={require("../assets/static/20240221_000353_0007.png")}
            style={styles.profpic}
          />
          <Text>{name}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.headings}>{i18n[locale].personalInformation}</Text>
          <View style={styles.infobox}>
            <Text style={styles.infohead}>{i18n[locale].name}</Text>
            <Text style={styles.info}>{name}</Text>
            <Text style={styles.infohead}>{i18n[locale].email}</Text>
            <Text style={styles.info}>{email}</Text>
            <Text style={styles.infohead}>{i18n[locale].phone}</Text>
            <Text style={styles.info}>{phone}</Text>
          </View>
          <Pressable
            onPress={() => {
              navigation.navigate("updateprof", {
                name,
                email,
                phone,
              });
            }}
            style={styles.rightbox}
          >
            <Text style={styles.editprofbtn}>{i18n[locale].editProfile}</Text>
            <Image
              source={require("../assets/static/20240228_031624_0026.png")}
              style={styles.followpic}
            />
          </Pressable>
          <Text style={styles.headings}>{i18n[locale].security}</Text>
          <View style={styles.security}>
            <Pressable
              onPress={() => {
                navigation.navigate("UpdatePass", {
                  name,
                });
              }}
              style={styles.linkbox}
            >
              <Text>{i18n[locale].changePassword}</Text>
              <Image
                source={require("../assets/static/20240228_031624_0026.png")}
                style={styles.followpic}
              />
            </Pressable>
            {/* <Pressable style={styles.linkbox}>
              <Text>{i18n[locale].changeMobileNumber}</Text>
              <Image
                source={require("../assets/static/20240228_031624_0026.png")}
                style={styles.followpic}
              />
            </Pressable> */}
          </View>
          <Pressable style={styles.linkbox}>
            <Text style={styles.headings}>{i18n[locale].aboutUs}</Text>
            <Image
              source={require("../assets/static/20240228_031624_0028.png")}
              style={styles.followpic}
            />
          </Pressable>
          <Pressable style={styles.linkbox}>
            <Text style={styles.headings}>{i18n[locale].faqs}</Text>
            <Image
              source={require("../assets/static/20240228_031624_0027.png")}
              style={styles.followpic}
            />
          </Pressable>
          <Pressable style={styles.linkbox} onPress={signOut}>
            <Text style={styles.signoutbtn}>{i18n[locale].signOut}</Text>
          </Pressable>
          <Pressable style={styles.rightbox}>
            <Text style={styles.contactbtn}>{i18n[locale].contactUs}</Text>
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
