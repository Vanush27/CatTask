import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomTabNavigator } from '../BottomTabNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={BottomTabNavigator}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export { RootNavigator };
