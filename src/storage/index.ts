import AsyncStorage from '@react-native-async-storage/async-storage';

import { CatTypes } from '../types/types';

export const storeData = async (value: CatTypes[]) => {
  try {
    await AsyncStorage.setItem('favoriteList', JSON.stringify(value));
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('favoriteList');
    if (value != null) {
      return JSON.parse(value);
    }
  } catch (error: any) {
    console.log(error.message);
  }
};

export const removeItem = async () => {
  try {
    await AsyncStorage.removeItem('favoriteList');
  } catch (error: any) {
    console.error(error.message);
  }
};
