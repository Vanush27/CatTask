import { AntDesign } from '@expo/vector-icons';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import { getData, storeData } from '../../storage';
import { CatTypes } from '../../types/types';
import { styles } from './styles';

const FavoriteList = ({ element }: { element: CatTypes[] }) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase, 'HomeScreen'>>();

  const deleteToFavorites = async (id: string) => {
    try {
      const getFavoriteList = (await getData()) || [];
      const favoriteRemove = await getFavoriteList?.filter((item: CatTypes) => item.id !== id);
      await storeData([...favoriteRemove]);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      {element?.map((element: CatTypes) => {
        return (
          <View key={element.id + element.url} style={styles.favorite_container}>
            <Pressable onPress={() => navigation.navigate('CatScreen', element)}>
              <Image
                style={styles.stretch}
                source={{
                  uri: `${element?.url}`,
                }}
              />
            </Pressable>

            <AntDesign
              name="delete"
              size={24}
              color="black"
              style={{ textAlign: 'center' }}
              onPress={() => deleteToFavorites(element.id)}
            />
          </View>
        );
      })}
    </>
  );
};

export default FavoriteList;
