import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import PrimaryNavigator from "./navigators/PrimaryNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <PrimaryNavigator />
        {/* <Cart/> */}
        <StatusBar style="auto" translucent={true} />
      </AuthProvider>
    </SafeAreaProvider>
  );
}
