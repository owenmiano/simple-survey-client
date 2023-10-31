import React, { useContext } from 'react'
import { FormContext } from '../context/FormContext';
import { useForm } from "react-hook-form";


function Gender({ formStep, nextFormStep }) {
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
    <div className={formStep === 3 ? "showForm" : "hideForm"}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="formRow">
        <p>What's your gender?</p>
        <div className="radio-container">
  <input
    type="radio"
    value="Male"
    id="male"
    name="gender"
    {...register("gender", { required: true })}
  />
  <label htmlFor="male">Male</label>
</div>

<div className="radio-container">
  <input
    type="radio"
    value="Female"
    id="female"
    name="gender"
    {...register("gender", { required: true })}
  />
  <label htmlFor="female">Female</label>
</div>
        {errors.gender && (
          <p className="errorText">Gender is required</p>
        )}
      </div>
      <button className="next">Next</button>
    </form>
  </div>

  )
}

export default Gender