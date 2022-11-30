import { nanoid } from "nanoid";
import { useContext, useEffect, useState } from "react";
import { GivenAnswers } from "../context/GivenAnswersProvider";
import { AnswerBtn, AnswerContainer, Clear } from "../styles/Quiz.styled";

const Answers = ({ question, num }) => {
  const [answersArr, setAnswersArr] = useState(getAllAnswers());
  const { pickedAnswers, setPickedAnswers } = useContext(GivenAnswers);

  useEffect(() => {
    const picked = answersArr.filter((item) => item.isPicked);
    const isSameA = (item) => item.text === picked[0]?.text;
    const isSameQ = (item) => item.que === picked[0]?.que;

    if (picked.length > 0 && pickedAnswers.length === 0) {
      setPickedAnswers((prevPicked) => {
        return [...prevPicked, picked[0]];
      });
      console.log("something");
    } else if (picked.length > 0 && !pickedAnswers.some(isSameQ)) {
      console.log("first");
      setPickedAnswers((prevPicked) => {
        return [...prevPicked, picked[0]];
      });
    } else if (picked.length > 0 && pickedAnswers.some(isSameQ)) {
      setPickedAnswers((prevPicked) => {
        return prevPicked.filter((pick) => pick.que !== picked[0].que);
      });
      setPickedAnswers((prevPicked) => {
        return [...prevPicked, picked[0]];
      });
    }
  }, [answersArr]);

  useEffect(() => {
    sessionStorage.setItem("answers", JSON.stringify(pickedAnswers));
  }, [pickedAnswers]);

  console.log(pickedAnswers);

  function getAllAnswers() {
    const allAnwers = [];
    allAnwers.push({
      text: question.correct_answer,
      isPicked: false,
      correct: true,
      id: nanoid(),
      que: question?.question,
    });
    question.incorrect_answers.map((answer) => {
      return allAnwers.push({
        text: answer,
        isPicked: false,
        correct: false,
        id: nanoid(),
        que: question.question,
      });
    });
    return allAnwers;
  }

  const pickAnswer = (id) => {
    setAnswersArr((prevAnswers) => {
      return prevAnswers.map((answer) => {
        return answer.id === id
          ? { ...answer, isPicked: true }
          : { ...answer, isPicked: false };
      });
    });
  };

  const clearPicks = (que) => {
    setAnswersArr((prevAnswers) => {
      return prevAnswers.map((answer) => {
        return { ...answer, isPicked: false };
      });
    });
    setPickedAnswers((prevPicked) => {
      return prevPicked.filter((pick) => pick.que !== que);
    });
  };

  const printAnswers = num.map((item) => {
    return (
      <AnswerBtn
        key={item}
        onClick={() => pickAnswer(answersArr[item].id)}
        isPicked={answersArr[item].isPicked}
      >
        {answersArr[item].text.split(/&[^;]*;/).join("")}
      </AnswerBtn>
    );
  });

  //   console.log(answersArr);

  return (
    <>
      <AnswerContainer>{printAnswers}</AnswerContainer>
      <Clear onClick={() => clearPicks(question.question)}>
        Clear my choice
      </Clear>
    </>
  );
};

export default Answers;
