import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet } from 'react-native';
// @ts-ignore
import AnimatedLoader from 'react-native-animated-loader';

import { Text, View, Button } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { setData } from '../state/quiz/actions';


export default function HomeScreen({ navigation }: RootStackScreenProps<'HomeScreen'>) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const getQuestions = async () => {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean');
      const json = await response.json();
      console.log({ results: json.results })
      dispatch(setData(json.results));
    } catch (error) {
      console.error(error);
    } finally {
      navigation.navigate('Quiz');
      setLoading(false);
    }
  }
  const onPress = () => {
    setLoading(true);
    getQuestions();
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome to the</Text>
        <Text style={styles.title}>Trivia Challenge!</Text>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>You will be presented with 10 True or False questions.</Text>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Can you score 100% ?</Text>
        <AnimatedLoader
          source={require('../assets/lotties/loading.json')}
          visible={loading}
          overlayColor="rgba(255,255,255,0.7)"
          animationStyle={styles.lottie}
          speed={1.5} />
      </View>
      <Button onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>BEGIN</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  titleContainer: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1.5
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',

  },
  subtitleContainer: {
    width: '90%',
    alignItems: 'center',
    flex: 1
  },
  subtitle: {
    fontSize: 23,
    textAlign: 'center'
  },
  button: {
    margin: 50,
    paddingTop: 16,
    paddingBottom: 20,
    paddingHorizontal: 45,
    borderWidth: 1,
    borderRadius: 35,
    borderColor: 'black'
  },
  buttonText: {
    fontSize: 27,
    fontWeight: 'bold',
  },
  questionsContainer: {
    paddingBottom: 10
  },
  lottie: {
    width: 130,
    height: 130,
  },
});
