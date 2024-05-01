import { StatusBar } from "expo-status-bar";
import PrimaryNavigator from "./navigators/PrimaryNavigator";
import ServiceForm from "./screens/ServiceForm";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <PrimaryNavigator />
        {/* <ServiceForm/> */}
        <StatusBar style="auto" translucent={true} />
      </AuthProvider>
    </SafeAreaProvider>
  );
}
