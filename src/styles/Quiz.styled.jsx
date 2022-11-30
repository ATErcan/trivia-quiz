import styled from "styled-components";

export const QuizSection = styled.section`
  background-color: #f5f7fb;
`;

export const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1rem;
  @media screen and (min-width: 576px) {
    width: 80%;
    margin: auto;
    padding: 2rem;
  }
  @media screen and (min-width: 992px) {
    width: 70%;
  }
  @media screen and (min-width: 1200px) {
    width: 60%;
  }
`;

export const QuestionCard = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  border-bottom: 1px solid #dbdef0;
  padding-bottom: 1rem;
  color: #293264;
  font-family: "Karla", sans-serif;
  @media screen and (min-width: 576px) {
    row-gap: 1rem;
  }
`;

export const QuestionText = styled.h3`
  font-size: 1rem;
`;

export const AnswerContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 40% 40%;
  row-gap: 0.6rem;
  justify-content: space-between;
  grid-template-rows: auto;
  @media screen and (min-width: 576px) {
    grid-template-columns: 30% 30%;
    justify-content: space-around;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 20% 20% 20% 20%;
    justify-content: space-between;
  }
`;

export const AnswerBtn = styled.button`
  font-size: 0.8rem;
  border: 1px solid #ccc;
  padding: 0.6rem 0.2rem;
  border-radius: 5px;
  background-color: ${({ isPicked }) => (isPicked ? "#ddd" : "#fff")};
  font-family: "Karla", sans-serif;
  &:hover {
    opacity: 0.7;
  }
`;

export const Clear = styled.p`
  text-align: center;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
`;

export const EndBtn = styled.button`
  width: 10rem;
  height: 3rem;
  background: #4d5b9e;
  border-radius: 10px;
  color: #fff;
  align-self: flex-end;
`;
