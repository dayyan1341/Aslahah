import * as React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import Banner from "../components/Banner";
import ServicesShowcase from "../components/ServicesShowcase";
import ReviewCard from "../components/ReviewCard";
import Header from "../components/Header";

function Home() {
  return (
    <View style={styles.wrapper}>
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
  reviewbox: {
    padding: 20,
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
  cardholder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
});
