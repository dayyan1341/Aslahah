// import { StackScreenProps } from "@react-navigation/native";

import * as React from "react";
import {
  Pressable,
  StyleSheet,
  Image,
  Text, View, Button,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import BlinkerText from "../components/BilnkerText";


export default function Welcome( {navigation} ) {
  
  const { height, width } = useWindowDimensions();

  return (
    <View style={styles.container}>
        <Image
          source={require("../assets/static/gola.png")}
          style={styles.gola}
        />
        <Image
          source={require("../assets/static/bulb.png")}
          style={styles.bulb}
        />
        <View style={[styles.bottom,{width:width*0.9}]}>
            <BlinkerText style={styles.heroText}>Book Your technician</BlinkerText>
            <BlinkerText style={styles.heroText}>shortly at doorstep</BlinkerText>
            <View style={styles.separator}/>

            <Pressable 
            android_ripple={{color:'#eee', radius:60 }}
            style={styles.btn}
            onPress={() => navigation.navigate('SelectLanguage') }
            >
            <BlinkerText style={styles.btnText}>GET STARTED</BlinkerText>
            <Image 
                source={require("../assets/static/btn_arrow.png")}
                style={{height:38,width:38,alignSelf:'center'}}    
            />
            </Pressable>
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position:'relative',
    backgroundColor:'#00e9f1',
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  gola:{
    position:'absolute',
    top:0,
    right:0,
    height: 350, 
    width: 350,
    alignSelf: "flex-end"
  },
  bulb:{
    // position:'absolute',
    left:-5,
    height: 300,
    // width: 200, 
    aspectRatio:1,
    marginBottom:0,
    alignSelf: "flex-start",
    shadowColor:'black',
    shadowOpacity:1,

  },
  bottom:{
    justifyContent:'flex-start',
    alignItems:'flex-start',
    // backgroundColor:"black",
    // opacity:0.1
    width:'100'
  },
  heroText:{
    fontSize : 38,
    // fontWeight:'bold',
    // marginBottom:5,  
    marginHorizontal:10,
    alignSelf:'flex-start',
    
  },
  separator: {
    marginVertical: 10,
    height: 3,
    width: '100%',
    backgroundColor:'black',
    borderRadius:10 ,
    opacity:1, 
    alignSelf:'center'
  },
  btn: {
    marginTop: 10,
    marginBottom: 45,
    // marginStart: 40,
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    // width:200,
    borderRadius:50,
    backgroundColor:"white",
    flexDirection:"row",
    justifyContent:'flex-start',    
    alignItems:'flex-start',
  },
  btnText:{
    color: "black", 
    marginVertical:10,
    marginHorizontal:14,
    fontSize:30,
    alignSelf:'center',
    paddingHorizontal:5  
  },

});
