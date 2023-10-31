import React, { useContext } from 'react'
import { FormContext } from '../context/FormContext';


function FormCompleted() {
  const { data } = useContext(FormContext);
  console.log(data)
  return (
    <>
   <h2>Thank you for completing the survey! 🎉 </h2>
      <p>Your feedback is important to us.</p>
      <p>{JSON.stringify(data)}</p>
  </>

  )
}

export default FormCompleted