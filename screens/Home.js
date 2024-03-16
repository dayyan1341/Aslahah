import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import Banner from "../components/Banner";
import ServicesShowcase from "../components/ServicesShowcase";
import ReviewCard from "../components/ReviewCard";
import Header from "../components/Header";
import BlinkerText from "../components/BilnkerText";

function Home() {
  return (
    <ScrollView>
        <Header />
        <Banner />
        <ServicesShowcase />
        <View style={styles.reviewbox}>
          <View style={styles.reviewboxhead}>
            <Text style={styles.reviewboxtext}>What our clients say</Text>
            <Image
              source={require("../assets/static/20240221_000353_0016.png")}
              style={styles.tripledot}
            />
          </View>
          <ScrollView
            style={styles.scroll}
            horizontal={true}
            fadingEdgeLength={10}
          >
            <View style={styles.cardholder}>
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </View>
          </ScrollView>
        </View>
        <Pressable
          android_ripple={{ color: "#eee", radius: 60 }}
          style={styles.btn}
          onPress={() => navigation.navigate("SelectLanguage")}
        >
          <BlinkerText style={styles.btnText}>Become a technician</BlinkerText>
        </Pressable>
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  reviewbox: {
    // padding: 20,
    margin: 20,
  },
  reviewboxtext: {
    fontWeight: "bold",
    fontSize: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  reviewboxhead: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tripledot: {
    height: 50,
    width: 50,
  },
  scroll: { margin: -20,  },
  cardholder: {
    display: "flex",
    flex: 0.5,
    flexDirection: "row",
    // justifyContent: "space-between",
    gap: 20,
    margin: 20,
  },
  btn: {
    marginTop: 10,
    marginBottom: 45,
    padding: 5,
    gap: 3,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    verticalAlign: "middle",
  },
  btnText: {
    color: "beige",
    textAlign: "center",
    fontSize: 25,
    marginLeft: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "black",
    width: "50%",
    borderRadius: 38,
  },
});
