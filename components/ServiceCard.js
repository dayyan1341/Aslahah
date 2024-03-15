import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

function ServiceCard(props) {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate("Description")}
      style={styles.ServiceCard}
    >
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
        <Image source={props.cardImage} style={styles.cardimg} />
      </ImageBackground>
    </Pressable>
  );
}

export default ServiceCard

const styles = StyleSheet.create({
  ServiceCard: {
    paddingTop: 10,
    width: "45%",
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
