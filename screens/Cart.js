import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import CartItem from "../components/CartItem";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

export default function Cart({ navigation }) {
  const [orders, setOrders] = useState([]);
  // const [loading, setLoading] = useState(true);

  const { getToken } = useAuth();


  const imageMap = {
    "AC Repairing": require("../assets/static/ac_repairing.png"),
    "Lift Reapiring": require("../assets/static/lift_repairing.png"),
    "Carpentry": require("../assets/static/carpentry.png"),
    "Painter": require("../assets/static/painter.png"),
    "Wall Works": require("../assets/static/wall_works.png"),
    "Plumbing": require("../assets/static/plumbing.png"),
  };

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
      console.log("Orders:", response.data);
      setOrders(response.data.data);
      // setLoading(false);
    } catch (error) {
      // setLoading(false);
      console.error("Something went wrong while fetching Orders", error);
      Alert.alert("Something went wrong while fetching Orders");
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
      <View style={styles.bookingWrapper}>
        <Pressable style={styles.bookingBtn}>
          <Text
            style={styles.bookingBtnText}
            onPress={() => navigation.navigate("CurrOrders")}
          >
            Current Orders
          </Text>
        </Pressable>
        <Pressable
          style={styles.bookingBtn}
          onPress={() => navigation.navigate("PrevOrders")}
        >
          <Text style={styles.bookingBtnText}>Previous Orders</Text>
        </Pressable>
      </View>

      <View style={styles.bookingWrapper}>
        <Pressable style={styles.bookingBtn}>
          <Text
            style={styles.bookingBtnText}
            onPress={() => navigation.navigate("Coupons")}
          >
            Coupons
          </Text>
        </Pressable>
        <Pressable style={styles.bookingBtn}>
          <Text style={styles.bookingBtnText}>Quotations</Text>
        </Pressable>
      </View>

      <View style={[styles.box, styles.white]}>
        <Text style={styles.headings}>My Cart</Text>
        <FlatList
         data={orders}
         keyExtractor={(item) => item._id.toString()}
         ListEmptyComponent={ListEmptyComponent}
          renderItem={({ item }) => (
            <CartItem name={item.serviceType} img={imageMap[item.serviceType]} />
          )}
          ItemSeparatorComponent={<View style={{ marginVertical: 10 }} />}
        />
        {/* <ScrollView> */}
        {/* <View style={styles.itembox}>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </View> */}

        <View style={[styles.summaryBox, styles.primary, styles.end]}>
          <Text style={styles.headings}>3 Services in cart</Text>
          <View style={styles.infobox}>
            <Text style={styles.infohead}>Charges 1 </Text>
            <Text style={styles.info}>NA</Text>
            <Text style={styles.infohead}>Charges 2</Text>
            <Text style={styles.info}>NA</Text>
            <Text style={styles.infohead}>Charges 3</Text>
            <Text style={styles.info}>NA</Text>
            <View style={styles.separator} />
            <Text style={styles.infohead}>Total</Text>
            <Text style={styles.info}>NA</Text>
          </View>
          {/* <Pressable style={[styles.bookingBtn, styles.center]}>
            <Text style={styles.bookingBtnText}>Book Now</Text>
          </Pressable> */}
        </View>
        {/* </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 35,
    backgroundColor: "#00e9f1",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  bookingWrapper: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 10,
    flexWrap: "wrap",
  },
  bookingBtn: {
    width: 150,
  },
  bookingBtnText: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    padding: 10,
    backgroundColor: "black",
    borderRadius: 38,
  },
  headings: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#221410",
    alignSelf: "center",
  },
  center: {
    alignSelf: "center",
  },
  end: {
    alignSelf: "flex-end",
  },
  box: {
    padding: 20,
    paddingBottom: 0,
    marginTop: 15,
    borderRadius: 50,
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
    height: "80%",
  },
  summaryBox: {
    padding: 20,
    marginTop: 15,
    borderRadius: 50,
    marginBottom: 10,
  },
  white: {
    backgroundColor: "white",
  },
  itembox: {
    display: "flex",
    gap: 20,
    marginTop: 20,
  },
  primary: {
    backgroundColor: "#00e9f1",
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: "100%",
    backgroundColor: "black",
    borderRadius: 10,
    opacity: 1,
    alignSelf: "center",
  },
  infobox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: 10,
    paddingHorizontal: 10,
    gap: 10,
  },
  info: {
    width: "45%",
    // margin:10,
    textAlign: "right",
  },
  infohead: {
    width: "45%",
  },
});
