import React, { useContext } from 'react'
import { FormContext } from '../context/FormContext';
import { useForm } from "react-hook-form";


function Description({ formStep, nextFormStep }) {
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
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <p className="errorText">Description is required</p>
        )}
      </div>
      <button className="next">Next</button>
    </form>
  </div>

  )
}

export default Description