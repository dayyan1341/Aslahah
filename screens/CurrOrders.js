// PrevOrders.js

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import CartItem from "../components/CartItem";
import imageMap from "../context/technicianCartoons";
import i18n from "../context/i18n";

const PrevOrders = ({ navigation }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const { getToken, locale } = useAuth();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchOrders();
    });

    return unsubscribe;
  }, []);

  const fetchOrders = async () => {
    try {
      const token = getToken();

      const response = await axios.get(
        "https://server.aslahah.com/api/booking/current",

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Current Orders:", response.data.data);
      setOrders(response.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(
        "Something went wrong while fetching Orders",
        error.response.data.message
      );
      Alert.alert(
        "Something went wrong while fetching Orders",
        error.response.data.message || "Unknown error occurred"
      );
      navigation.navigate("Cart");
    }
  };

  const ListEmptyComponent = () => (
    <View style={styles.buzz}>
      <Text>Nothing to show here</Text>
      <Text>Request some services!!</Text>
    </View>
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.bellandback}>
        <Pressable onPress={() => navigation.openDrawer()}>
          <Image
            source={require("../assets/static/drawer.png")}
            style={styles.btnimg}
          />
        </Pressable>
      </View>
      <Text style={styles.headings}>{i18n[locale].currentOrders} :</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#00e9f1" />
      ) : (
        <View style={styles.container}>
          <FlatList
            data={orders}
            keyExtractor={(item) => item._id.toString()}
            ListEmptyComponent={ListEmptyComponent}
            ItemSeparatorComponent={<View style={{ marginVertical: 10 }} />}
            renderItem={({ item }) => (
              <CartItem
                id={item._id}
                name={item.serviceType}
                img={imageMap[item.serviceType]}
                status={item.bookingStatus}
              />
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 1,
    backgroundColor: "white",
    marginTop: 15,
    // borderRadius: 50,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    paddingTop: 10,
  },
  bellandback: {
    marginTop: 40,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnimg: {
    height: 60,
    width: 60,
  },
  wrapper: {
    backgroundColor: "#00e9f1",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  item: {
    backgroundColor: "#00e9f1",
    width: "95%",
    height: 50,
    display: "flex",
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    alignSelf: "center",
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    // borderBottomRightRadius: 50,
  },
  itemimg: {
    height: 50,
    overflow: "visible",
  },
  img: {
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: "#343341",
    width: 50,
    height: 50,
  },
  itemnamebox: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  itemname: {
    width: "80%",
    fontSize: 14,
    color: "#343341",
  },
  headings: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#221410",
    marginStart: "5%",
  },
  buzz: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: "100%",
  },
});

export default PrevOrders;
