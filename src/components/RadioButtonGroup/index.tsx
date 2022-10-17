import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';

import { SETTING_WEIGHT_ACTIVE_TYPE } from '../../constants';
import { dataWeight } from '../../storage';
import { styles } from './styles';

const radioButtonsData: RadioButtonProps[] = [
  {
    id: '1',
    label: '   Metric ',
    color: '#008000',
    value: SETTING_WEIGHT_ACTIVE_TYPE,
  },
  {
    id: '2',
    label: ' Imperial ',
    color: '#008000',
    value: 'imperial',
  },
];
const RadioButtonGroup = () => {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  function onPressRadioButton(radioButtonsArray: any) {
    setRadioButtons(radioButtonsArray);
  }

  useEffect(() => {
    dataWeight(radioButtonsData);
  }, [radioButtonsData]);

  return (
    <View style={styles.weight_container}>
      <Text>Weight Standard</Text>
      <View>
        <View>
          <RadioGroup radioButtons={radioButtons} onPress={onPressRadioButton} />
        </View>
      </View>
    </View>
  );
};

export default RadioButtonGroup;
