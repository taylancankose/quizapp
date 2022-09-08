import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#1F1246',
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
  },
  inner_container: {
    marginTop: 25,
  },
  info: {
    color: '#C9C4C6',
    marginLeft: 20,
    fontSize: 16,
  },
  question_container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    color: 'white',
    margin: 20,
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
  },
  btn_container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  next_btn: {
    width: Dimensions.get('window').width / 1.15,
    backgroundColor: 'white',
    height: 60,
    margin: 20,
    backgroundColor: '#FEC802',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 5,
  },
  next: {
    fontFamily: 'Poppins-SemiBold',
    color: '#1F1246',
    fontSize: 20,
    textAlignVertical: 'center',
  },
});
