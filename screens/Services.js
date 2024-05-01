import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Flatlist,
} from "react-native";
import Search from "../components/Search";
import ServiceCard from "../components/ServiceCard";

function Services() {
  // const servicesData = [
  //   { name: "AC repairing", img: "../assets/static/ac_repairing.png" },
  //   { name: "Lift repairing", img: "../assets/static/lift_repairing.png" },
  //   { name: "Plumbing", img: "../assets/static/plumbing.png" },
  //   { name: "Carpentry", img: "../assets/static/carpentry.png" },
  //   { name: "Wall Works", img: "../assets/static/wall_works.png" },
  //   { name: "Painter", img: "../assets/static/painter.png" },
  //   { name: "All Services", img: "../assets/static/all_services.png" },
  //   { name: "Become a technician", img: "../assets/static/all_services.png" },
  // ];
  return (
    <View style={styles.wrapper}>
      <View style={styles.flexbox}>
        <View>
          <Text style={styles.usergreeting}>Hi, User</Text>
          <Text>Choose your service</Text>
        </View>
        <View style={styles.innerflexbox}>
          <Image
            source={require("../assets/static/20240221_000353_0007.png")}
            style={styles.userimg}
          />
          <Search style={{ width: "100%" }} />
        </View>
      </View>
      <View style={styles.cardholder}>

        <ServiceCard
          name="AC Repairing"
          cardImage={require("../assets/static/ac_repairing.png")}
        />
        <ServiceCard
          name="Lift Repairing"
          cardImage={require("../assets/static/lift_repairing.png")}
        />
        <ServiceCard
          name="Plumbing"
          cardImage={require("../assets/static/plumbing.png")}
        />
        <ServiceCard
          name="Carpentry"
          cardImage={require("../assets/static/carpentry.png")}
        />
        <ServiceCard
          name="Wall Works"
          cardImage={require("../assets/static/wall_works.png")}
        />
        <ServiceCard
          name="Painter"
          cardImage={require("../assets/static/painter.png")}
        />
        {/* <ServiceCard
          name="All Services"
          cardImage={require("../assets/static/all_services.png")}
        /> */}
        {/* <ServiceCard
          name="Become a technician"
          cardImage={require("../assets/static/all_services.png")}
        /> */}
      </View>
    </View>
  );
}

export default Services;

const styles = StyleSheet.create({
  wrapper: {
    height:'100%',
    backgroundColor: "white",
  },
  flexbox: {
    padding: 5,
    paddingTop: 35,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  innerflexbox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    width: "60%",
  },
  usergreeting: {
    fontSize: 30,
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  userimg: {
    width: 50,
    height: 50,
  },
  cardholder: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    flexWrap: "wrap",
  },
});
