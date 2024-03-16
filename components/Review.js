import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Review() {
  return (
    <View style={styles.review}>
      <Image
        source={require("../assets/static/profile_dark.png")}
        style={styles.userimg}
      />
      <Text style={styles.reviewtext}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        vitae.
      </Text>
      <Image
        source={require("../assets/static/20240228_031623_0013.png")}
        style={styles.commasimg}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    review:{
        width:'70%',
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        gap:5,
        padding:10,
        borderWidth:3,
        borderColor:'grey',
    },
    userimg:{
        height:40,
        width:40,
    },
    reviewtext:{
        width:"80%",
        height:40,
        fontStyle:'italic',
    },
    commasimg:{
        height:60,
        width:60,
        position:'absolute',
        bottom:-35,
        right:-25,
    }
});
