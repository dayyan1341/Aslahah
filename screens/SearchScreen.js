import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import i18n from "../context/i18n";
import { useAuth } from "../context/AuthContext";

const servicesData = [
  { name: "AC Repairing", img: require("../assets/static/ac_repairing.png") },
  {
    name: "Lift Repairing",
    img: require("../assets/static/lift_repairing.png"),
  },
  { name: "Plumbing", img: require("../assets/static/plumbing.png") },
  { name: "Carpentry", img: require("../assets/static/carpentry.png") },
  { name: "Wall Works", img: require("../assets/static/wall_works.png") },
  { name: "Painter", img: require("../assets/static/painter.png") },
  // { name: "All Services", img: require("../assets/static/all_services.png") },
  // {
  //   name: "Become a technician",
  //   img: require("../assets/static/all_services.png"),
  // },
];

const localeMap = {
  "AC Repairing": "acRepairing",
  "Lift Repairing": "liftRepairing",
  Carpentry: "carpentry",
  Painter: "painter",
  "Wall Works": "wallWorks",
  Plumbing: "plumbing",
};

const SearchScreen = ({ navigation, route }) => {
  const ins = useSafeAreaInsets();
  const { searchParam, place } = route.params;
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);
  const { locale } = useAuth();

  useEffect(() => {
    handleSearch(searchParam);
  }, []);

  const handleSearch = (text) => {
    const filtered = servicesData.filter((service) =>
      service.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredServices(filtered);
    setSearchTerm(text);
  };

  return (
    <View style={[styles.container, { paddingTop: ins.top }]}>
      <View style={styles.searchbar}>
        <Pressable style={styles.backBtn} onPress={() => navigation.pop()}>
          <Image
            source={require("../assets/static/back_left.png")}
            style={styles.btnimg}
          />
        </Pressable>

        <TextInput
          style={styles.input}
          onChangeText={handleSearch}
          value={searchTerm}
          placeholder={place}
        />
      </View>

      <FlatList
        data={filteredServices}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate("Description", { service: item.name });
            }}
          >
            <View style={styles.item}>
              <View style={styles.itemimg}>
                <Image source={item.img} style={styles.img} />
              </View>
              <View style={styles.itemnamebox}>
                <Text style={styles.itemname}>
                  {i18n[locale][localeMap[item.name]]}
                </Text>
              </View>
            </View>
          </Pressable>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  searchbar: {
    position:'relative',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
   
    marginBottom: 30,
  },
  input: {
    height: 50,
    width:screen.width*0.6,
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 40,
    borderColor: "#343341",
    borderWidth: 1,
    textAlign: "center",
    
    // backgroundColor:'yellow',

  },
  backBtn: {
    position:'absolute',
    left:0,
  },
  btnimg: {
    height: 60,
    width: 60,
  },
  item: {
    backgroundColor: "#00e9f1",
    width: screen.width * 0.9,
    height: 60,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    alignSelf: "center",
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 50,
    position: "relative",
    marginBottom: 30,
  },
  itemimg: {
    position: "absolute",
    height: 60,
    overflow: "visible",
    top: 0,
    left: 0,
  },
  img: {
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: "#343341",
    width: 60,
    height: 60,
  },
  itemnamebox: {
    height: "100%",
    justifyContent: "center",
    textAlign: "center",
  },
  itemname: {
    fontSize: 18,
    color: "#343341",
    textAlign: "center",
  },
});

export default SearchScreen;
