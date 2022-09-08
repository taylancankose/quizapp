import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  option: {
    width: Dimensions.get('window').width / 1.15,
    height: 60,
    margin: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 5,
    flexDirection: 'row',
  },
  selected: {
    width: Dimensions.get('window').width / 1.15,
    height: 60,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 5,
  },
  correct_container: {
    borderRadius: 30 / 2,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  incorrect_container: {
    borderRadius: 30 / 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
  },
  option_text: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    marginRight: 20,
    fontFamily: 'Poppins-Medium',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 5,
    alignItems: 'center',
  },
});
