import { ParamListBase, useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC, useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';

import { FavoriteList } from '../../components';
import { getData } from '../../storage';

const FavouriteScreen: FC<IFavoriteScreenProps> = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase, 'FavouritesScreen'>>();
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
      <Button title="Go to Home" onPress={() => navigation.navigate('HomeScreen')} />
      <ScrollView>
        <FavoriteList element={favList} />
      </ScrollView>
    </>
  );
};

export interface IFavoriteScreenProps {}

export default FavouriteScreen;
