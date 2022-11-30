import { createContext, useState } from "react";

export const GivenAnswers = createContext();

const GivenAnswersProvider = ({ children }) => {
  const [pickedAnswers, setPickedAnswers] = useState([]);

  return (
    <GivenAnswers.Provider
      value={{
        pickedAnswers,
        setPickedAnswers,
      }}
    >
      {children}
    </GivenAnswers.Provider>
  );
};

export default GivenAnswersProvider;
