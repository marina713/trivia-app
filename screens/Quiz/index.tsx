import React, { useEffect } from 'react';
import { useSelector } from "react-redux";

import Question from '../../components/Question';
import { getData, getCurrentIdx, getCurrentNormalisedQuestion } from "../../state/quiz/selectors";
import { Container, Title } from './styles';
import { RootStackScreenProps } from '../../types';

export default function Quiz({ navigation }: RootStackScreenProps<'Quiz'>) {
  const data = useSelector(getData);
  const currentIdx = useSelector(getCurrentIdx);
  const question = useSelector(getCurrentNormalisedQuestion);
  const hasGameFinished = currentIdx + 1 > data.length && data.length;
  useEffect(() => { if (hasGameFinished) { navigation.navigate("Results") } }, [hasGameFinished])

  return !hasGameFinished && data && question ?
    (
      <Container>
        <Question question={question} id={currentIdx} />
        <Title>
          {`${currentIdx + 1} / ${data.length}`}
        </Title>
      </Container>
    ) : null
}