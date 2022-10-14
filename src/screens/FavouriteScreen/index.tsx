import { ParamListBase, useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC, useState } from 'react';
import { Button, ScrollView } from 'react-native';

import { FavoriteList } from '../../components';
import { getData } from '../../storage';

const FavouriteScreen: FC<IFavoriteScreenProps> = () => {
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
    <>
      <ScrollView>
        <FavoriteList element={favList} />
      </ScrollView>
    </>
  );
};

export interface IFavoriteScreenProps {}

export default FavouriteScreen;
