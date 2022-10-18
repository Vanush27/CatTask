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
      name="FavouriteScreen"
      component={FavouriteScreen}
      options={({ navigation }) => ({
        tabBarIcon: ({ focused, color }) => (
          <AntDesign name="staro" size={24} color={focused ? 'green' : 'black'} />
        ),
        title: 'Favourite',
        headerShown: false,
        tabBarActiveTintColor: '#008000',
      })}
    />
    <BottomTab.Screen
      name="CatScreen"
      component={CatScreen}
      options={({ route }) => ({
        title: 'Cat Information',
        headerTitleStyle: { color: '#ccc' },
        headerStyle: { backgroundColor: '#008000' },
        tabBarVisible: false,
        tabBarButton: () => '',
      })}
    />
    <BottomTab.Screen
      name="SettingScreen"
      component={SettingScreen}
      options={({ navigation }) => ({
        tabBarLabel: 'Setting',
        tabBarActiveTintColor: '#008000',
        headerShown: false,
        title: 'Setting',
        tabBarIcon: ({ focused, color }) => (
          <AntDesign name="setting" size={24} color={focused ? 'green' : 'black'} />
        ),
      })}
    />
  </BottomTab.Navigator>
);

export { BottomTabNavigator };
