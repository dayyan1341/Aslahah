import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  Pressable,
  Alert,
  ScrollView,
} from "react-native";
// import React from "react";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import i18n from "../context/i18n";
import Dropdown from "../components/Dropdown";
import servicesForLocale from "../context/servicesFor";
import formatDate from "../context/formatDate";
import formatTime from "../context/formatTime";

export default function ServiceForm({ route, navigation }) {
  const ins = useSafeAreaInsets();
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState();
  const [time, setTime] = useState();
  const [date, setDate] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [istimePickerVisible, settimePickerVisibility] = useState(false);
  const [serviceFor, setServiceFor] = useState("");
  const { service } = route.params;
  const { getToken, locale } = useAuth();

  const handleBooking = async () => {
    console.log(
      service,
      address,
      contact,
      serviceFor,
      formatDate(date),
      formatTime(time)
      // preferredTime
    );

    try {
      const token = getToken();
      const response = await axios.post(
        "https://server.aslahah.com/api/booking/create",
        {
          serviceType: service,
          address: address,
          contactNumber: contact,
          serviceFor:serviceFor,
          preferredDate: formatDate(date),
          preferredTime: formatTime(time),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Booking created successfully:", response.data);
      Alert.alert("Booking created successfully", "We will reach you shortly");
      navigation.navigate("Tabs");
    } catch (error) {
      console.error("Failed to book in:", error.response.data.message);
      Alert.alert(
        "Failed to book in",
        error.response.data.message || "Unknown error occurred"
      );
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmdate = (date) => {
    console.warn(date);
    console.log(formatDate(date))
    setDate(date);
    hideDatePicker();
  };

  const showtimePicker = () => {
    settimePickerVisibility(true);
  };

  const hidetimePicker = () => {
    settimePickerVisibility(false);
  };

  const handleConfirmtime = (time) => {
    console.warn("A time has been picked: ", time);
    console.log(formatTime(time))
    setTime(time);
    hidetimePicker();
  };

  return (
    <View style={[styles.container, { paddingTop: ins.top }]}>
      <Pressable onPress={() => navigation.pop()}>
        <Image
          source={require("../assets/static/black_back.png")}
          style={[styles.iconimg, styles.backbtn]}
        />
      </Pressable>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={[styles.headings, { marginTop: 15 }]}>
            {i18n[locale].serviceType}
          </Text>
          <View style={styles.input}>
            <Image
              source={require("../assets/static/20240228_031624_0030.png")}
              style={styles.iconimg}
            />
            <TextInput
              style={styles.inputarea}
              value={i18n[locale][service]}
              readOnly
            />
          </View>
        </View>
        <View>
          <Text style={styles.headings}>{i18n[locale].address}</Text>
          <View style={styles.input}>
            <Image
              source={require("../assets/static/20240228_031624_0031.png")}
              style={styles.iconimg}
            />
            <View style={styles.addressinput}>
              <TextInput
                style={[styles.inputarea]}
                multiline={true}
                numberOfLines={4}
                onChangeText={setAddress}
                value={address}
              />
              <Pressable style={styles.linkbtn}>
                <Text>{i18n[locale].sendLocationOnWhatsApp}</Text>
                <Image
                  source={require("../assets/static/20240228_031624_0029.png")}
                  style={[{ height: 20 }, { width: 20 }]}
                />
              </Pressable>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.headings}>{i18n[locale].contactNumber}</Text>
          <View style={styles.input}>
            <Image
              source={require("../assets/static/20240228_031624_0032.png")}
              style={styles.iconimg}
            />
            <TextInput
              style={styles.inputarea}
              onChangeText={setContact}
              value={contact}
              keyboardType="phone-pad"
            />
          </View>
        </View>

        <View>
          <Text style={styles.headings}>{i18n[locale].serviceFor}</Text>
          <View style={styles.input}>
            <Image
              source={require("../assets/static/building.png")}
              style={{ height: "100%", width: 40 }}
            />
            <Dropdown
              data={servicesForLocale(locale)}
              onSelect={setServiceFor}
            />
            {/* {selectedService && (
              <Text style={styles.selectedText}>
                Selected Service: {selectedService.label}
              </Text>
            )} */}
          </View>
        </View>

        <View>
          <Text style={styles.headings}>
            {i18n[locale].scheduleDateAndTime}
          </Text>
          <View style={styles.inputdandt}>
            <>
              <Text style={styles.subheadings}>
                {i18n[locale].choosePreferredDate}
              </Text>
              <Pressable onPress={showDatePicker}>
                <View style={styles.dateandtimeselector}>
                  <Image
                    source={require("../assets/static/20240228_031624_0035.png")}
                    style={styles.iconimg}
                  />
                  <Text>
                    {date ? date.toLocaleDateString() : i18n[locale].warnDate}
                  </Text>
                  <Image
                    source={require("../assets/static/down-outline-black.png")}
                    style={styles.iconimg}
                  />
                </View>
              </Pressable>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirmdate}
                onCancel={hideDatePicker}
              />
            </>
            <>
              <Text style={styles.subheadings}>
                {i18n[locale].choosePreferredTime}
              </Text>
              <Pressable onPress={showtimePicker}>
                <View style={styles.dateandtimeselector}>
                  <Image
                    source={require("../assets/static/20240228_031624_0035.png")}
                    style={styles.iconimg}
                  />
                  <Text>
                    {time ? time.toLocaleTimeString() : i18n[locale].warnTime}
                  </Text>
                  <Image
                    source={require("../assets/static/down-outline-black.png")}
                    style={styles.iconimg}
                  />
                </View>
              </Pressable>
              <DateTimePickerModal
                isVisible={istimePickerVisible}
                mode="time"
                onConfirm={handleConfirmtime}
                onCancel={hidetimePicker}
              />
            </>
          </View>
        </View>
        <Pressable style={styles.rightbox} onPress={handleBooking}>
          <Text style={styles.contactbtn}>{i18n[locale].confirmBooking}</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    alignSelf: "center",
  },
  backbtn: {
    marginLeft: -30,
  },
  input: {
    // width: "100%",
    paddingHorizontal: 5,
    backgroundColor: "#00e9f1",
    display: "flex",
    flexDirection: "row",
    borderRadius: 10,
    marginTop: 5,
  },
  inputarea: {
    width: 250,
  },
  iconimg: {
    width: 40,
    height: 40,
  },
  headings: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
  },
  subheadings: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  linkbtn: {
    width: "90%",
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  inputdandt: {
    width: "100%",
    backgroundColor: "#00e9f1",
    borderRadius: 10,
    marginTop: 5,
    padding: 10,
    paddingBottom: 50,
  },
  dateandtimeselector: {
    width: "100%",
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
  },
  rightbox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  contactbtn: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 20,
    padding: 10,
    backgroundColor: "black",
    width: 240,
    borderRadius: 38,
  },
});
