import { StyleSheet, Text, View, Image, Dimensions, Pressable } from "react-native";
import React from "react";
import i18n from "../context/i18n";
import { useAuth } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const localeMap = {
  "AC Repairing": "acRepairing",
  "Lift Reapiring": "liftRepairing",
  Carpentry: "carpentry",
  Painter: "painter",
  "Wall Works": "wallWorks",
  Plumbing: "plumbing",
  
};

export default function CartItem(props) {
  const { locale } = useAuth();
  const navigation = useNavigation()
  const text = localeMap[props.name];
  const isCompleted = props.status.length >= 4;

  return (
    <Pressable style={styles.item} onPress={()=>navigation.navigate("Status",props)}>
      <View style={styles.itemimg}>
        <Image source={props.img} style={styles.img} />
      </View>
      <View style={styles.itemnamebox}>
        <Text style={styles.itemname}>{i18n[locale][props.name]}</Text>
      </View>
      <View style={styles.delete}>
        <Image
          source={isCompleted?require("../assets/static/tick.png"):require("../assets/static/loading.png")}
          style={styles.delimg}
        />
      </View>
    </Pressable>
  );
}

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  item: {
    position: "relative",
    backgroundColor: "#00e9f1",
    width: screen.width * 0.9,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 50,
    // backgroundColor:'red'
  },
  itemimg: {
    position: "absolute",
    left: 0,
    height: 50,
    overflow: "visible",
  },
  img: {
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: "#343341",
    width: 50,
    height: 50,
  },
  itemnamebox: {
    textAlign: "center",
    

  },
  itemname: {
    fontSize: 18,
    color: "#343341",
  },
  delete: {
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    // backgroundColor: "#343341",
    padding: 3,
    paddingLeft: 8,
    position: "absolute",
    right: 0,
  },
  delimg: {
    width: 40,
    height: 40,
  },
});
