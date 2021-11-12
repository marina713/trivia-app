import { storiesOf } from "@storybook/react-native";
import { text } from "@storybook/addon-knobs";
import React from "react";
import ThumbnailQuestion from "../../../components/ThumbnailQuestion";
import CenterView from "../CenterView";
import { mockData } from "../../../state/quiz/mocks";

storiesOf("ThumbnailQuestion", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("with correct answered mock data", () => (
    <ThumbnailQuestion
      item={{
        ...mockData[0],
        question: text("Question text", mockData[0].question),
        userAnswer: text("Answer", mockData[0].userAnswer),
      }}
    />
  ));
