import {Dimensions, StyleSheet} from 'react-native';

export const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
    borderRadius: 35,
    height: deviceHeight < 400 ? 100 : 150,
    elevation: 5,
  },
  btn: {
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius: 35,
    height: deviceHeight < 400 ? 100 : 150,
  },
  level: {
    marginBottom: 5,
    fontSize: 16,
    color: 'white',
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
