import React, { useContext } from 'react'
import { FormContext } from '../context/FormContext';


function FormCompleted() {
  const { data } = useContext(FormContext);
  console.log(data)
  return (
    <div className="showForm">
    <h2>Thank you for completing the survey! 🎉 </h2>
      <p>Your feedback is important to us.</p>
      <p>{JSON.stringify(data)}</p>
      <p>{JSON.stringify(data)}</p>
      <p>{JSON.stringify(data)}</p>
      <p>{JSON.stringify(data)}</p>
      <p>{JSON.stringify(data)}</p>
      <p>{JSON.stringify(data)}</p>
    </div>
   

  )
}

export default FormCompleted