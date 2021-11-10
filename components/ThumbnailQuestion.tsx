import React from 'react';
import { View, StyleSheet } from 'react-native';
import { decode } from 'html-entities';
import { Text } from './Themed';
import { Item } from "../types";


const ThumbnailQuestion = ({ item }: { item: Item }) => {
  const color = item.correct_answer === item.userAnswer ? "#90be6d" : "#e76f51";
  return (
    <View style={{ ...styles.container, borderColor: color }}>
      <View style={styles.questionContainer} >
        <Text style={styles.question}>
          {decode(item.question)}
        </Text>
      </View>
      <View style={{ ...styles.buttonContainer, backgroundColor: color }} >
        <Text style={styles.buttonText}> {item.userAnswer}</Text>
      </View>
    </View>)
}

const styles = StyleSheet.create({
  container: {
    marginTop: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1.5
  },
  buttonContainer: {
    paddingVertical: 5,
    width: 57,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 12,
    color: 'white',
  },
  question: {
    fontSize: 13,
  },
  questionContainer: {
    width: '80%',
  }
});

export default ThumbnailQuestion;