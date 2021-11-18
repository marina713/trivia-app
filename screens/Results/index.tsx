import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, FlatList, BackHandler } from 'react-native';
import * as Animatable from "react-native-animatable";
import { useFocusEffect } from '@react-navigation/native';

import { getData, getScoreCorrect } from "../../state/quiz/selectors";
import { reset } from "../../state/quiz/actions";
import { RootStackScreenProps } from '../../types';
import ThumbnailQuestion from '../../components/ThumbnailQuestion';
import StarsRating from '../../components/StarsRating';
import { Container, Title, ScoreContainer, ButtonReplay, ButtonText } from './styles';

export default function ResultsScreen({ navigation }: RootStackScreenProps<'Results'>) {
  const dispatch = useDispatch();
  const data = useSelector(getData);
  const scoreCorrect = useSelector(getScoreCorrect);
  const onPress = () => {
    dispatch(reset());
    navigation.navigate('HomeScreen');
  }

  // Prevents going back to the Quiz
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => true;
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  return (
    <Container>
      <ScoreContainer>
        <Title>You scored</Title>
        <Title>{`${scoreCorrect} / ${data.length}`}</Title>
        <StarsRating />
      </ScoreContainer>
      <FlatList
        data={data}
        keyExtractor={item => item.question}
        contentContainerStyle={styles.questionsContainer}
        renderItem={({ item, index }) => (
          <Animatable.View
            key={index}
            animation="fadeInLeft"
            delay={50 + 200 * index}
          >
            <ThumbnailQuestion key={index} item={item} />
          </Animatable.View>
        )
        } />
      <ButtonReplay onPress={onPress}>
        <ButtonText>PLAY AGAIN?</ButtonText>
      </ButtonReplay>
    </Container>
  );
}

const styles = StyleSheet.create({
  questionsContainer: {
    paddingBottom: 40
  }
});
