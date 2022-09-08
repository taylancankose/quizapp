import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './LevelCards.style';

function LevelCards({level, title, onPress, colors}) {
  return (
    <LinearGradient
      style={styles.container}
      colors={colors}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <TouchableOpacity
        style={styles.btn}
        onPress={onPress}
        android_ripple={{color: 'white'}}>
        <Text style={styles.level}>{level}</Text>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

export default LevelCards;
