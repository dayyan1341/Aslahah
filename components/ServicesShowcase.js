import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import i18n from "../context/i18n";
import { useAuth } from "../context/AuthContext";

export default function ServicesShowcase() {
  const navigation = useNavigation();
  const { locale } = useAuth();
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.servicesShowcase}>
        <View style={styles.servicebox}>
          <Pressable
            onPress={() => {
              navigation.navigate("Description", { service: "AC Repairing" });
            }}
          >
            <View style={styles.serviceimg}>
              <Image
                source={require("../assets/static/ac.png")}
                style={styles.img}
              />
            </View>
          </Pressable>
          <Text style={styles.service}>{i18n[locale].acRepairing}</Text>
        </View>

        <View style={styles.servicebox}>
        <Pressable
            onPress={() => {
              navigation.navigate("Description", { service: "Carpentry" });
            }}
          >
          <View style={styles.serviceimg}>
            <Image
              source={require("../assets/static/20240221_000353_0012.png")}
              style={styles.img}
            />
          </View>
          </Pressable>
          <Text style={styles.service}>{i18n[locale].carpentry}</Text>
        </View>

        <View style={styles.servicebox}>
        <Pressable
            onPress={() => {
              navigation.navigate("Description", { service: "Plumbing" });
            }}
          >
          <View style={styles.serviceimg}>
            <Image
              source={require("../assets/static/20240221_000353_0013.png")}
              style={styles.img}
            />
          </View>
          </Pressable>
          <Text style={styles.service}>{i18n[locale].plumbing}</Text>
        </View>

        <View style={styles.servicebox}>
        <Pressable
            onPress={() => {
              navigation.navigate("Description", { service: "Painter" });
            }}
          >
          <View style={styles.serviceimg}>
            <Image
              source={require("../assets/static/20240221_000353_0014.png")}
              style={styles.img}
            />
          </View>
          </Pressable>
          <Text style={styles.service}>{i18n[locale].painter}</Text>
        </View>

        <View style={styles.servicebox}>
        <Pressable
            onPress={() => {
              navigation.navigate("Description", { service: "Lift Repairing" });
            }}
          >
          <View style={styles.serviceimg}>
            <Image
              source={require("../assets/static/lift.png")}
              style={styles.img}
            />
          </View>
          </Pressable>
          <Text style={styles.service}>{i18n[locale].liftRepairing}</Text>
        </View>

        <View style={styles.servicebox}>
        <Pressable
            onPress={() => {
              navigation.navigate("Description", { service: "Wall Works" });
            }}
          >
          <View style={styles.serviceimg}>
            <Image
              source={require("../assets/static/20240221_000353_0014.png")}
              style={styles.img}
            />
          </View>
          </Pressable>
          <Text style={styles.service}>{i18n[locale].wallWorks}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  servicesShowcase: {
    width: "100%",
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 15,
    gap: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  servicebox: {
    alignItems: "center",
    gap: 5,
  },
  serviceimg: {
    backgroundColor: "#00e9f1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 75,
    height: 75,
  },
  service: {
    fontSize: 11,
    fontWeight: "bold",
  },
  img: {
    width: 50,
    height: 50,
    aspectRatio: 1,
  },
});
