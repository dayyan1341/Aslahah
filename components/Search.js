import { StyleSheet, TextInput, View, Image } from "react-native";
import React from "react";

export default function Search() {
  const [text, onChangeText] = React.useState("Search for services here");
  return (
    <View style={styles.searchbar}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Image
        source={require("../assets/static/20240221_000353_0008.png")}
        style={styles.searchimg}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchbar: {
    height: 40,
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 40,
  },
  input: {
    marginLeft: 10,
    width: "70%",
  },
  searchimg: {
    width: 60,
    aspectRatio: 1,
  },
});
