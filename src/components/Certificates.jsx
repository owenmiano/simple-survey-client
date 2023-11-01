import React, { useContext } from 'react'
import { FormContext } from '../context/FormContext';
import { useForm } from "react-hook-form";


function Certificates({ formStep, nextFormStep,currentQuestion }) {
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
    <div className={formStep === 5 ? "showForm" : "hideForm"}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="formRow">
      <p>{currentQuestion.text}</p>
    <input
      type={currentQuestion.type}
      id={currentQuestion.name}
      accept="application/pdf"
      {...register("certificate", { required: true })}
      multiple
    />

        {errors.certificate && (
          <p className="errorText">Upload atleast one of your certificates</p>
        )}
      </div>
      <button className="next">Submit</button>
    </form>
  </div>

  )
}

export default Certificates