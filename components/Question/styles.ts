import styled from "styled-components/native";
import { Button, Text } from "../Themed";

export const Container = styled.View`
  align-self: center;
  width: 90%;
  max-width: 370px;
  margin: 30px;
  border-radius: 25px;
  border-width: 5px;
  border-color: ghostwhite;
  overflow: hidden;
`;

export const ItemContainer = styled.View`
  justify-content: space-between;
`;
export const QuestionContainer = styled.View`
  min-height: 300px;
  margin: 20px 25px 0;
`;
export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 20px 0 25px;
`;
export const CategoryContainer = styled.View`
  background-color: ghostwhite;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  height: 75px;
`;

export const ButtonWrapper = styled(Button)`
  margin: 0 20px;
  border-radius: 15px;
  height: 60px;
  width: 120px;
  justify-content: center;
`;

export const ButtonText = styled(Text)`
  font-size: 20px;
  color: white;
  text-align: center;
`;

export const Title = styled(Text)`
  font-size: 25px;
  line-height: 35px;
  font-weight: bold;
`;

export const Category = styled(Text)`
  font-size: 20px;
  color: #6c757d;
  text-align: center;
  font-weight: bold;
`;
