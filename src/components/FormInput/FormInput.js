import React from 'react';
import {TextInput, Text, View} from 'react-native';
import styles from './FormInput.style';

function FormInput({title, onChange, label}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={title}
        onChangeText={onChange}
        style={styles.input}
      />
    </View>
  );
}

export default FormInput;
