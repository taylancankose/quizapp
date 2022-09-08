import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './RankCard.style';

function RankCard({item}) {
  console.log(item);
  return (
    <View style={styles.inner_container}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={styles.pp}
          source={require('../../../../assets/imgs/pp.jpg')}
        />
        <View style={styles.text_container}>
          <Text style={styles.username}>{item.displayName}</Text>
          <Text style={styles.score}>
            {item.scores ? item.scores : '0'} points
          </Text>
        </View>
      </View>
      <Text style={styles.rank}>#{item.rank}</Text>
    </View>
  );
}

export default RankCard;
