import { AntDesign } from '@expo/vector-icons';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Image, Button } from 'react-native';

import { getData, storeData } from '../../storage';
import { CatTypes } from '../../types/types';
import { styles } from './styles';

const CatCard = ({
  item,
  setFavoriteList,
  catList,
  isDisabled,
}: {
  item: CatTypes;
  setFavoriteList: any;
  catList: CatTypes[];
  isDisabled: boolean;
}) => {
  const [isClick, setIsClick] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase, 'HomeScreen'>>();

  const addToFavorites = async (id: string) => {
    try {
      const getFavoriteList = (await getData()) || [];
      const getCurrentFavoriteItem = catList?.filter((item: CatTypes) => item.id === id);
      await storeData([...getFavoriteList, ...getCurrentFavoriteItem]);
      setFavoriteList([...getFavoriteList, ...getCurrentFavoriteItem]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.item}>
      <View>
        <Image
          resizeMode="cover"
          style={styles.stretch}
          source={{
            uri: `${item?.url}`,
          }}
        />
      </View>
      <View style={styles.addToFavoritesWrapper}>
        {isDisabled ? (
          <Button title="See Favorites" onPress={() => navigation.navigate('FavouriteScreen')} />
        ) : (
          <Button title="Add to favorites" onPress={() => addToFavorites(item.id)} />
        )}
        <AntDesign
          name={isDisabled ? 'star' : 'staro'}
          size={24}
          color="black"
          style={{ textAlign: 'center' }}
          onPress={() => setIsClick(!isClick)}
        />
      </View>
    </View>
  );
};

export default CatCard;
