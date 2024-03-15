import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ServiceForm({navigation}) {
  console.log('Height on: ', Platform.OS, StatusBar.currentHeight);
  const ins = useSafeAreaInsets()
  return (
    <View style={[styles.container ,{paddingTop:ins.top}]}>
      <View>
        <Text>Service Type</Text>
        <TextInput/>
      </View>
      <View>
        <Text>Address</Text>
        <TextInput/>
      </View>
      <View>
        <Text>Contact Number</Text>
        <TextInput/>
      </View>
      <View>
        <Text>Schedule Date & Time</Text>
        <View>
          <Text>Choose preferred date</Text>
          <Text>Choose preferred time</Text>
        </View>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: StatusBar.currentHeight,
    }
})