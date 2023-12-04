import { createContext, useState, useEffect } from "react";
import { baseUrl } from "../utils/service";
import { XMLParser } from "fast-xml-parser";

export const FormContext = createContext("");

export const FormContextProvider = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [data, setData] = useState({});
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const[submissionSuccessful ,setSubmissionSuccessful]=useState(false);
  // Determine if it's the last question
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  
  // // function to fetch xml data
  // const fetchXmlData = async (apiUrl) => {
  //   const response = await fetch(apiUrl);
  //   const xmlText = await response.text();
  //   const result=await xml2js.parseString(xmlText);
  //   return result;
  // };
  
  // Api to fetch questions
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/questions`);
        const xmlText = await response.text();

        // Use fast-xml-parser for parsing XML
        const parser = new XMLParser();
        const result = parser.parse(xmlText);
        // Access the array of questions based on your XML structure
        const questionsArray = result.questions.question;

        // Set the state with the questions array
        setQuestions(questionsArray);
      } catch (error) {
        console.error('Error fetching/parsing XML data:', error);
      }
    };

    fetchData();
  }, []);
 
  

  const setFormValues = (values) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  // Api to submit responses
  const submitResponses = async (data) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('full_name', data.full_name); 
      formData.append('email_address', data.email_address);
      formData.append('description', data.description); 
      formData.append('gender', data.gender);
      formData.append('programming_stack', data.programming_stack); 
      if (data.pdf && data.pdf.length > 0) {
        for (let i = 0; i < data.pdf.length; i++) {
          formData.append('pdf', data.pdf[i]); // Append each file individually with the same field name
        }
      }
      const response = await fetch(`${baseUrl}/api/questions/responses`, {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setIsLoading(false);
      const responseData = await response.json();
      let newest=responseData.responses;
      setIsLoading(false);
      setSubmissionSuccessful(true);

      if(newest){
        setResponses((prev)=>[...prev,newest]);
        setTotalPages(responseData.totalPages);
      }

    } else {
      console.error('Response not OK:', response.status, response.statusText);
    }
  } catch (error) {
    setIsLoading(false);
    console.error('Request failed:', error);
  }
  };


  // Api to fetch responses
  const fetchResponses = async (page) => {
    try {
      const response = await fetch(`${baseUrl}/api/questions/responses?page=${page}`);
      const xmlText = await response.text();

        // Use fast-xml-parser for parsing XML
        const parser = new XMLParser();
        const result = parser.parse(xmlText);
        // Check if responses is an array before setting the state
      if (Array.isArray(result.responses.response)) {
        setResponses(result.responses.response);
        setTotalPages(result.responses.pagination.totalPages);
      } else if (result.responses.response) {
        // If it's a single response object, convert it to an array
        setResponses([result.responses.response]);
        setTotalPages(result.responses.pagination.totalPages);

      } 
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchResponses(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    fetchResponses(page);
    setCurrentPage(page);
  };


    // filtering of the responses based on email_address
    const filterResponsesByEmail = async (email) => {
      try {
        if (email !=='all')  {
          const response = await fetch(`${baseUrl}/api/questions/responses/${email}`);
          const xmlText = await response.text();
        const parser = new XMLParser();
        const result = parser.parse(xmlText);
        // Check if responses is an array before setting the state
      if (Array.isArray(result.responses.response)) {
        setResponses(result.responses.response);
      } else if (result.responses.response) {
        // If it's a single response object, convert it to an array
        setResponses([result.responses.response]);
      } 
    } else {
      // If email is 'all', fetch all responses
      fetchResponses(currentPage);
    }
      } catch (error) {
        console.error(error);
      }
    }
    const handleFilterResponsesByEmail = (email) => {
      // setCurrentPage(1);
      filterResponsesByEmail(email);
    };
  
// download a certificate by providing the id of the certificate
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
        handleFilterResponsesByEmail,
        submitResponses,
        isLoading,
        submissionSuccessful,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
