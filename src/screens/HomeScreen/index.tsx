import AsyncStorage from '@react-native-async-storage/async-storage';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { FlatList, Text, View, Pressable } from 'react-native';

import { CatCard } from '../../components';
import { getData, storeData } from '../../storage';
import { CatProps } from '../../types/types';
import { IFavoriteScreenProps } from '../FavouriteScreen';
import { styles } from './styles';

const HomeScreen: FC<IFavoriteScreenProps> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase, 'HomeScreen'>>();
  const [data, setData] = useState<CatProps[]>([]);
  const [page, setPage] = useState<number>(1);

  const fetchData = async () => {
    const apiCall = axios.get<CatProps[]>(
      `https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=1`
    );
    await apiCall
      .then((response) => response.data)
      .then((res) => {
        storeData([...data, ...res]);
        return setData([...data, ...res]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  // const keyExtractor = ({ id }: { id: string }) => {
  //   console.warn(id);
  //   return id;
  // };

  const keyExtractor = () => {
    return (
      new Date().getTime().toString() +
      Math.floor(Math.random() * Math.floor(new Date().getTime())).toString()
    );
  };

  // const fetchMoreData = () => {
  //     if (!)
  // setPage(page + 1)
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>CAT LIST</Text>
      <FlatList
        data={data}
        maxToRenderPerBatch={5}
        initialNumToRender={10}
        onEndReached={() => setPage(page)}
        onEndReachedThreshold={0.5}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate('CatScreen', item)}>
            <CatCard item={item} />
          </Pressable>
        )}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default HomeScreen;
