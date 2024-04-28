import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts,  Blinker_700Bold,Blinker_800ExtraBold,Blinker_100Thin,Blinker_400Regular,} from "@expo-google-fonts/blinker";

export default function BlinkerText(props) {
  let [fontsLoaded, fontError] = useFonts({
    Blinker_100Thin,
    Blinker_400Regular,
    Blinker_700Bold,
    Blinker_800ExtraBold,
  });

  if (!fontsLoaded && !fontError) {
    return <Text {...props} style={props.style}/>;
  }

  switch (props.wazan) {
    case 100:
      return (<Text {...props} style={[props.style, { fontFamily: "Blinker_100Thin" }]} />);
    case 700:
      return (<Text {...props} style={[props.style, { fontFamily: "Blinker_700Bold" }]} />);
    case 800:
      return (<Text {...props} style={[props.style, { fontFamily: "Blinker_800ExtraBold" }]} />)
    default:
      return (<Text {...props} style={[props.style, { fontFamily: "Blinker_400Regular" }]} />)
  }
 
}
