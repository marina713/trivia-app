import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, useColorScheme } from 'react-native';
// @ts-ignore
import AnimatedLoader from 'react-native-animated-loader';

import { RootStackScreenProps } from '../../types';
import { requestData } from '../../state/quiz/actions';
import { Container, TitleContainer, Title, SubtitleContainer, Subtitle, ButtonWrapper, ButtonText } from './styles';


export default function HomeScreen({ navigation }: RootStackScreenProps<'HomeScreen'>) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const onSuccess = () => {
    setLoading(false);
    navigation.navigate('Quiz');
  }
  const onFail = () => setLoading(false);
  const onPress = () => {
    setLoading(true);
    dispatch(
      requestData({ onSuccess, onFail })
    );
  }
  const colorScheme = useColorScheme();
  const overlayColor = colorScheme === 'dark' ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.7)";

  return (
    <Container>
      <TitleContainer>
        <Title>Welcome to the</Title>
        <Title>Trivia Challenge!</Title>
      </TitleContainer>
      <SubtitleContainer>
        <Subtitle>You will be presented with 10 True or False questions.</Subtitle>
      </SubtitleContainer>
      <SubtitleContainer>
        <Subtitle>Can you score 100% ?</Subtitle>
        <AnimatedLoader
          source={require('../../assets/lotties/loading.json')}
          visible={loading}
          overlayColor={overlayColor}
          animationStyle={styles.lottie}
          speed={1.5} />
      </SubtitleContainer>
      <ButtonWrapper onPress={onPress}>
        <ButtonText>BEGIN</ButtonText>
      </ButtonWrapper>
    </Container>
  );
}

const styles = StyleSheet.create({
  lottie: {
    width: 130,
    height: 130,
  },
});
