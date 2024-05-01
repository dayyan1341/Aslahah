import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { map } from "../assets/repair_images";

export default function CartItem(props) {
  // console.log(map.ac)
  return (
    <View style={styles.item}>
      <View style={styles.itemimg}>
        <Image source={props.img} style={styles.img} />
      </View>
      <View style={styles.itemnamebox}>
        <Text style={styles.itemname}>{props.name}</Text>
      </View>
      <View style={styles.delete}>
        {/* <Image
          source={require("../assets/static/delete.png")}
          style={styles.delimg}
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#00e9f1",
    width: "90%",
    height: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    alignSelf: "center",
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 50,
  },
  itemimg: {
    height: 40,
    overflow: "visible",
  },
  img: {
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: "#343341",
    width: 50,
    height: 40,
  },
  itemnamebox: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  itemname: {
    width: 150,
    fontSize: 15,
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
  },
  delimg: {
    width: 17,
    height: 17,
  },
});
