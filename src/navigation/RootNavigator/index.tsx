import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CatScreen, SettingScreen } from '../../screens';
import BottomTabNavigator from '../BottomTabNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={BottomTabNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="CatScreen" component={CatScreen} options={{ headerShown: true }} />
    <Stack.Screen name="SettingScreen" component={SettingScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default RootNavigator;
