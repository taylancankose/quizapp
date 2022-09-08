import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './StartGame.style';

function StartGame() {
  const navigation = useNavigation();
  const handlePlay = () => {
    navigation.navigate('Home');
  };
  const handleBoard = () => {
    navigation.navigate('Leaderboard');
  };
  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top_container}>
        <Image
          source={require('../../../assets/imgs/start.png')}
          style={styles.img}
        />
        <Text style={styles.title}>Let's Play!</Text>
        <Text style={styles.subtitle}>Play now and challenge yourself</Text>
      </View>
      <View style={styles.bot_container}>
        <TouchableOpacity style={styles.btn} onPress={handlePlay}>
          <Text style={styles.btn_text}>Play Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2} onPress={handleBoard}>
          <Text style={styles.btn_text2}>Leaderboard </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn3} onPress={logout}>
          <Text style={styles.btn_text3}>Logout </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default StartGame;
