import React, { useContext } from 'react'
import { FormContext } from '../context/FormContext';
import { useForm } from "react-hook-form";


function ProgrammingStack({ formStep, nextFormStep }) {
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
      <p>Select at least one option:</p>
  <label>
    <input
      type="checkbox"
      {...register("skills", { required: true })}
      value="SQL"
    />
    SQL
  </label>
  <label>
    <input
      type="checkbox"
      {...register("skills", { required: true })}
      value="VUE"
    />
    Vue
  </label>
  <label>
    <input
      type="checkbox"
      {...register("skills", { required: true })}
      value="REACT"
    />
    REACT
  </label>
  <label>
    <input
      type="checkbox"
      {...register("skills", { required: true })}
      value="Postgres"
    />
    Postgres
  </label>
  <label>
    <input
      type="checkbox"
      {...register("skills", { required: true })}
      value="MYSQL"
    />
    MYSQL
  </label>
  <label>
    <input
      type="checkbox"
      {...register("skills", { required: true })}
      value="MSSQL"
    />
    MSSQL
  </label>
  <label>
    <input
      type="checkbox"
      {...register("skills", { required: true })}
      value="JAVA"
    />
    JAVA
  </label>
  <label>
    <input
      type="checkbox"
      {...register("skills", { required: true })}
      value="PHP"
    />
    PHP
  </label>
  <label>
    <input
      type="checkbox"
      {...register("skills", { required: true })}
      value="GO"
    />
    GO
  </label>
  <label>
    <input
      type="checkbox"
      {...register("skills", { required: true })}
      value="RUST"
    />
    RUST
  </label>
        {errors.skills && (
          <p className="errorText">Please select at least one skill</p>
        )}
      </div>
      <button className="next">Next</button>
    </form>
  </div>

  )
}

export default ProgrammingStack