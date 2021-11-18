import React from 'react';
import { decode } from 'html-entities';
import { Item } from "../../types";
import { Container, QuestionContainer, ButtonContainer, ButtonText, QuestionText } from './styles';
import colors from "../../constants/Colors";


const ThumbnailQuestion = ({ item }: { item: Item }) => {
  const color = item.correct_answer === item.userAnswer ? colors.primary.green : colors.primary.red;
  return (
    <Container borderColor={color}>
      <QuestionContainer >
        <QuestionText>
          {decode(item.question)}
        </QuestionText>
      </QuestionContainer>
      <ButtonContainer backgroundColor={color} >
        <ButtonText>
          {item.userAnswer}
        </ButtonText>
      </ButtonContainer>
    </Container>
  )
}

export default ThumbnailQuestion;