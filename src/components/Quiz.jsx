import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { EndBtn, QuizContainer, QuizSection } from "../styles/Quiz.styled";
import QuestionComp from "./QuestionComp";

const Quiz = ({ questions, setResults }) => {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    sessionStorage.setItem("score", JSON.stringify(points));
  }, [points]);

  const questionArr = questions?.map((question) => {
    return <QuestionComp key={nanoid()} question={question} />;
  });

  const endQuiz = () => {
    const final = JSON.parse(sessionStorage.getItem("answers"));
    console.log(final);
    final.map((answer) => {
      return answer.correct
        ? setPoints((prevPoints) => (prevPoints += 10))
        : setPoints((prevPoints) => (prevPoints -= 3));
    });
    setResults(true);
  };

  console.log(points);
  return (
    <QuizSection>
      <QuizContainer>
        {questionArr}
        <EndBtn onClick={endQuiz}>End Quiz</EndBtn>
      </QuizContainer>
    </QuizSection>
  );
};

export default Quiz;
