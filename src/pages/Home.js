import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  TextInput,
  TouchableOpacity,
} from 'react-native';

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

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={handleAddNewSkill}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>

        <Text style={[styles.title, {marginVertical: 50}]}>My Skills</Text>

        {mySkills.map(item => (
          <TouchableOpacity style={styles.buttonSkill} key={item}>
            <Text style={styles.textSkill}>{item}</Text>
          </TouchableOpacity>
        ))}
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
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
