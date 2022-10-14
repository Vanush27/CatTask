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
      options={({ navigation }) => ({
        tabBarIcon: ({ focused, color }) => (
          <AntDesign name="home" size={24} color={focused ? 'green' : 'black'} />
        ),
      })}
    />
    <BottomTab.Screen
      name="FavouriteScreen"
      component={FavouriteScreen}
      options={({ navigation }) => ({
        tabBarIcon: ({ focused, color }) => (
          <AntDesign name="staro" size={24} color={focused ? 'green' : 'black'} />
        ),
      })}
    />
    <BottomTab.Screen
      name="SettingScreen"
      component={SettingScreen}
      options={({ navigation }) => ({
        tabBarIcon: ({ focused, color }) => (
          <AntDesign name="setting" size={24} color={focused ? 'green' : 'black'} />
        ),
      })}
    />
  </BottomTab.Navigator>
);

export default BottomTabNavigator;
