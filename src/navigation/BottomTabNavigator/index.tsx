import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FavouriteScreen, HomeScreen, SettingScreen } from '../../screens';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <BottomTab.Navigator initialRouteName="HomeScreen">
    <BottomTab.Screen
      name="Home"
      component={HomeScreen}
      options={({ navigation }) => ({
        tabBarIcon: ({ focused, color }) => (
          <AntDesign name="home" size={24} color={focused ? 'green' : 'black'} />
        ),
        headerShown: false,
      })}
    />

    <BottomTab.Screen
      name="Favourite"
      component={FavouriteScreen}
      options={({ navigation }) => ({
        tabBarIcon: ({ focused, color }) => (
          <AntDesign name="staro" size={24} color={focused ? 'green' : 'black'} />
        ),
        headerShown: false,
      })}
    />
    <BottomTab.Screen
      name="Setting"
      component={SettingScreen}
      options={({ navigation }) => ({
        tabBarIcon: ({ focused, color }) => (
          <AntDesign name="setting" size={24} color={focused ? 'green' : 'black'} />
        ),
        headerShown: false,
      })}
    />
  </BottomTab.Navigator>
);

export default BottomTabNavigator;
