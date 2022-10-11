import AsyncStorage from '@react-native-async-storage/async-storage';

import { CatProps } from '../types/types';

export const storeData = async (value: CatProps[]) => {
  try {
    await AsyncStorage.setItem('cats', JSON.stringify(value));
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('cats');
    if (value != null) {
      const data = JSON.parse(value);
      return data;
    }
  } catch (error: any) {
    console.log(error.message);
  }
};

export const removeItem = async () => {
  try {
    await AsyncStorage.removeItem('cats');
  } catch (error: any) {
    console.error(error.message);
  }
};
