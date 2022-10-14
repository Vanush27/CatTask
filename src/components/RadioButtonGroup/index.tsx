import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

import { SETTING_WEIGHT_ACTIVE_TYPE } from '../../constants';
import { dataWeight } from '../../storage';
import { styles } from './styles';

const RadioButtonGroup = () => {
  const [checked, setChecked] = useState(SETTING_WEIGHT_ACTIVE_TYPE);

  useEffect(() => {
    dataWeight(checked);
  }, [checked]);

  return (
    <View style={styles.weight_container}>
      <Text>Weight Standard</Text>
      <View style={styles.radio_btn}>
        <RadioButton
          value="metric"
          status={checked === 'metric' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('metric')}
        />
        <Text>Metric</Text>
      </View>
      <View style={styles.radio_btn}>
        <RadioButton
          value="imperial"
          status={checked === 'imperial' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('imperial')}
        />
        <Text>Imperial</Text>
      </View>
    </View>
  );
};

export default RadioButtonGroup;
