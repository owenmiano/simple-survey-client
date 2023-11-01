import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { useForm } from "react-hook-form";

function Gender({ formStep, nextFormStep, currentQuestion }) {
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
    <div className={formStep === 2 ? "showForm" : "hideForm"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formRow">
          <p>{currentQuestion.text}</p>
          <div className="radio-container">
            {currentQuestion.options.map((option) => (
              <div key={option} className="radio-option">
                <input
                  type={currentQuestion.type}
                  value={option}
                  id={option}
                  name={currentQuestion.name}
                  {...register(currentQuestion.name, { required: currentQuestion.required === 'yes' })}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>

          {errors[currentQuestion.name]&& (
      <p className="errorText">{currentQuestion.name} is required</p>
    )}
        </div>
        <button className="next">Next</button>
      </form>
    </div>
  );
}

export default Gender;
