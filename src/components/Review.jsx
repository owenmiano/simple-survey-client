import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";

function Review({ formStep }) {
  const { data,submitResponses,isLoading ,submissionSuccessful  } = useContext(FormContext);
  const renderReviewData = () => {
    return (
      <div>
        
        <p>
          Full Name: <strong>{data.full_name}</strong>
        </p>
        <p>
          Email Address: <strong>{data.email_address}</strong>{" "}
        </p>
        <p>
          Gender: <strong>{data.gender}</strong>
        </p>
        <p>
          Description: <strong>{data.description}</strong>
        </p>
        <p>
          Programming Stack:
          <strong>{data.programming_stack.join(", ")}</strong>
        </p>
        <div>
  <p>Certificates Uploaded:</p>
  {data.pdf && data.pdf.length > 0 ? (
  <ul>
    {[...data.pdf].map((file, index) => (
      <li key={index}><strong>{file.name}</strong></li>
    ))}
  </ul>
) : <strong>No certificates selected</strong>}
</div> 


      </div>
    );
  };

  return (
    <div className={formStep === 6 ? "showForm" : "hideForm"}>
      {submissionSuccessful ? (
      <div>
        <h2>Thank you for completing the survey! 🎉</h2>
        <p>Your feedback has been submitted successfully.</p>
      </div>
    ) : (
      <>
       <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        Review your response before submission
      </h2>
       <div className="review-card-content">{renderReviewData()}
      
      <button className="next" onClick={() => submitResponses(data)}>
      {isLoading ? "Submitting" : "Submit"}
      </button>
      </div>
      </>
     
      
    )}

      
    </div>
  );
}

export default Review;
{
  /* {submitted ? (
        <div>
          <h2>Thank you for completing the survey! 🎉</h2>
          <p>Your feedback has been submitted successfully.</p>
        </div>
      ) : (
        <div> */
}
{
  /* </div> */
}
{
  /* )} */
}
