import React, { useContext } from "react";
import Form from "../components/Form";
import { FormContext } from "../context/FormContext";
import FullName from "../components/FullName";
import Email from "../components/Email";
import Gender from "../components/Gender";
import Description from "../components/Description";
import ProgrammingStack from "../components/ProgrammingStack";
import Certificates from "../components/Certificates";
import FormCompleted from "../components/FormCompleted";

function Questions() {
  const {currentQuestion,isLastQuestion , nextFormStep, prevFormStep,questions,currentQuestionIndex } = useContext(FormContext);
  return (
    <div className="form-container">
      <Form currentStep={currentQuestionIndex} prevFormStep={prevFormStep} questions={questions}>
      {questions
  .filter((question, index) => currentQuestionIndex >= index)
  .map((question, index) => (
    <div key={index}>
      {question.name === 'full_name' && (
        <FullName
          formStep={currentQuestionIndex}
          nextFormStep={nextFormStep}
          currentQuestion={question}
        />
      )}
        {question.name === 'email_address' && (
        <Email
          formStep={currentQuestionIndex}
          nextFormStep={nextFormStep}
          currentQuestion={question}
        />
      )}
       {question.name === 'gender' && (
        <Gender
          formStep={currentQuestionIndex}
          nextFormStep={nextFormStep}
          currentQuestion={question}
        />
      )}
      {question.name === 'description' && (
        <Description
          formStep={currentQuestionIndex}
          nextFormStep={nextFormStep}
          currentQuestion={question}
        />
      )}
    
     
      {question.name === 'programming_stack' && (
        <ProgrammingStack
          formStep={currentQuestionIndex}
          nextFormStep={nextFormStep}
          currentQuestion={question}
        />
      )}
      {question.name === 'certificates' && (
        <Certificates
          formStep={currentQuestionIndex}
          nextFormStep={nextFormStep}
          currentQuestion={question}
        />
      )}
    </div>
  ))}

{currentQuestionIndex > questions.length -1 && (
          <FormCompleted />
        )}
      </Form>
    </div>
  );
}

export default Questions;

