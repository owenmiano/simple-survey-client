import React, { useContext } from 'react'
import { FormContext } from '../context/FormContext';
import { useForm } from "react-hook-form";


function FullName({ formStep, nextFormStep }) {
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
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          {...register("fullName", { required: true })}
        />
        {errors.fullName && (
          <p className="errorText">Full Name is required</p>
        )}
      </div>
      <button className="next">Next</button>
    </form>
  </div>

  )
}

export default FullName