import Slider from '@react-native-community/slider';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import CountryFlag from 'react-native-country-flag';

import { StarRating } from '../../components';
import { getDataWeight } from '../../storage';
import { CatTypes } from '../../types/types';
import { styles } from './styles';

const CatScreen = (props: any) => {
  const catItem = props.route?.params;

  const [infoCat, setInfoCat] = useState<CatTypes | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [weightType, setWeightType] = useState<string | null>(null);

  const getMetricTypeFromStorage = async () => {
    try {
      const weight = await getDataWeight();
      setWeightType(weight);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchCatInformation = async () => {
    const apiCall = axios.get(`https://api.thecatapi.com/v1/images/${catItem?.id}`);
    await apiCall
      .then((response) => {
        setLoading(true);
        if (response.data) {
          setLoading(false);
          return response.data;
        }
      })
      .then((res) => {
        setInfoCat(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCatInformation();
    getMetricTypeFromStorage();
  }, []);

  return (
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : infoCat?.breeds ? (
        infoCat?.breeds?.map((info, index) => (
          <View key={index}>
            <View>
              <View style={styles.cat_item_view}>
                <Text style={{ marginRight: 10 }}>{info?.name}</Text>
                <CountryFlag isoCode={info?.country_code} size={20} />
              </View>
            </View>
            <Image
              style={styles.stretch}
              source={{
                uri: `${infoCat?.url}`,
              }}
            />
            <Text style={styles.text_padding}> {info?.description}</Text>
            <StarRating activeStars={info?.energy_level} />
            <View style={styles.life_span}>
              <Text style={styles.text_padding}> Life Span</Text>
              <View style={styles.cat_life_span}>
                <Text style={styles.text_padding}>0</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={20}
                  minimumTrackTintColor="#6ceebf"
                  maximumTrackTintColor="#000000"
                  value={Math.ceil(
                    Number(info?.life_span.replace('-', '').replace('  ', '')) / 100
                  )}
                  disabled
                />
                <Text style={styles.text_padding}>20</Text>
              </View>
            </View>

            {weightType && weightType === 'metric' ? (
              <Text style={styles.weight}>Metric = {info?.weight?.metric} kg</Text>
            ) : (
              <Text style={styles.weight}>Imperial = {info?.weight?.imperial} pounds</Text>
            )}
          </View>
        ))
      ) : (
        <View>
          <Text>No information for breeds</Text>
        </View>
      )}
    </View>
  );
};

export default CatScreen;
