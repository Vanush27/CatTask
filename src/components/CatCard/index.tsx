import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Image, Button } from 'react-native';

import { getData, storeData } from '../../storage';
import { CatProps } from '../../types/types';
import { styles } from './styles';

const CatCard = ({ item }: { item: CatProps }) => {
  const [isClick, setIsClick] = useState(false);

  const addToFavorites = () => {
    getData();
    debugger;
  };

  return (
    <View style={styles.item}>
      <View>
        <Image
          resizeMode="cover"
          style={[styles.stretch, { height: item.height }]}
          source={{
            uri: `${item?.url}`,
          }}
        />
      </View>
      <View style={styles.addToFavoritesWrapper}>
        <Button title="Add to favorites" onPress={addToFavorites} />

        {isClick ? (
          <AntDesign
            name="star"
            size={24}
            color="black"
            style={{ textAlign: 'center' }}
            onPress={() => setIsClick(!isClick)}
          />
        ) : (
          <AntDesign
            name="staro"
            size={24}
            color="black"
            style={{ textAlign: 'center' }}
            onPress={() => setIsClick(!isClick)}
          />
        )}
      </View>
    </View>
  );
};

export default CatCard;
