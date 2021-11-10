import React from 'react';
import { decode } from 'html-entities';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { Button, Text } from './Themed';
import { submitAnswer } from "../state/quiz/actions";
import { getCurrentItem } from "../state/quiz/selectors";

const Question = ({ question, id }: { question: string, id: number }) => {
  const dispatch = useDispatch();
  const onPress = (val: string) => {
    dispatch(submitAnswer(val, id))
  }
  const currentItem = useSelector(getCurrentItem);

  const category = decode(currentItem.category)

  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <Text style={styles.category} >
          {category}
        </Text>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.questionContainer}>
          <Text style={styles.title}>
            {question}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <QuestionButton label="False" backgroundColor="#e76f51" onPress={onPress} />
          <QuestionButton label="True" backgroundColor="#90be6d" onPress={onPress} />
        </View>
      </View>
    </View>)
}

type Props = { label: string, backgroundColor: string, onPress: (label: string) => void }

const QuestionButton = ({ label, backgroundColor, onPress }: Props) => {
  return (
    <Button style={{ ...styles.button, backgroundColor }}
      onPress={() => onPress(label)}>
      <Text style={styles.buttonText}>{label}</Text>
    </Button>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    minHeight: 500,
    maxWidth: 350,
    margin: 30,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: 'ghostwhite',
    overflow: 'hidden'
  },
  itemContainer: {
    flex: 1,
    padding: 25
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
  },
  title: {
    fontSize: 25,
    lineHeight: 35,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 20,
    color: '#6c757d',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  categoryContainer: {
    backgroundColor: "ghostwhite",
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 18,
    paddingHorizontal: 20
  },
});

export default Question;