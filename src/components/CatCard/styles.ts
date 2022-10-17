import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  item: {
    width: '100%',
    borderBottomWidth: 2,
    borderRadius: 10,
    borderBottomColor: '#608cf5',
    justifyContent: 'center',
    margin: 'auto',
    padding: 10,
  },
  stretch: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  addToFavoritesWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  star_svg: {
    textAlign: 'center',
  },
});
