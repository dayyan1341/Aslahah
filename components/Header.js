import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import Search from "../components/Search";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import i18n from "../context/i18n";
import { useAuth } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

export default function Header(props) {
  const navigation = useNavigation()

  const pad = useSafeAreaInsets()
  const {locale} = useAuth()
  return (
    <View style={[styles.topbox,{paddingTop:pad.top+5}]}>
      <View style={styles.flexbox}>
        <View>
          <Text style={styles.usergreeting}>Hi, {props.name}</Text>
          <Text>{i18n[locale].letsFindServices}</Text>
        </View>
        <Pressable onPress={()=>navigation.navigate("Profile")}>
        <Image
          source={require("../assets/static/20240221_000353_0007.png")}
          style={styles.userimg}
        />
        </Pressable>
      </View>
      <View style={styles.searchbar}>
        <Search place={i18n[locale].searchForServices}  />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topbox: {
    backgroundColor: "#00e9f1",
    paddingBottom: 10,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  flexbox: {
    width: "95%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  usergreeting: {
    // width:'50%',
    // maxWidth:'50%',
    fontSize: 30,
    fontWeight: "bold",
    // borderBottomWidth: 2,
    // borderBottomColor: "black",
    // flexWrap:'wrap',
  },
  searchbar: {
    width: "70%",
    margin: 10,
    flexDirection: "row",
    alignSelf: "center",
  },
  userimg: {
    height: 70,
    width: 70,
  },
});
