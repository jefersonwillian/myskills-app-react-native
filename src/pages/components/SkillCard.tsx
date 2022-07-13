import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface ISkillCardProp extends TouchableOpacityProps {
  title: String;
}

export function SkillCard({ title, ...rest }: ISkillCardProp) {
  return (
    <TouchableOpacity
      style={styles.buttonSkill}
      {...rest}>
      <Text style={styles.textSkill}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
