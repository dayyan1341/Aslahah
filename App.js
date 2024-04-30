import { StatusBar } from "expo-status-bar";
import PrimaryNavigator from "./navigators/PrimaryNavigator";
import ServiceForm from "./screens/ServiceForm";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function App() {
  
  return (
    <SafeAreaProvider>
      <PrimaryNavigator />
      {/* <ServiceForm/> */}
      <StatusBar style="auto"  translucent={true} />
    </SafeAreaProvider>
  );
}
