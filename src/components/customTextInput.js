import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const CustomTextInput = ({
  text,
  onChange,
  multiline = false,
  placeholder,
  numberOfLines,
}) => (
  <View style={styles.container}>
    <TextInput
      multiline={multiline}
      numberOfLines={numberOfLines}
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChange}
      value={text}
      placeholderTextColor="#888"
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#f1f1f1',
    flex: 1,
    marginRight: 10,
    color: '#333',
  },
  container: {
    flex: 1,
  },
});

export default CustomTextInput;