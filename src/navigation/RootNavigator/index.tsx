import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CatScreen } from '../../screens';
import BottomTabNavigator from '../BottomTabNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: true }} />
    <Stack.Screen name="CatScreen" component={CatScreen} options={{ headerShown: true }} />
  </Stack.Navigator>
);

export default RootNavigator;
