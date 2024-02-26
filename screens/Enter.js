import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./Login";
import { Button, Text, View } from "react-native";
import Welcome from "./Welcome";

function Home({navigation}) {
    return (
      <View style={{ backgroundColor:'#fff' ,flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Login')}
      />
      </View>
    );
  }

const Stack = createNativeStackNavigator();

export default function Enter() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
