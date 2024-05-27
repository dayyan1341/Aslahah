import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import PrevOrders from "../screens/PrevOrders";
import CurrOrders from "../screens/CurrOrders";
import Cart from "../screens/Cart";
import { Image, Pressable, StyleSheet, View } from "react-native";
import i18n from "../context/i18n";
import { useAuth } from "../context/AuthContext";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.bellandback}>
        <Pressable onPress={() => props.navigation.closeDrawer()}>
          <Image
            source={require("../assets/static/black_back.png")}
            style={styles.btnimg}
          />
        </Pressable>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function SidebarNavigator() {
  const { locale } = useAuth();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#00e9f1",
          width: 240,
        },
        headerShown: false,
      }}
    >
      <Drawer.Screen
        options={{
          title: i18n[locale].cart,
        }}
        name="Cart"
        component={Cart}
      />
      <Drawer.Screen
        options={{
          title: i18n[locale].currentOrders,
        }}
        name="CurrOrders"
        component={CurrOrders}
      />
      <Drawer.Screen
        options={{
          title: i18n[locale].previousOrders,
        }}
        name="PrevOrders"
        component={PrevOrders}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  bellandback: {
    marginTop: -20,
    marginBottom: 20,
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-between",
  },
  btnimg: {
    height: 60,
    width: 60,
  },
});
