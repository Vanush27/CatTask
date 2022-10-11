import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FavouriteScreen from '../../screens/FavouriteScreen';
import HomeScreen from '../../screens/HomeScreen';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <BottomTab.Navigator initialRouteName="Main">
    <BottomTab.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
      }}
    />
    <BottomTab.Screen
      name="FavouriteScreen"
      component={FavouriteScreen}
      options={{
        tabBarIcon: () => <AntDesign name="star" size={24} color="black" />,
      }}
    />
  </BottomTab.Navigator>
);

export default BottomTabNavigator;
