import React from "react";

function Form({ children, currentStep, prevFormStep,questions }) {
  return (
    <div className="form-card">
      {currentStep < questions.length && (
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
