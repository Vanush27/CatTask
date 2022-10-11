import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FC } from 'react';
import { Button, Text, View } from 'react-native';

const FavouriteScreen: FC<IFavoriteScreenProps> = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase, 'FavouritesScreen'>>();
  return (
    <View>
      <Text> Favourite Screen Screen </Text>
      <Text> Favourite screen </Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('HomeScreen')} />
    </View>
  );
};

export interface IFavoriteScreenProps {}

export default FavouriteScreen;
