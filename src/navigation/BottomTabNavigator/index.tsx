import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FavouriteScreen from '../../screens/FavouriteScreen';
import HomeScreen from '../../screens/HomeScreen';
import SettingScreen from '../../screens/SettingScreen';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <BottomTab.Navigator initialRouteName="HomeScreen">
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
    <BottomTab.Screen
      name="SettingScreen"
      component={SettingScreen}
      options={{
        tabBarIcon: () => <AntDesign name="setting" size={24} color="black" />,
      }}
    />
  </BottomTab.Navigator>
);

export default BottomTabNavigator;
