import { createContext, useState, useEffect } from "react";

export const FormContext = createContext("");

export const FormContextProvider = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [data, setData] = useState({});
  const [questions, setQuestions] = useState([]);

  // Determine if it's the last question
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  useEffect(() => {
    fetch('/src/questions.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((questionns) =>
      {
      setQuestions(questionns)
    })
      .catch((error) => console.error('Failed to fetch questions:', error));
  }, []);
  

  const setFormValues = (values) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  const nextFormStep = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  const prevFormStep = () =>{
    if (currentQuestionIndex  > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  } 
  const currentQuestion = questions[currentQuestionIndex];
  return (
    <FormContext.Provider
      value={{
        questions,
        isLastQuestion,
        currentQuestionIndex,
        currentQuestion,
        nextFormStep,
        prevFormStep,
        data,
        setFormValues,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
