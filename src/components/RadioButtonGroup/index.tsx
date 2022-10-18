import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';

import { dataWeight } from '../../storage';
import { radioButtonsData } from './radioButtonsData';
import { styles } from './styles';

const RadioButtonGroup = () => {
  const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>(radioButtonsData);

  function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
    setRadioButtons(radioButtonsArray);
  }

  useEffect(() => {
    dataWeight(radioButtonsData);
  }, [radioButtonsData]);

  return (
    <View style={styles.weight_container}>
      <Text>Weight Standard</Text>
      <View>
        <RadioGroup radioButtons={radioButtons} onPress={onPressRadioButton} />
      </View>
    </View>
  );
};

export default RadioButtonGroup;
