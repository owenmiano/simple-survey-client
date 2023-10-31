import React, { useContext } from 'react'
import { FormContext } from '../context/FormContext';
import { useForm } from "react-hook-form";


function Email({ formStep, nextFormStep }) {
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
    <div className={formStep === 1 ? "showForm" : "hideForm"}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="formRow">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <p className="errorText">Email is required</p>
        )}
      </div>
      <button className="next">Next</button>
    </form>
  </div>

  )
}

export default Email