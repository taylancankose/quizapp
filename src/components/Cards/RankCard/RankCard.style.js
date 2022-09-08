import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  inner_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 30,
  },
  pp: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  text_container: {
    textAlignVertical: 'center',
    justifyContent: 'center',
  },
  username: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
  score: {
    fontSize: 12,
    color: 'gray',
    fontFamily: 'Poppins-Medium',
  },
  rank: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
});
