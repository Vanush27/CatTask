import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cat_item_view: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 15,
  },
  stretch: {
    width: '100%',
    height: 220,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  life_span: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  cat_life_span: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text_padding: {
    padding: 10,
    alignItems: 'center',
  },
  slider: { width: 150, height: 40, alignItems: 'center' },

  weight: {
    width: '50%',
    padding: 10,
    alignItems: 'flex-end',
    textAlign: 'center',
  },
});
