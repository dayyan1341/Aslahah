import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";

export default function ServiceCard(props) {
  return (
    <View style={styles.ServiceCard}>
      <View style={styles.ServiceCardHead}>
        <Text style={styles.ServiceCardText}>{props.name}</Text>
        <Image
          source={require("../assets/static/20240228_031623_0002.png")}
          style={styles.arrow}
        />
      </View>
      <ImageBackground
        source={require("../assets/static/20240228_031623_0003.png")}
        resizeMode="cover"
        style={styles.bgimg}
      >
        <Image
          source={props.cardImage}
          style={styles.cardimg}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  ServiceCard: {
    width: "40%",
    backgroundColor: "#00e9f1",
    borderRadius: 20,
    overflow: "hidden",
  },
  ServiceCardHead: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  arrow: {
    width: 30,
    height: 30,
  },
  cardimg: {
    width: "100%",
    height: 100,
    aspectRatio: 1,
    alignSelf: "center",
  },
});
