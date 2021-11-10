import React from 'react';
import { StyleSheet } from 'react-native';
import { decode } from 'html-entities';
import { useSelector } from "react-redux";

import Question from '../components/Question';
import { View, Text } from '../components/Themed';
import { getData, getCurrentIdx, getCurrentItem } from "../state/quiz/selectors";

import { RootStackScreenProps } from '../types';

export default function Quiz({ navigation }: RootStackScreenProps<'Quiz'>) {
  const data = useSelector(getData);
  const currentIdx = useSelector(getCurrentIdx);
  const currentItem = useSelector(getCurrentItem);


  if (currentIdx + 1 > data.length && data.length) { navigation.navigate("Results") }
  if (!data || !currentItem) { return null }

  const question = decode(currentItem.question)

  return (
    <View style={styles.container}>
      <Question question={question} id={currentIdx} />
      <Text>
        {`${currentIdx + 1} / ${data.length}`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'flex-end',
    height: 90,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50
  }
});
