import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';

import { CatTypes, TBreeds } from '../../types/types';
import { styles } from './styles';

const CatScreen = (props: any) => {
  const [infoCat, setInfoCat] = useState<CatTypes | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [countryFlag, setCountryFlag] = useState([]);

  const catItem = props.route?.params;

  const fetchCatInformation = async () => {
    const apiCall = axios.get(`https://api.thecatapi.com/v1/images/${catItem.id}`);
    await apiCall
      .then((response) => {
        setLoading(true);
        if (response.data) {
          setLoading(false);
          return response.data;
        }
      })
      .then((res) => {
        console.log(res, 'res');
        setInfoCat(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const country = async () => {
    const apiCall = axios.get(
      `https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/by-code.json`
    );
    await apiCall
      .then((response) => response.data)
      .then((res) => setCountryFlag(res))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCatInformation();
    country();
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
              <Text>"name" : {info?.name}</Text>
              <Image
                style={styles.stretch}
                source={{
                  uri: `${infoCat?.url}`,
                }}
              />
              <Text style={{ padding: 10 }}> {info?.description}</Text>
              <Text style={{ padding: 10 }}> country_code = {info?.country_code}</Text>
              <Text style={{ padding: 10 }}> energy_level = {info?.energy_level}</Text>
              <Text style={{ padding: 10 }}> life_span = {info?.life_span}</Text>
            </View>
            {/*<View>{countryFlag?.filter((c) => c === info?.country_code)}</View>*/}
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
