import React, {useEffect, useState} from 'react';
import {Button, FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import styles from './LeaderBoard.style';
import RankCard from '../../components/Cards/RankCard/RankCard';

function LeaderBoard() {
  const [users, setUsers] = useState([]);
  const getScores = async () => {
    await firestore()
      .collection('users')
      .get()
      .then(snap => {
        snap.forEach(e => {
          const data = e.data();
          setUsers(arr => [...arr, data]);
        });
      });
  };

  useEffect(() => {
    getScores();
  }, []);

  const rot = users.sort((a, b) => a.scores < b.scores);
  Object.keys(users).forEach(function (key) {
    var user = users[key];
    console.log(user.scores);
    user.rank = rot.indexOf(user) + 1;
  });

  const renderLeaders = ({item}) => <RankCard item={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <View style={styles.img_container}>
        <Image
          source={require('../../../assets/imgs/leader.png')}
          style={styles.image}
        />
      </View>
      <FlatList data={rot} renderItem={renderLeaders} />
    </SafeAreaView>
  );
}

export default LeaderBoard;
