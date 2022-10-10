import {
    FlatList,
    StyleSheet,
    Text,
    Image,
    View,
    Alert,
    TouchableOpacity,
    TouchableHighlight,
    Pressable, Modal, PressableProps
} from 'react-native';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {NativeStackHeaderProps} from "@react-navigation/native-stack";
import CatItem from "../components/CatItem";



export default function HomeScreen({ navigation }: NativeStackHeaderProps) {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    const getCats = () => {

        const apiCall = axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=1`);
        apiCall.then(r => r.data).then(x => {

            // @ts-ignore
            return setData([...data, ...x]);
        }).catch((error) => {
                console.log(error);
            }
        );
    }

    useEffect(() => {
        getCats();
    }, [page])


    const keyExtractor = () => {
        return new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString();
    };




    return (
        <View style={styles.container}>
            <Text style={{
                fontSize:30,
                textAlign:"center",
                color:"#e86666"
            }}>CAT LIST</Text>

                <FlatList
                    data={data}
                    onEndReached={() => setPage(page + 1)}
                    onEndReachedThreshold={0.5}
                    renderItem={({item}) =>
                        (<Pressable
                        onPress={() => navigation.navigate("CatItem", item)}>

                        <CatItem item={item}/>
                    </Pressable>)}
                    keyExtractor={keyExtractor}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f520',
        marginTop: 5,
        padding: 2,
    },
    item: {
        marginTop: 6,
        paddingVertical: 8,
        borderWidth: 2,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    },
    stretch: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
    },
});