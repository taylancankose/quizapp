import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import LevelCards from '../../components/Cards/LevelCards/LevelCards';
import {setSelectedLevel} from '../../redux/quizSlice';
import styles from './Home.style';

function Home() {
  const level = useSelector(state => state.quiz.selectedLevel);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const selectLevel = lvl => {
    dispatch(setSelectedLevel(lvl));
    navigation.navigate('Questions');
  };
  console.log(level);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's Play</Text>
      <Text style={styles.subtitle}>Select the level!</Text>

      <LevelCards
        level="level 1"
        title="Newbie"
        colors={['#ED6F9E', '#EB8871']}
        onPress={() => selectLevel('easy')}
      />
      <LevelCards
        level="level 2"
        title="Continuing"
        colors={['#5472EC', '#0DB6FD']}
        onPress={() => selectLevel('medium')}
      />
      <LevelCards
        level="level 3"
        title="Experienced"
        colors={['#A58FD2', '#EEB9E8']}
        onPress={() => selectLevel('hard')}
      />
    </View>
  );
}

export default Home;
