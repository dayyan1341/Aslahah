import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  ImageBackground,
} from "react-native";
import React from "react";

export default function ReviewCard(props) {
  const { height, width } = useWindowDimensions();

  return (
    <View style={[styles.ReviewCard, { width: width / 1.5 }]}>
      <ImageBackground
        source={require("../assets/static/stars.png")}
        // width={20}
        // height={20}
        resizeMode={"repeat"}
        style={styles.reviewBox}
      >
        {/* <View style={styles.reviewBox}> */}
        <Image
          source={require("../assets/static/20240221_000353_0015.png")}
          style={styles.img}
        />
        <Text style={styles.review}>
          {props.text}
        </Text>
        {/* </View> */}
      </ImageBackground>
      <View style={styles.reviewerBox}>
        <View style={styles.reviewer}>
          <Image
            source={require("../assets/static/profile.png")}
            style={styles.profpic}
          />
          <Text style={styles.name}>{props.reviwer}</Text>
        </View>

        <View style={styles.reviewer}>
          <Image
            source={require("../assets/static/20240221_000353_0019.png")}
            style={styles.star}
          />
          <Text style={styles.name}>4.4</Text>
        </View>
      </View>
    </View>
  );
}
const topRad = 30;
const bottomRad = 15;

const styles = StyleSheet.create({
  ReviewCard: {
    display: "flex",
    // flexShrink: 0.5,
    // width: "80%",
    backgroundColor: "#343341",
    // borderRadius: rad,
    borderTopStartRadius:topRad,
    borderTopEndRadius:topRad,
    borderBottomStartRadius:bottomRad,
    borderBottomEndRadius:bottomRad,
  },
  reviewBox: {
    borderTopStartRadius:topRad,
    borderTopEndRadius:topRad,
    borderBottomStartRadius:22,
    borderBottomEndRadius:22,
    padding: 18,
    paddingTop:5,
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#00e9f1",
  },
  img: {
    width: 50,
    height: 50,
  },
  review: {
    height: 80,
    // overflow:'scroll',
    textAlign: "justify",
    marginTop:10,
  },
  reviewerBox: {
    padding: 8,
    paddingBottom: 10,
    // paddingHorizontal:10,
    borderBottomEndRadius: bottomRad,
    borderBottomStartRadius: bottomRad,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingRight: 20,
  },
  reviewer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  profpic: {
    width: 30,
    height: 30,
  },
  star: {
    width: 20,
    height: 20,
  },
  name: {
    color: "white",
  },
});
