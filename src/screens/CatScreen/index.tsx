import { CFormRange } from '@coreui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import CountryFlag from 'react-native-country-flag';

import { StarRating } from '../../components';
import { CatTypes } from '../../types/types';
import { styles } from './styles';

const CatScreen = (props: any) => {
  const [infoCat, setInfoCat] = useState<CatTypes | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const catItem = props.route?.params;

  const fetchCatInformation = async () => {
    const apiCall = axios.get(`https://api.thecatapi.com/v1/images/${catItem?.id}`);
    await apiCall
      .then((response) => {
        setLoading(true);
        if (response.data) {
          setLoading(false);
          console.log(response.data);
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
  }, []);

  return (
    <>
      {loading ? (
        <Text>Loading...</Text>
      ) : infoCat?.breeds ? (
        infoCat?.breeds?.map((info, index) => (
          <View key={index} style={styles.item}>
            <View>
              <Text> CatScreen </Text>
              <View
                style={{
                  padding: 10,
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    marginRight: 10,
                  }}>
                  {info?.name}
                </Text>
                <CountryFlag isoCode={info?.country_code} size={20} />
              </View>

              <Image
                style={styles.stretch}
                source={{
                  uri: `${infoCat?.url}`,
                }}
              />
              <Text style={{ padding: 10 }}> {info?.description}</Text>

              <StarRating activeStars={info?.energy_level} />

              <Text style={{ padding: 3 }}> life span</Text>
              <View
                style={{
                  flexDirection: 'row',
                  margin: 'auto',
                  justifyContent: 'center',
                }}>
                <Text>0</Text>
                <CFormRange
                  id="customRange1"
                  value={Math.ceil(
                    Number(info?.life_span.replace('-', '').replace('  ', '')) / 100
                  )}
                  min={0}
                  max={20}
                  steps={0}
                />
                <Text>20</Text>
              </View>

              <Text style={{ padding: 10 }}>metric = {info?.weight?.metric}</Text>
              <Text style={{ padding: 10 }}>imperial = {info?.weight?.imperial}</Text>

              {/*<Text style={{ padding: 10 }}> energy_level = {info?.energy_level}</Text>*/}
              {/*<Text style={{ padding: 10 }}> country_code = {info?.country_code}</Text>*/}
              {/*<Text style={{ padding: 10 }}> life_span = {info?.life_span}</Text>*/}
            </View>
          </View>
        ))
      ) : (
        <View>
          <Text>No information for breeds</Text>
        </View>
      )}
    </>
  );
};

export default CatScreen;
