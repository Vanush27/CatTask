import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";


import { AntDesign } from '@expo/vector-icons';
import FavouriteScreen from "../screens/FavouriteScreen";
import CatItem from "../components/CatItem";

export default function Navigation(){

    return (
        <NavigationContainer>
            <RootNavigator/>
        </NavigationContainer>
    )
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={BottomTabNavigator}
                options={{ headerShown: true }}
            />
                <Stack.Screen
                    name="CatItem"
                    component={CatItem}
                    options={{ title: "Cat item", headerShown: true }}
                />
            </Stack.Navigator>
    );
}


const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {

    return(
        <BottomTab.Navigator initialRouteName="Home">
            <BottomTab.Screen name="Home List"
                              component={HomeScreen}
                              options={{
                                  tabBarIcon: () => (
                                      <AntDesign name="home" size={24} color="black" />
                                  ),
                              }}
            />
            <BottomTab.Screen name="Favourite List" component={FavouriteScreen}
                              options={{
                                  tabBarIcon:()=> <AntDesign name="star" size={24} color="black" />
                              }}

            />
        </BottomTab.Navigator>
    )
}