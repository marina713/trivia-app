import React from 'react';
import { decode } from 'html-entities';
import { Item } from "../../types";
import { Container, QuestionContainer, ButtonContainer, ButtonText, QuestionText } from './styles';


const ThumbnailQuestion = ({ item }: { item: Item }) => {
  const color = item.correct_answer === item.userAnswer ? "#90be6d" : "#e76f51";
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
    </Container>)
}

export default ThumbnailQuestion;