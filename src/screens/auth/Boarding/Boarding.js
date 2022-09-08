import React from 'react';
import {Image, SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './Boarding.style';

function Boarding() {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('Login');
  };
  const handleRegister = () => {
    navigation.navigate('Register');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_container}>
        <Image
          style={styles.image}
          source={require('../../../../assets/imgs/start.png')}
        />
        <Text style={styles.header}>My Trivia {'\n'} Challenge yourself!</Text>
      </View>
      <View style={styles.btn_container}>
        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text style={styles.btn_text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2} onPress={handleRegister}>
          <Text style={styles.btn_text2}>Register </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Boarding;
