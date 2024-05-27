import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  Image,
  Animated,
  Easing,
} from "react-native";
import { useAuth } from "../context/AuthContext";
import i18n from "../context/i18n";

const Dropdown = ({ data, onSelect }) => {
  const [visible, setVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState();
  const {locale} = useAuth();
  
  const dropdownButton = useRef();
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const translateYAnim = useRef(new Animated.Value(-10)).current;
  const scaleAnim = useRef(new Animated.Value(0.95)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(translateYAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
          easing: Easing.out(Easing.ease),
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(translateYAnim, {
          toValue: -10,
          duration: 200,
          useNativeDriver: true,
          easing: Easing.in(Easing.ease),
        }),
        Animated.timing(scaleAnim, {
          toValue: 0.95,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => setVisible(false));
    }
  }, [visible]);

  const handleSelect = (item) => {
    console.log(item.value)
    setSelectedValue(item);
    onSelect(item.value);
    setVisible(false);
  };

  const openDropdown = () => {
    dropdownButton.current.measure((fx, fy, w, h, px, py) => {
      setDropdownPosition({ top: py, left: px, width: w });
      setVisible(true);
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        ref={dropdownButton}
        style={styles.dropdown}
        onPress={openDropdown}
      >
        <Animated.Text style={[styles.dropdownText, { opacity: fadeAnim }]}>
          {selectedValue ? selectedValue.label : i18n[locale].selectService}
        </Animated.Text>
        <Image
          source={require("../assets/static/down-outline-black.png")}
          style={styles.iconimg}
        />
      </TouchableOpacity>

      {visible && (
        <Modal
          transparent={true}
          visible={visible}
          onRequestClose={() => setVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            onPress={() => setVisible(false)}
          >
            <Animated.View
              style={[
                styles.modalContent,
                dropdownPosition,
                {
                //   opacity: fadeAnim,
                  transform: [{ translateY: translateYAnim }, { scale: scaleAnim }],
                },
              ]}
            >
              <FlatList
                data={data}
                keyExtractor={(item) => item.value}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.item}
                    onPress={() => handleSelect(item)}
                  >
                    <Text style={styles.itemText}>{i18n[locale][item.value]}</Text>
                  </TouchableOpacity>
                )}
              />
            </Animated.View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginStart: 10,
  },
  dropdown: {
    paddingStart: 10,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: "#00e9f1",
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dropdownText: {
    fontSize: 16,
  },
  iconimg: {
    width: 40,
    height: 40,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemText: {
    fontSize: 16,
  },
});

export default Dropdown;
