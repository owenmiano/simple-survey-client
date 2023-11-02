import React, { useContext } from 'react'
import { FormContext } from '../context/FormContext';
import { useForm } from "react-hook-form";


function ProgrammingStack({ formStep, nextFormStep,currentQuestion }) {
  const { setFormValues } = useContext(FormContext);

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: "all" });

  const onSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };
  return (
    <div className={formStep === 4 ? "showForm" : "hideForm"}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="formRow">
      <p>{currentQuestion.text}</p>
      <div className="checkbox-container">
    {currentQuestion.options.map((option) => (
      <div key={option} className="checkbox-option">
        <input
          type={currentQuestion.type}
          value={option}
          id={option}
          name={currentQuestion.name}
          {...register(currentQuestion.name, {
            required: currentQuestion.required === 'yes',
          })}
        />
        <label htmlFor={option}>{option}</label>
      </div>
    ))}
  </div>
  
        {errors[currentQuestion.name] && (
          <p className="errorText">Please select at least one skill</p>
        )}
      </div>
      <button className="next">Next</button>
    </form>
  </div>

  )
}

export default ProgrammingStack