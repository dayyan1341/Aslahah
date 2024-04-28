import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Coupons() {
  return (
    <View style={styles.wrapper}>
      <Text>You don't have any Coupons right now</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
      },
})