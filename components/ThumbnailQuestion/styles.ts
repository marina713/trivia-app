import styled from "styled-components/native";
import { Text } from "../Themed";

export const Container = styled.View<any>`
  margin-top: 7px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  border-width: 1.5px;
  border-color: ${(props) => props.borderColor};
`;

export const QuestionContainer = styled.View`
  width: 80%;
`;
export const ButtonContainer = styled.View<any>`
  padding: 0 5px;
  width: 57px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  height: 27px;
`;

export const ButtonText = styled(Text)`
  font-size: 12px;
  color: white;
`;

export const QuestionText = styled(Text)`
  font-size: 13px;
`;
