import { useState } from "react";
import { TextInput, View, Alert, StyleSheet } from 'react-native';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

export default function StartGameScreen({ onPickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('');
  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  }
  const resetInputHandler = () => {
    setEnteredNumber('');
  }
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }
    onPickedNumber(chosenNumber);
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Guess my number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput style={styles.numberInput}
          maxLength={2}
          keyboardType='number-pad'
          value={enteredNumber}
          onChangeText={numberInputHandler}
          autoCapitalize='none'
          autoCorrect={false} />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    textAlign: 'center',
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    borderBottomColor: Colors.accent500
  }
});