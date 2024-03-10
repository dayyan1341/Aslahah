import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import CartItem from "../components/CartItem";
import React from "react";

export default function Cart() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.bookingWrapper}>
        <Pressable style={styles.bookingBtn}>
          <Text style={styles.bookingBtnText}>Current Orders</Text>
        </Pressable>
        <Pressable style={styles.bookingBtn}>
          <Text style={styles.bookingBtnText}>Previous Orders</Text>
        </Pressable>
      </View>
      <View style={styles.bookingWrapper}>
        <Pressable style={styles.bookingBtn}>
          <Text style={styles.bookingBtnText}>Coupons</Text>
        </Pressable>
        <Pressable style={styles.bookingBtn}>
          <Text style={styles.bookingBtnText}>Quotations</Text>
        </Pressable>
      </View>
      <ScrollView>
        <View style={[styles.box, styles.white]}>
          <Text style={styles.headings}>My Cart</Text>

          <View style={styles.itembox}>
            <CartItem />
            <CartItem />
            <CartItem />
          </View>

          <View style={[styles.box, styles.primary]}>
            <Text style={styles.headings}>3 Services in cart</Text>
            <View style={styles.infobox}>
              <Text style={styles.infohead}>Charges 1 </Text>
              <Text style={styles.info}>$104</Text>
              <Text style={styles.infohead}>Charges 2</Text>
              <Text style={styles.info}>$156</Text>
              <Text style={styles.infohead}>Charges 3</Text>
              <Text style={styles.info}>$114</Text>
              <View style={styles.separator} />
              <Text style={styles.infohead}>Total</Text>
              <Text style={styles.info}>$374</Text>
            </View>
            <Pressable style={[styles.bookingBtn, styles.center]}>
              <Text style={styles.bookingBtnText}>Book Now</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#00e9f1",
    width: "100%",
    height: "100%",
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
  btnimg: {
    height: 60,
    width: 60,
  },
  profbox: {
    display: "flex",
    alignItems: "center",
  },
  profpic: {
    height: 80,
    width: 80,
  },
  followpic: {
    height: 30,
    width: 30,
  },
  followpiccontact: {
    height: 60,
    width: 50,
  },
  linkbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    marginLeft: 0,
  },
  center: {
    alignSelf: "center",
  },
  box: {
    padding: 20,
    marginTop: 15,
    borderRadius: 50,
  },
  white: {
    backgroundColor: "white",
  },
  itembox:{
    display:'flex',
    gap:20,
    marginTop:20,

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
