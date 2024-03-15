import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ServiceDesc({navigation}) {
  return (
    <View>
      <Text>ServiceDesc</Text>
    <Pressable onPress={()=> navigation.navigate("Form")}>
        <Text>Book Now</Text>
    </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({})