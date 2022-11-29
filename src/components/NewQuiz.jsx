import { useState } from "react";
import {
  DropdownContainer,
  DropdownLabel,
  DropdownList,
  Options,
  GameOptions,
  NewQuizContainer,
  StartBtn,
} from "../styles/NewQuiz.styled";

const NewQuiz = ({ settings, setSettings, getQuiz, setNewGame }) => {
  const handleChange = (e) => {
    setSettings((prevSettings) => {
      return {
        ...prevSettings,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getQuiz();
    setNewGame(false);
  };

  return (
    <NewQuizContainer>
      <GameOptions onSubmit={handleSubmit}>
        <DropdownContainer>
          <DropdownLabel>Category</DropdownLabel>
          <DropdownList
            name="category"
            value={settings.category}
            onChange={handleChange}
            required
          >
            <Options value="" disabled>
              -Select a Game Category-
            </Options>
            <Options value="9">General Knowledge</Options>
            <Options value="10">Entertainment: Books</Options>
            <Options value="11">Entertainment: Film</Options>
            <Options value="12">Entertainment: Music</Options>
            <Options value="13">Entertainment: Musicals & Theatres</Options>
            <Options value="14">Entertainment: Television</Options>
            <Options value="15">Entertainment: Video Games</Options>
            <Options value="16">Entertainment: Board Games</Options>
            <Options value="17">Science & Nature</Options>
            <Options value="18">Science: Computers</Options>
            <Options value="19">Science: Mathematics</Options>
            <Options value="20">Mythology</Options>
            <Options value="21">Sports</Options>
            <Options value="22">Geography</Options>
            <Options value="23">History</Options>
            <Options value="24">Politics</Options>
            <Options value="25">Art</Options>
            <Options value="26">Celebrities</Options>
            <Options value="27">Animals</Options>
          </DropdownList>
        </DropdownContainer>
        <DropdownContainer>
          <DropdownLabel>Difficulty</DropdownLabel>
          <DropdownList
            name="difficulty"
            value={settings.difficulty}
            onChange={handleChange}
            required
          >
            <Options value="" disabled>
              -Select a Game Difficulty-
            </Options>
            <Options value="easy">Easy</Options>
            <Options value="medium">Medium</Options>
            <Options value="hard">Hard</Options>
          </DropdownList>
        </DropdownContainer>

        <StartBtn type="submit">Start Quiz</StartBtn>
      </GameOptions>
    </NewQuizContainer>
  );
};

export default NewQuiz;
