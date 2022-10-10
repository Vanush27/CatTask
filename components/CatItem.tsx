import {Text, View, StyleSheet, Image} from "react-native";
import React from "react";




export default function CatItem({item}:any) {


    console.log(item , "item-------");

    return (

      <View style={styles.item}>

          <View>
              <Text>"name" : {item?.id}</Text>
              {/*<Text>"width" : {route.params?.width}</Text>*/}
              {/*<Image*/}
              {/*    style={styles.stretch}*/}
              {/*    source={{*/}
              {/*      uri: `${route.params?.url}`}}*/}
              {/*/>*/}
            </View>

      </View>

  );
}

const styles = StyleSheet.create({
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
