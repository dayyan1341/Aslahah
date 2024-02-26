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
        <View style={[styles.bottom,{width}]}>
            <Text style={styles.heroText}>Book Your technician shortly at doorstep</Text>
            <View style={styles.separator}/>

            <Pressable 
            android_ripple={{color:'#eee', radius:60 }}
            style={styles.btn}
            onPress={() => navigation.navigate('Login') }
            >
            <Text style={styles.btnText}>GET STARTED</Text>
            <Image 
                source={require("../assets/static/btn_arrow.png")}
                style={{height:28,width:28,alignSelf:'center'}}    
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
    left:30,
    height: 200,
    width: 200, 
    marginBottom:40,
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
    fontSize : 30,
    fontWeight:'bold',
    marginBottom:5,  
    alignSelf:'center',
    opacity:0.7,
    // marginEnd:50,
  },
  separator: {
    // marginVertical: 30,
    height: 3,
    width: '80%',
    backgroundColor:'black',
    borderRadius:10 ,
    opacity:1,
    
    alignSelf:'center'
  },
  btn: {
    marginTop: 15,
    marginBottom: 45,
    marginStart: 40,
    paddingVertical: 10,
    width:200,
    borderRadius:50,
    backgroundColor:"white",
    flexDirection:"row",
    textAlign:"center",
    justifyContent:'center',    
  },
  btnText:{
    color: "black", 
    textAlign: "center" ,
    fontWeight:'bold',
    fontSize:20,
    paddingHorizontal:5  
  },

});
