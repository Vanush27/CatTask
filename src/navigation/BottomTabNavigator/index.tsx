import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View } from 'react-native';

import FavouriteScreen from '../../screens/FavouriteScreen';
import HomeScreen from '../../screens/HomeScreen';
import SettingScreen from '../../screens/SettingScreen';

// @ts-ignore
function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}>
            <>
              style={{ color: isFocused ? '#673ab7' : '#222' }} {label}
            </>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

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
