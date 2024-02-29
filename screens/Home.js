import * as React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import Search from "../components/Search";
import Banner from "../components/Banner";
import ServicesShowcase from "../components/ServicesShowcase";
import ReviewCard from "../components/ReviewCard";

function Home() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.topbox}>
        <View style={styles.flexbox}>
          <View>
            <Text style={styles.usergreeting}>Hi, User</Text>
            <Text>Let's find your</Text>
            <Text>desired services</Text>
          </View>
          <Image
            source={require("../assets/static/20240221_000353_0007.png")}
            style={styles.userimg}
          />
        </View>
        <Search />
      </View>
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
        <View style={styles.cardholder}>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </View>
      </View>
      <Button title="Become a Technician"></Button>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  topbox: {
    backgroundColor: "#00e9f1",
    paddingTop: 50,
    paddingBottom: 10,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  flexbox: {
    width: "95%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  usergreeting: {
    fontSize: 30,
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  userimg: {
    aspectRatio: 1,
    width: 70,
  },
  reviewbox: {
    padding: 20,
  },
  reviewboxtext: {
    fontWeight: "bold",
    fontSize: 20,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  reviewboxhead: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tripledot: {
    height: 50,
    width: 50,
  },
  cardholder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
});
