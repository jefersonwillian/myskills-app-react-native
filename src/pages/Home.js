import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  TextInput,
  FlatList,
} from 'react-native';
import {Button} from './components/Button';
import {SkillCard} from './components/SkillCard';

export function Home() {
  const [newSkill, setNewskill] = useState();
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
    setNewskill('');
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Jeferson</Text>
        <TextInput
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor="#555"
          onChangeText={setNewskill}
          value={newSkill}
        />

        <Button Title={'Adicionar'} onPress={handleAddNewSkill} />

        <Text style={[styles.title, {marginVertical: 50}]}>My Skills</Text>

        <FlatList
          data={mySkills}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <SkillCard Title={item} />
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },

  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});
