import axios from "axios";
import { useState } from "react";
import NewQuiz from "./NewQuiz";
import Quiz from "./Quiz";

const Main = () => {
  const [newGame, setNewGame] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [settings, setSettings] = useState({
    category: "",
    difficulty: "",
  });

  const url = `https://opentdb.com/api.php?amount=10&category=${settings.category}&difficulty=${settings.difficulty}&type=multiple`;

  const getQuiz = async () => {
    try {
      await axios.get(url).then((res) => setQuestions(res.data.results));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {newGame ? (
        <NewQuiz
          settings={settings}
          setSettings={setSettings}
          getQuiz={getQuiz}
          setNewGame={setNewGame}
        />
      ) : (
        <Quiz questions={questions} />
      )}
    </>
  );
};

export default Main;
