import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

interface IButtonProp {
    onPress?: () => void;
    Title: String;
}
export function Button({ onPress, Title }: IButtonProp) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text style={styles.buttonText}>{Title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
