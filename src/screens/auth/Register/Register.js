import {Formik} from 'formik';
import React, {useState} from 'react';
import {Text, SafeAreaView, View, Pressable, Alert} from 'react-native';
import FormInput from '../../../components/FormInput/FormInput';
import styles from './Register.style';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

function Register() {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    displayName: '',
    email: '',
    password: '',
    password2: '',
  });
  const handleRegister = async formValues => {
    const {email, password, password2, displayName} = formValues;
    if (password !== password2) {
      Alert.alert('Error', 'Passwords do not match!');
    }
    try {
      await auth()
        .createUserWithEmailAndPassword(email, password, displayName)
        .then(userCredentials => {
          if (userCredentials.user) {
            userCredentials.user.updateProfile({
              displayName: displayName,
            });
          }
        });
      firestore()
        .collection('users')
        .add({
          email,
          displayName,
          score: {},
        })
        .then(() => console.log('added'));
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.title}>Create new account</Text>
        <Text style={styles.subtitle}>Please fill in the form to continue</Text>
      </View>
      <Formik initialValues={form} onSubmit={handleRegister}>
        {({handleChange, handleSubmit, values}) => (
          <View>
            <FormInput
              value={values.displayName}
              title="Full Name"
              onChange={handleChange('displayName')}
            />
            <FormInput
              value={values.email}
              title="Email Adress"
              onChange={handleChange('email')}
            />
            <FormInput
              value={values.password}
              title="Password"
              onChange={handleChange('password')}
            />
            <FormInput
              value={values.password2}
              title="Confirm Password"
              onChange={handleChange('password2')}
            />
            <Pressable style={styles.btn} onPress={handleSubmit}>
              <Text style={styles.register}>Register</Text>
            </Pressable>
            <Pressable style={styles.btn2} onPress={handleLogin}>
              <Text style={styles.login}>Already have an account?</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default Register;
