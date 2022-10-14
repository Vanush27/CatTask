import { useFocusEffect } from '@react-navigation/native';
import React, { FC, useState } from 'react';
import { ScrollView, View } from 'react-native';

import { FavoriteList } from '../../components';
import { getData } from '../../storage';

const FavouriteScreen: FC<IFavoriteScreenProps> = ({}) => {
  const [favList, setFavList] = useState([]);
  const getFavoriteList = async () => {
    try {
      const getFavoriteListFromStorage = await getData();
      setFavList(getFavoriteListFromStorage);
    } catch (e) {
      console.log(e);
    }
  };

  useFocusEffect(() => {
    getFavoriteList();
  });

  return (
    <View style={{ padding: 10 }}>
      <ScrollView>
        <FavoriteList element={favList} />
      </ScrollView>
    </View>
  );
};

export interface IFavoriteScreenProps {}

export default FavouriteScreen;
