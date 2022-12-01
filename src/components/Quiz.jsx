import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import {
  BtnsContainer,
  CheckBtn,
  EndBtn,
  QuizContainer,
  QuizSection,
} from "../styles/Quiz.styled";
import QuestionComp from "./QuestionComp";

const Quiz = ({ questions, setResults }) => {
  const [points, setPoints] = useState(
    JSON.parse(sessionStorage.getItem("score")) || 0
  );
  const [check, setCheck] = useState(false);

  useEffect(() => {
    sessionStorage.setItem("score", JSON.stringify(points));
  }, [points]);

  const questionArr = questions?.map((question) => {
    return <QuestionComp key={nanoid()} question={question} check={check} />;
  });

  console.log(points);

  const endQuiz = () => {
    setResults(true);
  };

  const checkAnswers = () => {
    const final = JSON.parse(sessionStorage.getItem("answers"));
    console.log(final);
    final.map((answer) => {
      return answer.correct
        ? setPoints((prevPoints) => (prevPoints += 10))
        : setPoints((prevPoints) => (prevPoints -= 3));
    });
    setCheck(true);
  };

  return (
    <QuizSection>
      <QuizContainer>
        {questionArr}
        <BtnsContainer>
          <CheckBtn onClick={checkAnswers} disabled={check} check={check}>
            Check
          </CheckBtn>
          <EndBtn onClick={endQuiz} disabled={!check} check={check}>
            End Quiz
          </EndBtn>
        </BtnsContainer>
      </QuizContainer>
    </QuizSection>
  );
};

export default Quiz;
