import axios from "axios";
import { useState } from "react";
import NewQuiz from "./NewQuiz";
import Quiz from "./Quiz";
import Result from "./Result";

const Main = () => {
  const [newGame, setNewGame] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [results, setResults] = useState(false);
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

  if (newGame) {
    return (
      <NewQuiz
        settings={settings}
        setSettings={setSettings}
        getQuiz={getQuiz}
        setNewGame={setNewGame}
      />
    );
  } else if (!newGame && !results) {
    return <Quiz questions={questions} setResults={setResults} />;
  } else {
    return (
      <Result
        setNewGame={setNewGame}
        setResults={setResults}
        setSettings={setSettings}
      />
    );
  }
};

export default Main;
