import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Search from "../components/Search";

export default function Header() {
  return (
    <View style={styles.topbox}>
      <View style={styles.flexbox}>
        <View>
          <Text style={styles.usergreeting}>Hi, User</Text>
          <Text>Let's find your</Text>
          <Text>desired services</Text>
        </View>
        <Image
          source={require("../assets/static/20240221_000353_0007.png")}
          style={styles.userimg}
        />
      </View>
      <View style={styles.searchbar}>
        <Search />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topbox: {
    backgroundColor: "#00e9f1",
    paddingTop: 50,
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
    fontSize: 30,
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  searchbar: {
    width: "70%",
    margin: 10,
    flexDirection: "row",
    alignSelf: "center",
  },
  userimg: {
    aspectRatio: 1,
    width: 70,
  },
});
