import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import SignUp from "../screens/Signup";
import Welcome from "../screens/Welcome";
import SelectLanguage from "../screens/SelectLanguage";
import BottomTabNavigator from "../navigators/BottomTabNavigator";
import ServiceForm from "../screens/ServiceForm";
import ServiceDesc from "../screens/ServiceDesc";
import Coupons from "../screens/Coupons";
import VerifyOtp from "../screens/VerifyOtp";
import UpdateProfile from "../screens/UpdateProfile";
import { useAuth } from "../context/AuthContext";
import UpdatePassword from "../screens/UpdatePassword";
import Notifications from "../screens/Notifications";
import ForgotPass from "../screens/ForgotPass"
import SearchScreen from "../screens/SearchScreen";
import OrderStatus from "../screens/OrderStatus"
import SplashScreen from "../screens/SplashScreen";


const Stack = createNativeStackNavigator();

export default function PrimaryNavigator() {
  const { isLoggedIn, loading } = useAuth();
  
  if (loading) return <SplashScreen/>
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Tabs" component={BottomTabNavigator} />
            <Stack.Screen name="Description" component={ServiceDesc} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Status" component={OrderStatus} />
            <Stack.Screen name="Form" component={ServiceForm} />           
            <Stack.Screen name="Coupons" component={Coupons} />
            <Stack.Screen name="updateprof" component={UpdateProfile} />
            <Stack.Screen name="UpdatePass" component={UpdatePassword} />
            <Stack.Screen name="Notifications" component={Notifications} />
          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="SelectLanguage" component={SelectLanguage} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Forgot" component={ForgotPass} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Verify" component={VerifyOtp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
