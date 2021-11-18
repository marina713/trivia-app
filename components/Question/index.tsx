import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { submitAnswer } from "../../state/quiz/actions";
import { getCurrentNormalisedCategory } from "../../state/quiz/selectors";
import { Container, ItemContainer, QuestionContainer, ButtonContainer, CategoryContainer, ButtonWrapper, ButtonText, Title, Category } from './styles'
import colors from "../../constants/Colors";

type ComponentProps = { category: string, question: string, onPress: (val: string) => void };
type QuestionProps = { question: string, id: number }
type ButtonProps = { label: string, backgroundColor: string, onPress: (label: string) => void }

export const QuestionComponent = ({ category, question, onPress }: ComponentProps) => (
  <Container>
    <CategoryContainer>
      <Category >
        {category}
      </Category>
    </CategoryContainer>
    <ItemContainer>
      <QuestionContainer>
        <Title>
          {question}
        </Title>
      </QuestionContainer>
      <ButtonContainer>
        <QuestionButton label="False" backgroundColor={colors.primary.red} onPress={onPress} />
        <QuestionButton label="True" backgroundColor={colors.primary.green} onPress={onPress} />
      </ButtonContainer>
    </ItemContainer>
  </Container>);

const Question = ({ question, id }: QuestionProps) => {
  const dispatch = useDispatch();
  const onPress = (val: string) => dispatch(submitAnswer(val, id));
  const category = useSelector(getCurrentNormalisedCategory);

  return <QuestionComponent category={category} question={question} onPress={onPress} />
}

const QuestionButton = ({ label, backgroundColor, onPress }: ButtonProps) => {
  return (
    <ButtonWrapper
      style={{ backgroundColor }}
      onPress={() => onPress(label)}>
      <ButtonText>{label}</ButtonText>
    </ButtonWrapper>
  )
}

export default Question;