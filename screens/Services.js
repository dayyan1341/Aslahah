import * as React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import Search from "../components/Search";
import ServiceCard from "../components/ServiceCard";

function Services() {
  return (
    <View style={styles.wrapperx}>
      {/* <View style={styles.topbox}> */}
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
            <Search style ={{width:'100%'}}/>
          </View>
        </View>
      {/* </View> */}
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
        <ServiceCard
          name="All Services"
          cardImage={require("../assets/static/all_services.png")}
        />
        <ServiceCard
          name="Become a technician"
          cardImage={require("../assets/static/all_services.png")}
        />
      </View>
    </View>
  );
}

export default Services;

const styles = StyleSheet.create({
  flexbox: {
    padding: 5,
    paddingTop: 35,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'flex-end',
  },
  innerflexbox:{
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-end',
    width: '60%',
  },
  usergreeting: {
    fontSize: 30,
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  userimg: {
    width: 50,
    height:50,
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
