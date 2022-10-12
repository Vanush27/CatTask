import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

import { getData, storeData } from '../../storage';
import { CatTypes } from '../../types/types';
import { styles } from './styles';

const FavoriteList = ({ element }: { element: CatTypes[] }) => {
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
          <View key={element.id + element.url} style={styles.container}>
            <Text> "name" : {element?.id}</Text>
            <Image
              style={[styles.stretch, { height: element.height }]}
              source={{
                uri: `${element?.url}`,
              }}
            />
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
