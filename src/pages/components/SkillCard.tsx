import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

interface ISkillCardProp {
  Title: String;
}
export function SkillCard({ Title }: ISkillCardProp) {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{Title}</Text>
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
