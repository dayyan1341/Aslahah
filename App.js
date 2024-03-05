import { StatusBar } from "expo-status-bar";
import PrimaryNavigator from "./navigators/PrimaryNavigator";

export default function App() {
  return (
    <>
      <PrimaryNavigator />
      <StatusBar style="auto" />
    </>
  );
}
