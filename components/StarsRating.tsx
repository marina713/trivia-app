import * as React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Image } from 'react-native';
import * as Animatable from "react-native-animatable";
import { View } from '../components/Themed';

import { getData } from "../state/quiz/selectors";

export default function StarsRating() {
  const data = useSelector(getData);

  return (
    <View style={styles.starsContainer}>
      {data.map((item, index) => {
        const source =
          item.correct_answer === item.userAnswer
            ? require(`../assets/images/star.png`)
            : require(`../assets/images/star-grey.png`);
        return (
          <Animatable.View
            key={index}
            animation="bounceIn"
            delay={50 + 200 * index}
          >
            <Image
              source={source}
              style={styles.star}
            />
          </Animatable.View>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  star: {
    width: 30,
    height: 30,
  },
  starsContainer: {
    flexDirection: 'row',
    marginVertical: 10
  }
});
