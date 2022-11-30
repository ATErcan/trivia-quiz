import styled from "styled-components";

export const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;
  padding: 1rem;
  background-color: #f5f7fb;
`;

export const QuestionCard = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  width: 100%;
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
`;

export const AnswerBtn = styled.button`
  font-size: 0.8rem;
  border: 1px solid #ccc;
  padding: 0.6rem 0;
  border-radius: 5px;
  background-color: ${({ isPicked }) => (isPicked ? "#ddd" : "#fff")};
  &:hover {
    opacity: 0.7;
  }
`;

export const Clear = styled.p`
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
