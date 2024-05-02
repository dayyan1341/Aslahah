import React, { useContext } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext'; 
export default function SelectLanguage() {
  const navigation = useNavigation();
  const { setLocale } = useAuth(); 

  const handleLocaleSelection = (locale) => {
    setLocale(locale);
    navigation.navigate('Login'); 
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../assets/static/logo1.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.box}>
        <Text style={{ fontSize: 25, fontWeight: "bold", opacity: 1 }}>
          Select your language
        </Text>
      </View>

      <Pressable
        android_ripple={{ color: "#eee", radius: 80 }}
        style={styles.btn}
        onPress={() => navigation.navigate('Login') } 
      >
        <Text style={styles.btnText}>Device (auto detect)</Text>
      </Pressable>
      <Pressable
        android_ripple={{ color: "#eee", radius: 60 }}
        style={styles.btn}
        onPress={() => handleLocaleSelection('en')} 
      >
        <Text style={styles.btnText}>English</Text>
      </Pressable>
      <Pressable
        android_ripple={{ color: "#eee", radius: 60 }}
        style={styles.btn}
        onPress={() => handleLocaleSelection('ar')}
      >
        <Text style={styles.btnText}>Arabic</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#00e9f1",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo:{
    width:200,
    height:200,
    borderRadius:100,
  },
  box: {
    marginTop: 60,
    marginBottom: 30,
    paddingVertical: 20,
    width: "80%",
    borderRadius: 20,
    backgroundColor: "antiquewhite",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    opacity: 0.7,
  },
  btn: {
    marginTop: 10,
    marginBottom: 20,
    paddingVertical: 10,
    width: "70%",
    borderRadius: 20,
    backgroundColor: "black",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },

  btnText: {
    color: "antiquewhite",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    paddingHorizontal: 5,
  },
});
