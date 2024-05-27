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

function Services({ navigation }) {
  const { locale, getName } = useAuth();

  React.useEffect(
    () => console.log(getName())
  )

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
          locale = {locale}
          name={"acRepairing"}
          cardImage={require("../assets/static/ac_repairing.png")}
        />
        <ServiceCard
          locale = {locale}
          name={"liftRepairing"}
          cardImage={require("../assets/static/lift_repairing.png")}
        />
        <ServiceCard
          locale = {locale}
          name={"carpentry"}
          cardImage={require("../assets/static/plumbing.png")}
        />
        <ServiceCard
          locale = {locale}
          name={"plumbing"}
          cardImage={require("../assets/static/carpentry.png")}
        />
        <ServiceCard
          locale = {locale}
          name={"wallWorks"}
          cardImage={require("../assets/static/wall_works.png")}
        />
        <ServiceCard
          locale = {locale}
          name={"painter"}
          cardImage={require("../assets/static/painter.png")}
        />
        <ServiceCard
          locale = {locale}
          name="packersAndDroppers"
          cardImage={require("../assets/static/all_services.png")}
        />
        <ServiceCard
          locale = {locale}
          name="electrician"
          cardImage={require("../assets/static/electrician.png")}
        />
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
    // marginBottom: 20,
    paddingBottom:20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    flexWrap: "wrap",
  },
});
