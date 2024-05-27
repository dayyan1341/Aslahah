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
import i18n from "../context/i18n";
import imageMap from "../context/technicianCartoons";
import formatDate from "../context/formatDate";
import formatTime from "../context/formatTime";



export default function Cart({ navigation }) {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState([]);

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
      console.log("Orders:", response.data);
      setOrders(response.data.data);
      fetchStatus(response.data.data[0]["_id"]);
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
    }
  };

  const fetchStatus = async (id) => {
    try {
      const token = getToken();
      console.log(id);
      const response = await axios.get(
        `https://server.aslahah.com/api/booking/${id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("this order:", response.data);
      setStatus(response.data.booking.bookingStatus);
      console.log(status);

      // setLoading(false);
    } catch (error) {
      // setLoading(false);
      console.error(
        "Something went wrong while fetching Orders",
        error.response.data.message
      );
      Alert.alert(
        "Something went wrong while fetching Orders",
        error.response.data.message || "Unknown error occurred"
      );
    }
  };

  const ListEmptyComponent = () => (
    <View style={styles.buzz}>
      <Text>{i18n[locale].nothingToShow}</Text>
      <Text>{i18n[locale].requestSome}</Text>
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

      <View style={styles.bookingWrapper}>
        <Text style={styles.headings}>{i18n[locale].myCart}</Text>
        {/* <Pressable style={styles.bookingBtn}>
          <Text
            style={styles.bookingBtnText}
            onPress={() => navigation.navigate("Coupons")}
          >
            Coupons
          </Text>
        </Pressable>
        <Pressable style={styles.bookingBtn}>
          <Text style={styles.bookingBtnText}>Quotations</Text>
        </Pressable> */}
      </View>

      <View style={[styles.box, styles.white]}>
      {loading ? (
        <View style={styles.container}>
          <Text>{i18n[locale].loading}</Text>
        </View>
      ) : (
        <FlatList
          data={status}
          ListHeaderComponent={<Text style={styles.headings}>{i18n[locale][orders[0].serviceType]}</Text>}
          ListHeaderComponentStyle={{marginBottom:10}}
          ItemSeparatorComponent={<View style={{ marginVertical: 10 }} />}
          ListEmptyComponent={ListEmptyComponent}
          renderItem={({ item }) => (
            <View
              style={styles.orderStatus}
            >
              <Text style={{ fontWeight: "bold" }}>{item.status}</Text>
              <Text>Time : {formatTime(new Date(item.updatedAt))} on {formatDate(new Date(item.updatedAt)) }</Text>
            </View>
          )}
        />)}

        {/* <FlatList
          data={orders}
          keyExtractor={(item) => item._id.toString()}
          ListEmptyComponent={ListEmptyComponent}
          renderItem={({ item }) => (
            <CartItem
              name={item.serviceType}
              img={imageMap[item.serviceType]}
              status={item.bookingStatus}
            />
          )}
          ItemSeparatorComponent={<View style={{ marginVertical: 10 }} />}
        /> */}

        {/* <View style={[styles.summaryBox, styles.primary, styles.end]}>
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
          <Pressable style={[styles.bookingBtn, styles.center]}>
            <Text style={styles.bookingBtnText}>Book Now</Text>
          </Pressable>
        </View> */}
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
  bellandback: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnimg: {
    height: 60,
    width: 60,
  },
  orderStatus:{
    position: "relative",
    backgroundColor: "#00e9f1",
    // width: screen.width * 0.9,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 50,
  },
  bookingWrapper: {
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-evenly",
    // gap: 10,
    // flexWrap: "wrap",
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
    fontSize: 28,
    fontWeight: "bold",
    color: "#343341",
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
    height: "90%",
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
    backgroundColor: "#00e9f1",
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
  buzz: {
    width: "100%",
    alignItems: "center",
  },
});
