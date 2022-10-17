import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CatScreen, FavouriteScreen, HomeScreen, SettingScreen } from '../../screens';

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
        tabBarActiveTintColor: '#008000',
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
        tabBarActiveTintColor: '#008000',
      })}
    />
    <BottomTab.Screen
      name="CatScreen"
      component={CatScreen}
      options={({ route }) => ({
        title: '',
        tabBarVisible: false,
        tabBarButton: () => '',
      })}
    />
    <BottomTab.Screen
      name="Setting"
      component={SettingScreen}
      options={({ navigation }) => ({
        tabBarLabel: 'Setting',
        tabBarActiveTintColor: '#008000',
        headerShown: false,
        tabBarIcon: ({ focused, color }) => (
          <AntDesign name="setting" size={24} color={focused ? 'green' : 'black'} />
        ),
      })}
    />
  </BottomTab.Navigator>
);

export { BottomTabNavigator };
