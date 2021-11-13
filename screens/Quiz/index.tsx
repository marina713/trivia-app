import React from 'react';
import { useSelector } from "react-redux";

import Question from '../../components/Question';
import { getData, getCurrentIdx, getCurrentNormalisedQuestion } from "../../state/quiz/selectors";
import { Container, Title } from './styles';

import { RootStackScreenProps } from '../../types';

export default function Quiz({ navigation }: RootStackScreenProps<'Quiz'>) {
  const data = useSelector(getData);
  const currentIdx = useSelector(getCurrentIdx);
  const question = useSelector(getCurrentNormalisedQuestion);

  if (currentIdx + 1 > data.length && data.length) { navigation.navigate("Results") }
  if (!data || !question) { return null }

  return (
    <Container>
      <Question question={question} id={currentIdx} />
      <Title>
        {`${currentIdx + 1} / ${data.length}`}
      </Title>
    </Container>
  );
}