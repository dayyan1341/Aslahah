import { createDrawerNavigator } from '@react-navigation/drawer';
import PrevOrders from "../screens/PrevOrders";
import CurrOrders from "../screens/CurrOrders";
import Cart from '../screens/Cart';

const Drawer = createDrawerNavigator();

export default function SidebarNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="CurrOrders" component={CurrOrders} />
      <Drawer.Screen name="PrevOrders" component={PrevOrders} />
    </Drawer.Navigator>
  );
}