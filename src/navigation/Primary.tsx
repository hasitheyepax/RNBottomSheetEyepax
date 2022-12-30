import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";

const Drawer = createDrawerNavigator();

export default () => (
  <Drawer.Navigator>
    <Drawer.Screen
      name="home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
  </Drawer.Navigator>
);
