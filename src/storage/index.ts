import AsyncStorage from '@react-native-async-storage/async-storage';
import { RadioButtonProps } from 'react-native-radio-buttons-group';

import { FAVORITE_LIST_STORAGE, SETTING_WEIGHT_ACTIVE_TYPE } from '../constants';
import { CatTypes } from '../types/types';

export const storeData = async (value: CatTypes[]) => {
  try {
    await AsyncStorage.setItem(FAVORITE_LIST_STORAGE, JSON.stringify(value));
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem(FAVORITE_LIST_STORAGE);
    if (value != null) {
      return JSON.parse(value);
    }
  } catch (error: any) {
    console.log(error.message);
  }
};

export const dataWeight = async (value: any) => {
  try {
    await AsyncStorage.setItem(SETTING_WEIGHT_ACTIVE_TYPE, JSON.stringify(value));
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getDataWeight = async () => {
  try {
    const value = await AsyncStorage.getItem(SETTING_WEIGHT_ACTIVE_TYPE);
    if (value != null) {
      return JSON.parse(value);
    }
  } catch (error: any) {
    console.log(error.message);
  }
};
