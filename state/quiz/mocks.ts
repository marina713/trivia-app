export const mockData = [
  {
    category: "Entertainment: Video Games",
    type: "boolean",
    difficulty: "hard",
    question: "Is Spiderman faster than Batman?",
    correct_answer: "True",
    incorrect_answers: ["False"],
    userAnswer: "True",
  },
  {
    category: "Entertainment: Video Games",
    type: "boolean",
    difficulty: "hard",
    question: "Is Hulk faster than Batman?",
    correct_answer: "False",
    incorrect_answers: ["True"],
    userAnswer: "True",
  },
  {
    category: "Entertainment: Video Games",
    correct_answer: "True",
    difficulty: "hard",
    incorrect_answers: ["False"],
    question:
      "In &quot;The Sims&quot; series, the most members in a household you can have is 8.",
    type: "boolean",
  },
];
export const mockState = {
  quiz: {
    data: mockData,
    currentIdx: 2,
  },
};
