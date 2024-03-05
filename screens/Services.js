import * as React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import Search from "../components/Search";
import ServiceCard from "../components/ServiceCard";

function Services() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.topbox}>
        <Search />
      </View>
      <View style={styles.cardholder}>
        <ServiceCard name="AC Repairing" cardImage={require("../assets/static/ac_repairing.png")} />
        <ServiceCard name="Lift Repairing" cardImage={require("../assets/static/lift_repairing.png")} />
        <ServiceCard name="Plumbing" cardImage={require("../assets/static/plumbing.png")} />
        <ServiceCard name="Carpentry" cardImage={require("../assets/static/carpentry.png")} />
        <ServiceCard name="Wall Works" cardImage={require("../assets/static/wall_works.png")} />
        <ServiceCard name="Painter" cardImage={require("../assets/static/painter.png")} />
        <ServiceCard name="All Services" cardImage={require("../assets/static/all_services.png")} />
      </View>
    </View>
  );
}

export default Services;

const styles = StyleSheet.create({
  topbox: {
    backgroundColor: "#00e9f1",
    paddingTop: 50,
    paddingBottom: 10,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  cardholder: {
    marginTop: 20,
    // width:'80%',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 20,
    flexWrap: "wrap",
  },
});
