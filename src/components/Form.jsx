import React, { useContext } from "react";

function Form({ children, currentStep, prevFormStep }) {
  return (
    <div className="form-card">
      {currentStep < 6 && (
        <>
          {currentStep > 0 && (
            <button className="back" onClick={prevFormStep} type="button">
              back
            </button>
          )}

          <span className="steps">Step {currentStep + 1} of 6</span>
        </>
      )}
      {children}
    </div>
  );
}

export default Form;
