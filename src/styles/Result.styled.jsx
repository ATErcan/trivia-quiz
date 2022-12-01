import styled from "styled-components";

export const ResultContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Karla", sans-serif;
  color: #293264;
  background-color: #f5f7fb;
`;

export const ResultDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.8rem;
`;

export const ResultTitle = styled.h3`
  font-size: 2rem;
  text-decoration: underline;
  @media screen and (min-width: 576px) {
    font-size: 2.5rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Score = styled.h2`
  font-size: 2.5rem;
  @media screen and (min-width: 576px) {
    font-size: 3rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const AgainBtn = styled.button`
  font-family: "Karla", sans-serif;
  color: #fff;
  width: 10rem;
  height: 3rem;
  border-radius: 10px;
  border: none;
  background-color: #3365e7;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
