import React, { useState } from 'react';
import { Text, View } from 'react-native';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';

const SettingScreen = () => {
  const radioButtonsData: RadioButtonProps[] = [
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'metric',
      value: 'metric',
    },
    {
      id: '2',
      label: 'imperial',
      value: 'imperial',
    },
  ];

  const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>(radioButtonsData);

  function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
    setRadioButtons(radioButtonsArray);
  }

  return (
    <View>
      <RadioGroup
        containerStyle={{ color: 'red' }}
        radioButtons={radioButtons}
        onPress={onPressRadioButton}
      />

      <Text />
    </View>
  );
};

export default SettingScreen;
