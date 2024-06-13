import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import CartItem from "../components/CartItem";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import formatDate from "../context/formatDate";
import formatTime from "../context/formatTime";
import i18n from "../context/i18n";

export default function OrderStatus({ route, navigation }) {
  const [order, setOrder] = useState([]);
  const [status, setStatus] = useState([]);

  const { id, name } = route.params;

  const [loading, setLoading] = useState(true);

  const { getToken, locale } = useAuth();

  useEffect(() => {
    fetchStatus(id);
  }, []);

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
      setOrder(response.data.booking);
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

  const ListEmptyComponent = () => (
    <View style={styles.buzz}>
      <Text>Nothing to show here</Text>
      <Text>Request some services!!</Text>
    </View>
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.bellandback}>
        <Pressable onPress={() => navigation.pop()}>
          <Image
            source={require("../assets/static/back_left.png")}
            style={styles.btnimg}
          />
        </Pressable>
      </View>

      <View style={styles.bookingWrapper}>
        <Text style={styles.headings}>Order Status</Text>
      </View>

      <View style={[styles.summaryBox, styles.primary]}>
        <View style={styles.infobox}>
          <Text style={styles.infohead}>{i18n[locale].address}</Text>
          <Text style={styles.info}>{order.address}</Text>
          <Text style={styles.infohead}>{i18n[locale].contactNumber}</Text>
          <Text style={styles.info}>{order.contactNumber}</Text>
          <Text style={styles.infohead}>Preferred Time</Text>
          <Text style={styles.info}>{order.preferredTime}</Text>
        </View>
      </View>
      <View style={[styles.box, styles.white]}>
        {loading ? (
          <ActivityIndicator size="large" color="#00e9f1" />
        ) : (
          <FlatList
            data={status}
            ListHeaderComponent={
              <Text style={styles.headings}>{i18n[locale][name]}</Text>
            }
            ListHeaderComponentStyle={{ marginBottom: 10 }}
            ItemSeparatorComponent={<View style={{ marginVertical: 10 }} />}
            ListEmptyComponent={ListEmptyComponent}
            renderItem={({ item }) => (
              <View style={styles.orderStatus}>
                <Text style={{ fontWeight: "bold" }}>{item.status}</Text>
                <Text>
                  Time : {formatTime(new Date(item.updatedAt))} on{" "}
                  {formatDate(new Date(item.updatedAt))}
                </Text>
              </View>
            )}
          />
        )}
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
  orderStatus: {
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
