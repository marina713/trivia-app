import styled from "styled-components/native";
import { Text } from "../Themed";

type ContainerProps = {
  borderColor: string;
};
type ButtonContainerProps = {
  backgroundColor: string;
};

export const Container = styled.View<ContainerProps>`
  margin-top: 7px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  border-width: 1.5px;
  border-color: ${({ borderColor }: ContainerProps) => borderColor};
`;

export const QuestionContainer = styled.View`
  width: 80%;
`;
export const ButtonContainer = styled.View<ButtonContainerProps>`
  padding: 0 5px;
  width: 57px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }: ButtonContainerProps) =>
    backgroundColor};
  height: 27px;
`;

export const ButtonText = styled(Text)`
  font-size: 12px;
  color: white;
`;

export const QuestionText = styled(Text)`
  font-size: 13px;
`;
