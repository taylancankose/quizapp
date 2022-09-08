import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {
  decreaseScore,
  increaseScore,
  selectAnswer,
  setPressed,
} from '../../../redux/quizSlice';
import styles from './QuestionCards.style';

function QuestionCards({item, answer, id}) {
  const dispatch = useDispatch();
  const selected = useSelector(state => state.quiz.selectedAnswer);
  const pressed = useSelector(state => state.quiz.pressed);
  const choose = () => {
    dispatch(setPressed());
    dispatch(selectAnswer(item));
    if (item === answer) {
      dispatch(increaseScore());
    } else {
      dispatch(decreaseScore());
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.option,
        pressed && styles.selected,
        {
          backgroundColor:
            pressed & (item === answer)
              ? 'green'
              : item === selected
              ? 'red'
              : 'white',
        },
      ]}
      onPress={choose}
      disabled={pressed & selected ? true : false}>
      <Text style={styles.option_text}>{item}</Text>
      {pressed && item === answer ? (
        <View style={styles.correct_container}>
          <Icon
            style={styles.icon}
            name="checkbox-marked-circle"
            size={25}
            color="white"
          />
        </View>
      ) : item === selected ? (
        <View style={styles.incorrect_container}>
          <Icon
            style={styles.icon}
            name="close-circle"
            size={25}
            color="white"
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
}

export default QuestionCards;
