import * as React from "react";
import renderer from "react-test-renderer";

import ThumbnailQuestion from "../ThumbnailQuestion";
import { mockData } from "../../state/quiz/mocks";

it(`renders correctly`, () => {
  const tree = renderer
    .create(<ThumbnailQuestion item={mockData[0]} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
