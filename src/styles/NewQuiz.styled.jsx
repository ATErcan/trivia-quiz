import styled from "styled-components";

export const NewQuizContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #f5f7fb;
`;

export const GameOptions = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  color: #293264;
  font-family: "Karla", sans-serif;
  width: 90%;
  @media screen and (min-width: 576px) {
    width: 70%;
  }
  @media screen and (min-width: 768px) {
    max-width: 35rem;
  }
`;

export const QuizHeading = styled.h1`
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Instructions = styled.p`
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
  width: 100%;
`;

export const DropdownLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
`;

export const DropdownList = styled.select`
  padding: 0.6rem 0.2rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;
`;

export const Options = styled.option``;

export const StartBtn = styled.button`
  color: #fff;
  border: none;
  width: 10rem;
  height: 3rem;
  background: #4d5b9e;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
