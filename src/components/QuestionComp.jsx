import { useState } from "react";
import { QuestionCard, QuestionText } from "../styles/Quiz.styled";
import Answers from "./Answers";

const QuestionComp = ({ question, check }) => {
  const [num] = useState(generateRandomNumbers());

  function generateRandomNumbers() {
    let numbers = [];
    while (numbers.length < 4) {
      let r = Math.floor(Math.random() * 4);
      if (numbers.indexOf(r) === -1) numbers.push(r);
    }
    return numbers;
  }

  return (
    <QuestionCard>
      <QuestionText>{question.question.split(/&[^;]*;/).join("")}</QuestionText>
      {num.length > 0 && (
        <Answers question={question} num={num} check={check} />
      )}
    </QuestionCard>
  );
};

export default QuestionComp;
