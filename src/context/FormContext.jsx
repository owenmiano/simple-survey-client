import { createContext, useState, useEffect } from "react";
import { baseUrl } from "../utils/service";

export const FormContext = createContext("");

export const FormContextProvider = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [data, setData] = useState({});
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  // Determine if it's the last question
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  // Api to fetch questions
  useEffect(() => {
    fetch(`${baseUrl}/api/questions/responses`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((resp) => {
        setResponses(resp);
      })
      .catch((error) => console.error("Failed to fetch questions:", error));
  }, []);

  const setFormValues = (values) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  // Api to fetch responses
  useEffect(() => {
    fetch(`${baseUrl}/api/questions`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((questionns) => {
        setQuestions(questionns);
      })
      .catch((error) => console.error("Failed to fetch questions:", error));
  }, []);

  const downloadCertificate = async(id,fileName) => {

    try {
      const response = await fetch(`${baseUrl}/api/questions/responses/certificates/${id}`);

      if (response.status === 200) {
        // Successfully downloaded certificate, handle the file data here
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName; // Set the desired file name
        a.setAttribute('target', '_blank');
        a.click();
        window.URL.revokeObjectURL(url);
      } else {
        console.error('Failed to download certificate');
      }
    } catch (error) {
      console.error('Error downloading certificate:', error);
    }
  
  };
  const nextFormStep = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const prevFormStep = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  const currentQuestion = questions[currentQuestionIndex];
  return (
    <FormContext.Provider
      value={{
        questions,
        responses,
        isLastQuestion,
        currentQuestionIndex,
        currentQuestion,
        nextFormStep,
        prevFormStep,
        data,
        setFormValues,
        downloadCertificate
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
