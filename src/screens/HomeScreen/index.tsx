import { ParamListBase, useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { FlatList, Text, View, Pressable } from 'react-native';

import { CatCard } from '../../components';
import { SETTING_WEIGHT_ACTIVE_TYPE } from '../../constants';
import { dataWeight, getData } from '../../storage';
import { CatTypes } from '../../types/types';
import { styles } from './styles';

const HomeScreen: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase, 'HomeScreen'>>();
  const [data, setData] = useState<CatTypes[] | []>([]);
  const [page, setPage] = useState<number>(1);
  const [favoriteList, setFavoriteList] = useState<[]>([]);
  const [favoriteListDisabled, setFavoriteListDisabled] = useState<[]>([]);

  const isFocused = useIsFocused();

  const getFavList = async () => {
    const getFavoriteList = (await getData()) || [];
    const getAllId = getFavoriteList?.map((item: any) => item.id);
    setFavoriteListDisabled(getAllId);
  };

  const fetchData = async () => {
    const apiCall = axios.get<CatTypes[]>(
      `https://api.thecatapi.com/v1/images/search?limit=10&page=${page}`
    );
    await apiCall
      .then((response) => response.data)
      .then((res) => {
        setData([...data, ...res]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    getFavList();
  }, [favoriteList]);

  const keyExtractor = (item: CatTypes) => {
    return (
      item.id.toString() +
      new Date().getTime().toString() +
      Math.floor(Math.random() * Math.floor(new Date().getTime())).toString()
    );
  };

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  const dataToRender = data.filter(
    (value, index, self) => index === self.findIndex((t) => t.id === value.id)
  );

  const synchronizeStateDataWithStorage = async () => {
    try {
      const getFavoriteList = (await getData()) || [];
      setFavoriteList(getFavoriteList);
      const getAllId = getFavoriteList?.map((item: any) => item.id);
      setFavoriteListDisabled(getAllId);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (isFocused) {
      synchronizeStateDataWithStorage();
    }
  }, [isFocused]);

  useEffect(() => {
    dataWeight(SETTING_WEIGHT_ACTIVE_TYPE);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>CAT LIST</Text>
      <FlatList
        data={dataToRender}
        onEndReached={fetchMoreData}
        onEndReachedThreshold={0.5}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate('CatScreen', item)}>
            <CatCard
              item={item}
              setFavoriteList={setFavoriteList}
              catList={data}
              isDisabled={favoriteListDisabled.includes(item.id as never)}
            />
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;
