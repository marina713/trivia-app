import React from 'react';
import { decode } from 'html-entities';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { Button, Text } from './Themed';
import { submitAnswer } from "../state/quiz/actions";
import { getCurrentItem } from "../state/quiz/selectors";

type ComponentProps = { category: string, question: string, onPress: (val: string) => void };

export const QuestionComponent = ({ category, question, onPress }: ComponentProps) => (
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

  </View>);


const Question = ({ question, id }: { question: string, id: number }) => {
  const dispatch = useDispatch();
  const onPress = (val: string) => {
    dispatch(submitAnswer(val, id))
  }
  const currentItem = useSelector(getCurrentItem);

  const category = decode(currentItem.category)

  return <QuestionComponent category={category} question={question} onPress={onPress} />
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
    width: '90%',
    maxWidth: 370,
    margin: 30,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: 'ghostwhite',
    overflow: 'hidden',
  },
  itemContainer: {
    justifyContent: 'space-between',
  },
  questionContainer: {
    minHeight: 300,
    marginHorizontal: 25,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 25,
    marginTop: 20,
  },
  button: {
    marginHorizontal: 20,
    borderRadius: 15,
    height: 60,
    width: 120,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
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
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: 75,
  },
});

export default Question;