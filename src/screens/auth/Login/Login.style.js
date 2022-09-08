import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1246',
  },
  header_container: {
    margin: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
  },
  subtitle: {
    color: 'grey',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  btn: {
    marginTop: 35,
    marginBottom: 15,
    width: Dimensions.get('window').width / 1.2,
    height: 60,
    backgroundColor: '#FEC802',
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  register: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#1F1246',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  btn2: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  login: {
    color: 'white',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
});
