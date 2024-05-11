import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Flatlist,
  Pressable,
  ScrollView,
} from "react-native";
import Search from "../components/Search";
import ServiceCard from "../components/ServiceCard";
import i18n from "../context/i18n";
import { useAuth } from "../context/AuthContext";
import details from "../context/details";
import expertise from "../context/expertise";

function Services({ navigation }) {
  const { locale } = useAuth();

  return (
    <View style={styles.wrapper}>
      <View style={styles.flexbox}>
        <View>
          <Text style={styles.usergreeting}>{i18n[locale].services}</Text>
          <Text>{i18n[locale].chooseYourService}</Text>
        </View>
        <View style={styles.innerflexbox}>
          <Pressable onPress={() => navigation.navigate("Profile")}>
            <Image
              source={require("../assets/static/20240221_000353_0007.png")}
              style={styles.userimg}
            />
          </Pressable>
          <Search
            place={i18n[locale].searchForServices}
            style={{ width: "100%" }}
          />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.cardholder}>
        <ServiceCard
          name={i18n[locale].acRepairing}
          cardImage={require("../assets/static/ac_repairing.png")}
        />
        <ServiceCard
          name={i18n[locale].liftRepairing}
          cardImage={require("../assets/static/lift_repairing.png")}
        />
        <ServiceCard
          name={i18n[locale].plumbing}
          cardImage={require("../assets/static/plumbing.png")}
        />
        <ServiceCard
          name={i18n[locale].carpentry}
          cardImage={require("../assets/static/carpentry.png")}
        />
        <ServiceCard
          name={i18n[locale].wallWorks}
          cardImage={require("../assets/static/wall_works.png")}
        />
        <ServiceCard
          name={i18n[locale].painter}
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
      </ScrollView>
    </View>
  );
}

export default Services;

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    backgroundColor: "white",
  },
  flexbox: {
    padding: 5,
    paddingStart: 10,
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
    width: 40,
    height: 40,
  },
  cardholder: {
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    flexWrap: "wrap",
  },
});
