import { useEffect, useState } from "react";
import { QuestionCard, QuestionText } from "../styles/Quiz.styled";

const QuestionComp = ({ question }) => {
  const [num, setNum] = useState(generateRandomNumbers());
  console.log(question);

  /*   useEffect(() => {
    setNum(generateRandomNumbers());
  }, []); */

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
      <QuestionText>Question</QuestionText>
    </QuestionCard>
  );
};

export default QuestionComp;
