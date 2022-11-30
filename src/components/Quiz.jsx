import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { QuizContainer } from "../styles/Quiz.styled";
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
    <>
      <QuizContainer>{questionArr}</QuizContainer>
      <button onClick={endQuiz}>End Quiz</button>
    </>
  );
};

export default Quiz;
