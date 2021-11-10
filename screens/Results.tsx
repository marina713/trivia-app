import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, ScrollView, Image } from 'react-native';
import * as Animatable from "react-native-animatable";
import { Text, View, Button } from '../components/Themed';

import { getData, getScoreCorrect } from "../state/quiz/selectors";
import { reset } from "../state/quiz/actions";
import { RootStackScreenProps } from '../types';
import ThumbnailQuestion from '../components/ThumbnailQuestion';
import StarsRating from '../components/StarsRating';

export default function ResultsScreen({ navigation }: RootStackScreenProps<'Results'>) {
  const dispatch = useDispatch();
  const data = useSelector(getData);
  const scoreCorrect = useSelector(getScoreCorrect);
  const onPress = () => {
    dispatch(reset());
    navigation.navigate('HomeScreen');
  }

  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <Text style={styles.title}>You scored</Text>
        <Text style={styles.title}>{`${scoreCorrect} / ${data.length}`}</Text>
        <StarsRating />
      </View>
      <ScrollView contentContainerStyle={styles.questionsContainer}>
        {data.map((item, index) => (
          <Animatable.View
            key={index}
            animation="fadeInLeft"
            delay={50 + 200 * index}
          >
            <ThumbnailQuestion key={index} item={item} />
          </Animatable.View>
        ))}
      </ScrollView>
      <Button onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>PLAY AGAIN?</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  scoreContainer: {
    marginBottom: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  questionsContainer: {
    paddingBottom: 23
  },
  button: {
    marginBottom: 50,
    marginTop: 20,
    paddingTop: 16,
    paddingBottom: 20,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderRadius: 35,
    borderColor: 'black'
  },
  buttonText: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  starsContainer: {
    flexDirection: 'row',
    marginVertical: 10
  }
});
