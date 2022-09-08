import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1246',
  },
  header_container: {
    flex: 0.65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_container: {
    flex: 0.35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height / 2,
  },
  header: {
    fontFamily: 'Poppins-Bold',
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
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
  btn2: {
    width: Dimensions.get('window').width / 1.2,
    height: 60,
    borderColor: '#FEC802',
    borderWidth: 2,
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  btn_text: {
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 2,
    fontSize: 18,
    color: 'black',
  },
  btn_text2: {
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 2,
    fontSize: 18,
    color: '#FEC802',
  },
});
