import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Review from "../components/Review";

export default function ServiceDesc({ navigation }) {
  const ins = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        { paddingTop: ins.top },
      ]}
    >
      <View style={styles.x}>
          <Image
            source={require("../assets/static/20240228_031623_0014.png")}
            style={styles.bannerimg}
          />
        <Pressable onPress={() => navigation.pop()}>
          <Image
            source={require("../assets/static/20240228_031623_0015.png")}
            style={styles.backbtn}
          />
        </Pressable>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.box}>
          <Text style={styles.headings}>AC Repairing Services</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, optio
            quis. Reprehenderit fugit ducimus porro fuga, fugiat autem alias,
            assumenda ex ut impedit facere placeat provident a animi ipsam
            eveniet maiores esse nihil non at vitae. Itaque, ad ullam,
            voluptates, aliquam hic mollitia repudiandae rem natus perspiciatis
            id quam.
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.headings}>Our Expertise:</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, optio
            quis. Reprehenderit fugit ducimus porro fuga, fugiat autem alias,
            assumenda ex ut impedit facere placeat provident a animi ipsam
            eveniet maiores esse nihil non at vitae. Itaque, ad ullam,
            voluptates, aliquam hic mollitia repudiandae rem natus perspiciatis
            id quam.
          </Text>
        </View>
        <View style={styles.box}>
          <View style={styles.ratingbox}>
            <Text style={styles.headings}>Ratings & Reviews</Text>
            <View style={styles.starbox}>
              <Image
                source={require("../assets/static/20240228_031623_0012.png")}
                style={styles.iconimg}
              />
              <Image
                source={require("../assets/static/20240228_031623_0012.png")}
                style={styles.iconimg}
              />
              <Image
                source={require("../assets/static/20240228_031623_0012.png")}
                style={styles.iconimg}
              />
              <Image
                source={require("../assets/static/20240228_031623_0012.png")}
                style={styles.iconimg}
              />
              <Image
                source={require("../assets/static/20240228_031623_0012.png")}
                style={styles.iconimg}
              />
            </View>
          </View>
          <Review />
        </View>
        <Pressable>
          <View style={styles.rightbox}>
            <Text>See all reviews</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.rightbox}
          onPress={() => navigation.navigate("Form")}
        >
          <Text style={styles.contactbtn}>Book Now</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  x:{
    position:'relative',
  },
  backbtn: {
    width: 40,
    height: 40,
    // zIndex: 10 ,
    position: "absolute",
    top: -210,
    left: 0,
  },

  wrapper: {
    width: "90%",
    alignSelf: "center",
  },
  bannerimg: {
    width: "100%",
    height: 200,
    marginBottom: 15,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  box: {
    marginBottom: 20,
  },
  headings: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    textAlign: "justify",
  },
  iconimg: {
    width: 20,
    height: 20,
  },
  ratingbox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  starbox: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
  },
  rightbox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  contactbtn: {
    marginTop: 20,
    color: "white",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    padding: 10,
    backgroundColor: "black",
    width: 120,
    borderRadius: 30,
  },
});
