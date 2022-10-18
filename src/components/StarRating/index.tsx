import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

const StarRating = ({ activeStars }: { activeStars: number }) => {
  const totalStars = 5;
  return (
    <View style={styles.starIcon}>
      <Text style={styles.energy_level}>Energy level</Text>
      {[...new Array(totalStars)].map((arr, index) => (
        <AntDesign
          name={index < activeStars ? 'star' : 'staro'}
          size={24}
          color="#008000"
          key={index}
        />
      ))}
    </View>
  );
};

export default StarRating;
