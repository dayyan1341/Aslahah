import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/Login";
import SignUp from "../screens/Signup"
import Welcome from "../screens/Welcome";
import SelectLanguage from "../screens/SelectLanguage";
import BottomTabNavigator from "../navigators/BottomTabNavigator"
import ServiceForm from "../screens/ServiceForm";
import ServiceDesc from "../screens/ServiceDesc";
import PrevOrders from "../screens/PrevOrders";
import CurrOrders from "../screens/CurrOrders"
import Coupons from "../screens/Coupons";

const Stack = createNativeStackNavigator();

export default function PrimaryNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SelectLanguage" component={SelectLanguage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Tabs" component={BottomTabNavigator} />
        <Stack.Screen name="Description" component={ServiceDesc} />
        <Stack.Screen name="Form" component={ServiceForm} />
        <Stack.Screen name="PrevOrders" component={PrevOrders} />
        <Stack.Screen name="CurrOrders" component={CurrOrders} />
        <Stack.Screen name="Coupons" component={Coupons} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
