import { StyleSheet, TextInput, View, Image, Pressable } from "react-native";
import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

export default function Search(props) {
  const [text, onChangeText] = React.useState('');
  const navigation = useNavigation()

  return (
    <View style={styles.searchbar}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={props.placeholder}
      />
      <Pressable onPress={()=> navigation.navigate("Search",{searchParam:text,placeholder:props.placeholder})}>
      <Image
        source={require("../assets/static/20240221_000353_0008.png")}
        style={styles.searchimg}
      />
      </Pressable>
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
    borderColor:'#343341',
    borderWidth:1,
  },
  input: {
    marginLeft: 10,
    width: "70%",
  },
  searchimg: {
    width: 60,
    height:60,
  },
});
