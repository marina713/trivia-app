import * as React from 'react';
import { useSelector } from 'react-redux';
import * as Animatable from "react-native-animatable";
import { getData } from "../../state/quiz/selectors";
import { Star, StarsContainer } from './styles';

const StarsRating = () => {
  const data = useSelector(getData);

  return (
    <StarsContainer>
      {data.map((item, index) => {
        const source =
          item.correct_answer === item.userAnswer
            ? require(`../../assets/images/star.png`)
            : require(`../../assets/images/star-grey.png`);
        return (
          <Animatable.View
            key={index}
            animation="bounceIn"
            delay={50 + 200 * index}
          >
            <Star source={source} />
          </Animatable.View>
        )
      })}
    </StarsContainer>
  );
}

export default StarsRating;