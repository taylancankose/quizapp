import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import styles from './Questions.style';
import QuestionCards from '../../components/Cards/QuestionCards/QuestionCards';
import {selectAnswer, setPressed} from '../../redux/quizSlice';
import {useNavigation} from '@react-navigation/native';

function Questions() {
  const navigation = useNavigation();
  const level = useSelector(state => state.quiz.selectedLevel);
  const [data, setData] = useState([]);
  const [qNum, setQNum] = useState(0);
  const [databaseScore, setDatabaseScore] = useState();
  const selected = useSelector(state => state.quiz.selectedAnswer);
  const dispatch = useDispatch();
  const score = useSelector(state => state.quiz.score);
  console.log(selected);
  const getQuestions = () => {
    firestore()
      .collection(level)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(snapshot => {
          let arr = snapshot.data();
          setData(prev => [...prev, arr]);
        });
      });
  };

  useEffect(() => {
    getQuestions();
    getScore();
  }, []);
  console.log('live', score);
  console.log('db', databaseScore);
  const getScore = () => {
    firestore()
      .collection('users')
      .get()
      .then(item => {
        item.forEach(e => {
          if (e?._data?.displayName === auth()?.currentUser?.displayName) {
            const usersCollection = firestore()?.collection('users');
            const userDoc = usersCollection?.doc(e.id);
            userDoc.onSnapshot(snap => {
              console.log(snap?._data.scores);
              setDatabaseScore(snap?._data?.scores);
            });
          }
        });
      });
  };
  const nextQuestion = () => {
    setQNum(qNum + 1);
    dispatch(selectAnswer(''));
    dispatch(setPressed(false));
    if (qNum > 8) {
      navigation.navigate('GameOver');
      firestore()
        .collection('users')
        .get()
        .then(item => {
          item.forEach(e => {
            if (e._data.displayName === auth().currentUser.displayName) {
              if (score > databaseScore) {
                firestore()
                  .collection('users')
                  .doc(e.id)
                  .update({scores: score});
              }
            }
          });
        });
    }
  };
  const renderQuestions = ({item}) => (
    <QuestionCards
      item={item}
      answer={data[qNum]?.answer}
      id={data[qNum]?.docID}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.info}>question {qNum + 1} of 10</Text>
        <Text style={styles.question}>{data[qNum]?.question}</Text>
        <View style={styles.question_container}>
          <FlatList data={data[qNum]?.options} renderItem={renderQuestions} />
        </View>
        <View style={styles.btn_container}>
          <TouchableOpacity
            onPress={nextQuestion}
            style={styles.next_btn}
            disabled={selected === '' ? true : false}>
            <Text style={styles.next}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Questions;
