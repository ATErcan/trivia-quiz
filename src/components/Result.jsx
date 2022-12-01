import {
  AgainBtn,
  ResultContainer,
  ResultDiv,
  ResultTitle,
  Score,
} from "../styles/Result.styled";

const Result = ({ setNewGame, setResults, setSettings }) => {
  const again = () => {
    setNewGame(true);
    setResults(false);
    setSettings({
      category: "",
      difficulty: "",
    });
    sessionStorage.clear();
  };

  return (
    <ResultContainer>
      <ResultDiv>
        <ResultTitle>Your Score</ResultTitle>
        <Score>{JSON.parse(sessionStorage.getItem("score"))}</Score>
        <AgainBtn onClick={again}>Play Again</AgainBtn>
      </ResultDiv>
    </ResultContainer>
  );
};

export default Result;
