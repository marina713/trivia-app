import styled from "styled-components/native";
import { Text, View, Button } from "../../components/Themed";

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  padding: 80px 20px 0;
`;
export const TitleContainer = styled(View)`
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  flex: 1.5;
`;
export const Title = styled(Text)`
  font-size: 35px;
  font-weight: bold;
`;
export const SubtitleContainer = styled(View)`
  flex: 1;
  width: 90%;
  align-items: center;
`;
export const Subtitle = styled(Text)`
  font-size: 23px;
  text-align: center;
`;
export const ButtonWrapper = styled(Button)`
  margin: 50px;
  padding: 15px 45px 18px;
  border-width: 1px;
  border-radius: 35px;
`;
export const ButtonText = styled(Text)`
  font-size: 27px;
  font-weight: bold;
`;
