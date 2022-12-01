import { nanoid } from "nanoid";
import { useContext, useEffect, useState } from "react";
import { GivenAnswers } from "../context/GivenAnswersProvider";
import { AnswerBtn, AnswerContainer, Clear } from "../styles/Quiz.styled";

const Answers = ({ question, num, check }) => {
  const [answersArr, setAnswersArr] = useState(getAllAnswers());
  const [checkedAnswers, setCheckedAnswers] = useState([]);
  const { pickedAnswers, setPickedAnswers } = useContext(GivenAnswers);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    if (!check) {
      sessionStorage.setItem(`${question.question}`, JSON.stringify(num));
    } else {
      setChecked(JSON.parse(sessionStorage.getItem(`${question.question}`)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (!check) {
      sessionStorage.setItem(
        `${question.question}1`,
        JSON.stringify(answersArr)
      );
    } else {
      setCheckedAnswers(
        JSON.parse(sessionStorage.getItem(`${question.question}1`))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answersArr]);

  useEffect(() => {
    const picked = answersArr.filter((item) => item.isPicked);
    const isSameQ = (item) => item.que === picked[0]?.que;

    if (picked.length > 0 && pickedAnswers.length === 0) {
      setPickedAnswers((prevPicked) => {
        return [...prevPicked, picked[0]];
      });
    } else if (picked.length > 0 && !pickedAnswers.some(isSameQ)) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answersArr]);

  useEffect(() => {
    if (!check) {
      sessionStorage.setItem("answers", JSON.stringify(pickedAnswers));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pickedAnswers]);

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

  const printAnswers = num?.map((item) => {
    return (
      <AnswerBtn
        key={nanoid()}
        onClick={() => pickAnswer(answersArr[item].id)}
        isPicked={answersArr[item].isPicked}
        check={check}
        correct={answersArr[item].correct}
        disabled={check}
      >
        {answersArr[item].text.split(/&[^;]*;/).join("")}
      </AnswerBtn>
    );
  });

  const afterChecked = checked?.map((item) => {
    return (
      <AnswerBtn
        key={nanoid()}
        onClick={() => pickAnswer(checkedAnswers[item]?.id)}
        isPicked={checkedAnswers[item]?.isPicked}
        check={check}
        correct={checkedAnswers[item]?.correct}
        disabled={check}
      >
        {checkedAnswers[item]?.text.split(/&[^;]*;/).join("")}
      </AnswerBtn>
    );
  });

  return (
    <>
      <AnswerContainer>{!check ? printAnswers : afterChecked}</AnswerContainer>
      <Clear onClick={() => clearPicks(question.question)}>
        Clear my choice
      </Clear>
    </>
  );
};

export default Answers;
