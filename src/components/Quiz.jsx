import { nanoid } from "nanoid";
import { useState } from "react";
import { QuizContainer } from "../styles/Quiz.styled";
import QuestionComp from "./QuestionComp";

const Quiz = ({ questions }) => {
  const questionArr = questions?.map((question) => {
    return <QuestionComp key={nanoid()} question={question} />;
  });

  return <QuizContainer>{questionArr}</QuizContainer>;
};

export default Quiz;
