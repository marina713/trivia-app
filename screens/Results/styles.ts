import styled from "styled-components/native";
import { Text, View, Button } from "../../components/Themed";

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  padding: 80px 20px 0;
`;
export const Title = styled(Text)`
  font-size: 25px;
  font-weight: bold;
`;
export const ScoreContainer = styled(View)`
  margin-bottom: 10px;
  align-items: center;
`;
export const ButtonReplay = styled(Button)`
  margin: 50px 0 20px;
  padding: 16px 30px 20px;
  border-width: 1px;
  border-radius: 35px;
`;
export const ButtonText = styled(Text)`
  font-size: 23px;
  font-weight: bold;
`;
