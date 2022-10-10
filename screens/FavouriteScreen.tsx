
import {Button, Text, View} from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";


export default function FavouriteScreen({ navigation }: NativeStackHeaderProps) {

    return(
        <View>
            <Text> Favourite Screen Screen yyyyy</Text>
            <Text> Favourite screen </Text>
            <Button title="Go to Home" onPress={() => navigation.navigate("Home List")} />

        </View>
    )
}