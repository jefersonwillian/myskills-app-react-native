import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  TextInput,
  FlatList,
} from 'react-native';
import { Button } from './components/Button';
import { SkillCard } from './components/SkillCard';

interface ISkillDate {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewskill] = useState('');
  const [mySkills, setMySkills] = useState<Array<ISkillDate>>([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill() {
    const data: ISkillDate = {
      id: String(new Date().getTime()),
      name: newSkill,
    };
    setMySkills(oldState => [...oldState, data]);
    setNewskill('');
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ))
    
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGretting('Good Morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting('Good Aftermoon');
    } else {
      setGretting('Good Night');
    }
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Jeferson</Text>
        <Text style={styles.gretting}>{gretting}</Text>
        <TextInput
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor="#555"
          onChangeText={setNewskill}
          value={newSkill}
        />

        <Button title={'Adicionar'} onPress={handleAddNewSkill} disabled={!newSkill} />

        <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

        <FlatList
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <SkillCard title={item.name} onPress={() => handleRemoveSkill(item.id) } />}
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
  gretting: {
    color: '#fff',
  },
});
