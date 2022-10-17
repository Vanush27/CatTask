import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cat_item_info: {
    marginTop: 6,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: '#20232a',
    borderRadius: 6,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  cat_item_view: {
    padding: 10,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },

  stretch: {
    width: '80%',
    height: 220,
    margin: 'auto',
    borderRadius: 8,
    resizeMode: 'cover',
  },
  cat_life_span: {
    flexDirection: 'row',
    margin: 'auto',
    justifyContent: 'center',
  },
  text_padding: {
    padding: 10,
  },
});
