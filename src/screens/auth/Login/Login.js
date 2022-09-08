import {Formik} from 'formik';
import React, {useState} from 'react';
import {Text, SafeAreaView, View, Pressable, Alert} from 'react-native';
import FormInput from '../../../components/FormInput/FormInput';
import styles from './Login.style';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

function Login() {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const handleLogin = async formValues => {
    const {email, password} = formValues;
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  };
  const handleRegister = () => {
    navigation.navigate('Register');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.title}>Login to your accoutn</Text>
        <Text style={styles.subtitle}>Please fill in the form to continue</Text>
      </View>
      <Formik initialValues={form} onSubmit={handleLogin}>
        {({handleChange, handleSubmit, values}) => (
          <View>
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
            <Pressable style={styles.btn} onPress={handleSubmit}>
              <Text style={styles.register}>Login</Text>
            </Pressable>
            <Pressable style={styles.btn2} onPress={handleRegister}>
              <Text style={styles.login}>Don't you have an account?</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default Login;
