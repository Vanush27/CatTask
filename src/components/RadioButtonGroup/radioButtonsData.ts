import { RadioButtonProps } from 'react-native-radio-buttons-group';

import { SETTING_WEIGHT_ACTIVE_TYPE } from '../../constants';

export const radioButtonsData: RadioButtonProps[] = [
  {
    id: '1',
    label: '   Metric  ',
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
