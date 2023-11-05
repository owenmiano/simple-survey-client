import React ,{useContext} from "react";
import { FormContext } from "../context/FormContext";

function Form({ children, currentStep, prevFormStep,questions }) {
    const { submissionSuccessful  } = useContext(FormContext);

  return (
    <div className="form-card">
      {!submissionSuccessful && currentStep < questions.length && (
        <>
          {currentStep > 0 && (
            <button className="previous" onClick={prevFormStep} type="button">
              Previous
            </button>
          )}

          <span className="steps">Step {currentStep + 1} of {questions.length}</span>
        </>
      )}
      {children}
    </div>
    
  );
}

export default Form;
