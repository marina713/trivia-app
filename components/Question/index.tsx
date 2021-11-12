import React from 'react';
import { decode } from 'html-entities';
import { useDispatch, useSelector } from "react-redux";
import { submitAnswer } from "../../state/quiz/actions";
import { getCurrentItem } from "../../state/quiz/selectors";
import { Container, ItemContainer, QuestionContainer, ButtonContainer, CategoryContainer, ButtonWrapper, ButtonText, Title, Category } from './styles'

type ComponentProps = { category: string, question: string, onPress: (val: string) => void };

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
        <QuestionButton label="False" backgroundColor="#e76f51" onPress={onPress} />
        <QuestionButton label="True" backgroundColor="#90be6d" onPress={onPress} />
      </ButtonContainer>
    </ItemContainer>
  </Container>);


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
    <ButtonWrapper
      style={{ backgroundColor }}
      onPress={() => onPress(label)}>
      <ButtonText>{label}</ButtonText>
    </ButtonWrapper>
  )
}


export default Question;