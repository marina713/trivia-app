import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import { text } from "@storybook/addon-knobs";
import React from "react";
import { QuestionComponent } from "../../../components/Question";
import CenterView from "../CenterView";
import { mockData } from "../../../state/quiz/mocks";

storiesOf("Question", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("with correct answered mock data", () => (
    <QuestionComponent
      category={text("Category text", mockData[0].category)}
      question={text("Question text", mockData[0].question)}
      onPress={action("Answer Clicked")}
    />
  ));
