import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#1F1246',
    flex: 1,
  },
  img_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  img: {
    height: 400,
    width: 400,
  },
  inner_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: 150,
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    textAlignVertical: 'center',
  },
  line: {
    margin: 10,
    flex: 1,
    height: 2.5,
    borderRadius: 2,
    backgroundColor: 'white',
  },
  score: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1,
    fontSize: 32,
    fontFamily: 'Poppins-Bold',
    fontSize: 50,
  },
  score_container: {
    width: Dimensions.get('window').width / 1.7,
    height: 70,
    backgroundColor: '#FEC802',
    marginTop: 20,
    alignSelf: 'center',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  btn: {
    width: Dimensions.get('window').width / 1.7,
    height: 70,
    margin: 30,
    backgroundColor: '#EB8871',
    justifyContent: 'space-around',
    alignSelf: 'center',
    borderRadius: 555,
    elevation: 5,
    flexDirection: 'row',
    borderWidth: 4,
    borderColor: 'white',
  },
  icon: {
    marginLeft: 15,
    textAlignVertical: 'center',
  },
  play_again: {
    marginRight: 15,
    textAlignVertical: 'center',
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    marginTop: 2,
    color: 'white',
  },
  btn_text2: {
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 2,
    fontSize: 18,
    color: '#FEC802',
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
});
