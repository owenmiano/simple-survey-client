import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";

function Review({ formStep }) {
  const { data } = useContext(FormContext);
  console.log(data);
  const renderReviewData = () => {
    return (
      <div>
        <p>
          Full Name: <strong>{data.full_name}</strong>
        </p>
        <p>
          Email Address:<strong>{data.email_address}</strong>{" "}
        </p>
        <p>
          Gender: <strong>{data.gender}</strong>
        </p>
        <p>
          Description: <strong>{data.description}</strong>
        </p>
        <p>
          Programming Stack:{" "}
          <strong>{data.programming_stack.join(", ")}</strong>
        </p>
        <div>
  <p>Certificates Uploaded:</p>
  {data.certificate && data.certificate.length > 0 ? (
  <ul>
    {[...data.certificate].map((file, index) => (
      <li key={index}><strong>{file.name}</strong></li>
    ))}
  </ul>
) : <strong>No certificates selected</strong>}
</div> 


      </div>
    );
  };
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className={formStep === 6 ? "showForm" : "hideForm"}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        Review your response before submission
      </h2>
      <div className="review-card-content">{renderReviewData()}</div>
      <button className="next" onClick={() => onSubmit(data)}>
        Submit
      </button>
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
