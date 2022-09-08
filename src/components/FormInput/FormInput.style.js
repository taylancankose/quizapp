import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    marginHorizontal: 20,
    marginVertical: 3,
    width: Dimensions.get('window').width / 1.2,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 15,
    paddingLeft: 25,
  },
});
