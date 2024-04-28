import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  Pressable,
} from "react-native";
// import React from "react";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function ServiceForm({ navigation }) {
  const ins = useSafeAreaInsets();
  const [time , setTime] = useState();
  const [date , setDate] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [istimePickerVisible, settimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmdate = (date) => {
    console.warn("A date has been picked: ", date);
    setDate(date)
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
    setTime(time)
    hidetimePicker();
  };

  return (
    <View style={[styles.container, { paddingTop: ins.top }]}>
      <Pressable onPress={() => navigation.pop()}>
        <Image
          source={require("../assets/static/20240228_031623_0015.png")}
          style={[styles.iconimg, styles.backbtn]}
        />
      </Pressable>
      <View>
        <Text style={[styles.headings, { marginTop: 15 }]}>Service Type</Text>
        <View style={styles.input}>
          <Image
            source={require("../assets/static/20240228_031624_0030.png")}
            style={styles.iconimg}
          />
          <TextInput style={styles.inputarea} />
        </View>
      </View>
      <View>
        <Text style={styles.headings}>Address</Text>
        <View style={styles.input}>
          <Image
            source={require("../assets/static/20240228_031624_0031.png")}
            style={styles.iconimg}
          />
          <View style={styles.addressinput}>
            <TextInput style={[styles.inputarea, { height: 50 }]} />
            <Pressable style={styles.linkbtn}>
              <Text>Send location on Whatsapp</Text>
              <Image
                source={require("../assets/static/20240228_031624_0029.png")}
                style={[{ height: 20 }, { width: 20 }]}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.headings}>Contact Number</Text>
        <View style={styles.input}>
          <Image
            source={require("../assets/static/20240228_031624_0032.png")}
            style={styles.iconimg}
          />
          <TextInput style={styles.inputarea} />
        </View>
      </View>
      <View>
        <Text style={styles.headings}>Schedule Date & Time</Text>
        <View style={styles.inputdandt}>
          <>
            <Text style={styles.subheadings}>Choose preferred date</Text>
            <Pressable onPress={showDatePicker}>
              <View style={styles.dateandtimeselector}>
                <Image
                  source={require("../assets/static/20240228_031624_0035.png")}
                  style={styles.iconimg}
                />
                {time && <Text>{time}</Text>}
                <Image
                  source={require("../assets/static/20240228_031624_0033.png")}
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
            <Text style={styles.subheadings}>Choose preferred time</Text>
            <Pressable onPress={showtimePicker}>
              <View style={styles.dateandtimeselector}>
                <Image
                  source={require("../assets/static/20240228_031624_0035.png")}
                  style={styles.iconimg}
                />
                <Text>Select Time</Text>
                <Image
                  source={require("../assets/static/20240228_031624_0033.png")}
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
      <Pressable style={styles.rightbox}>
        <Text style={styles.contactbtn}>Confirm Booking</Text>
      </Pressable>
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
    width: "100%",
    backgroundColor: "#00e9f1",
    display: "flex",
    flexDirection: "row",
    borderRadius: 10,
    marginTop: 5,
  },
  inputarea: {
    width: "100%",
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
  dateandtimeselector:{
    width: "100%",
    marginTop: 5,
    marginBottom: 5,
    backgroundColor:'white',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderRadius:20,
  },
  rightbox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 20,
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
