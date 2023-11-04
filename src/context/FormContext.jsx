import { createContext, useState, useEffect } from "react";
import { baseUrl } from "../utils/service";

export const FormContext = createContext("");

export const FormContextProvider = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [data, setData] = useState({});
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Determine if it's the last question
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  // Api to fetch questions
  useEffect(() => {
    fetch(`${baseUrl}/api/questions`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((resp) => {
        setQuestions(resp);
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
  const fetchResponses = async (page) => {
    try {
      const response = await fetch(`${baseUrl}/api/questions/responses?page=${page}`);
      const data = await response.json();
      setResponses(data.responses);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchResponses(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


    // Function to filter responses by email
    const filterResponsesByEmail = async (email) => {

      try {
        if (email !=='all')  {
          const response = await fetch(`${baseUrl}/api/questions/responses/${email}`);
          const data = await response.json();
          setResponses(data.responses);
          setTotalPages(data.totalPages);
        } else {
          fetchResponses(currentPage);

        }
      } catch (error) {
        console.error(error);
      }
    }
    const handleFilterResponsesByEmail = (email) => {
      setCurrentPage(1);
      filterResponsesByEmail(email);
    };
  

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
        downloadCertificate,
        handlePageChange,
        totalPages,
        currentPage,
        handleFilterResponsesByEmail
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
