import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'

export default function Notifications({navigation}) {
  return (
    <>
      <View style={styles.bellandback}>
        <Pressable onPress={()=>navigation.pop()}>
          <Image
            source={require("../assets/static/20240228_031624_0025.png")}
            style={styles.btnimg}
          />
        </Pressable>
      </View>
    <View style={styles.wrapper}>
      <Text>No new notification</Text>
    </View>
    </>
  )
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
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
})