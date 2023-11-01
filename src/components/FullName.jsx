import React, { useContext } from 'react'
import { FormContext } from '../context/FormContext';
import { useForm } from "react-hook-form";


function FullName({ formStep, nextFormStep,currentQuestion}) {
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
    <div className={formStep === 0 ? "showForm" : "hideForm"}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="formRow">
 
    <p>{currentQuestion.text}</p>
    <input
      type={currentQuestion.type}
      id={currentQuestion.name}
      {...register(currentQuestion.name,  { required: currentQuestion.required === 'yes' })}
      placeholder={currentQuestion.description}
    />
    {errors[currentQuestion.name]&& (
      <p className="errorText">{currentQuestion.name} is required</p>
    )}
 
      </div>
      <button className="next">Next</button>
    </form>
  </div>

  )
}

export default FullName