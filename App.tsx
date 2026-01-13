import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react'

export default function App() {

const [age, setAge] = useState<string>('')

const ageAsNumber = age  !== '' && !isNaN(Number(age)) ? Number(age) : 0
const lower: Number = ageAsNumber ? ((220 - ageAsNumber) * 0.65) : 0
const upper: Number = ageAsNumber ? ((220 - ageAsNumber) * 0.85) : 0


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
      <Text>Enter your age:</Text>
      <TextInput style={styles.input}
        placeholder="age"
        keyboardType="number-pad"
        onChangeText={setAge}
      />
      <Text>Lower limit: {lower.toFixed(2)} bpm</Text>
      <Text>Upper limit: {upper.toFixed(2)} bpm</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingTop: 100,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderColor: '#808080',
    borderWidth: 1,
    width: 50,
    borderRadius: 5,
  }
});
