import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";

function Review({formStep}) {
  const { data } = useContext(FormContext);
 console.log(formStep)
  const renderReviewData = () => {
    return Object.keys(data).map((key) => (
      <div key={key}>
        <p>Full Name: {JSON.stringify(data.fullName)}</p>
        <p>Email Address: {JSON.stringify(data.email)}</p>
        <p>Gender: {JSON.stringify(data.gender)}</p>
        <p>Description: {JSON.stringify(data.description)}</p>
        <p>Programming Stack: {JSON.stringify(data.programming_stack)}</p>
        <p>Certificate: {JSON.stringify(data.certificate)}</p>
      </div>
    ));
  };

  return (
    <div className={formStep === 6 ? "showForm" : "hideForm"}>
 
          <h2>Review Your Data</h2>
          {renderReviewData()}

    </div>
  );
}

export default Review;
     {/* {submitted ? (
        <div>
          <h2>Thank you for completing the survey! 🎉</h2>
          <p>Your feedback has been submitted successfully.</p>
        </div>
      ) : (
        <div> */}
                {/* </div> */}
      {/* )} */}