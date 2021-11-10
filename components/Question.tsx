import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from "react-redux";
import { Button, Text } from './Themed';
import { submitAnswer } from "../state/quiz/actions";

const Question = ({ question, id }: { question: string, id: number }) => {
  const dispatch = useDispatch();
  const onPress = (val: string) => {
    dispatch(submitAnswer(val, id))
  }
  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.title}>
          {question}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button style={{ ...styles.button, backgroundColor: "#e76f51" }}
          onPress={() => onPress('False')}>
          <Text style={styles.buttonText}>False</Text>
        </Button>
        <Button style={{ ...styles.button, backgroundColor: "#90be6d" }}
          onPress={() => onPress('True')}>
          <Text style={styles.buttonText}>True</Text>
        </Button>
      </View>
    </View>)
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    minHeight: 400,
    maxWidth: 350,
    margin: 30,
    padding: 25,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: 'ghostwhite',
  },
  questionContainer: {
    flex: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 10,
    alignItems: 'center',
  },
  button: {
    marginTop: 10,
    marginHorizontal: 10,
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 15
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '800'
  },
  title: {
    fontSize: 25,
    lineHeight: 35,
    fontWeight: 'bold',
  },
});

export default Question;