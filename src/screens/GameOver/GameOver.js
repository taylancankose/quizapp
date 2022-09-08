import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {resetScore, selectAnswer, setPressed} from '../../redux/quizSlice';
import styles from './GameOver.style';

function GameOver() {
  const dispatch = useDispatch();
  const score = useSelector(state => state.quiz.score);
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('Home');
    dispatch(selectAnswer(''));
    dispatch(setPressed(false));
    dispatch(resetScore());
  };
  const handleHome = () => {
    navigation.navigate('StartGame');
    dispatch(selectAnswer(''));
    dispatch(setPressed(false));
    dispatch(resetScore());
  };
  return (
    <View style={styles.container}>
      <View style={styles.img_container}>
        <Image
          style={styles.img}
          source={require('../../../assets/imgs/game-over-bg.png')}
        />
      </View>
      <View>
        <View style={styles.inner_container}>
          <View style={styles.line} />
          <View>
            <Text style={styles.text}>Your score</Text>
          </View>
          <View style={styles.line} />
        </View>
        <View style={styles.score_container}>
          <Text style={styles.score}>{score}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.btn} onPress={handlePress}>
            <Icon style={styles.icon} name="restore" size={30} color="white" />
            <Text style={styles.play_again}>Play Again</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2} onPress={handleHome}>
            <Text style={styles.btn_text2}>Go Home Page</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default GameOver;
