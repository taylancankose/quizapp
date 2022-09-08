import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1246',
  },
  top_container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 400,
    width: 400,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
  },
  bot_container: {
    margin: 25,
    justifyContent: 'center',
    alignItems: 'center',
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
  btn3: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  btn_text3: {
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 2,
    fontSize: 16,
    color: 'white',
  },
});
