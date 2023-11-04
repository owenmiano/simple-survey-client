import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ResponseCards({ responses,downloadCertificate }) {
  console.log(responses)
  return (
    <div className="container">
      <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
        {responses.map((response) => (
          <div className="col-md-4" style={{ marginTop: "20px",justifyContent: "center" }} key={response.id}>
            <Card style={{ width: "18rem", margin: "10px" }}>
              <Card.Body>
                <Card.Title>Survey Response</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Full Name: {response.full_name}
                </Card.Subtitle>
                <Card.Text>
                  Email Address: <strong>{response.email_address}</strong>
                </Card.Text>
                <Card.Text>
                  Gender: <strong>{response.gender}</strong>
                </Card.Text>

                <Card.Text>
                  Description: <strong>{response.description}</strong>
                </Card.Text>
                <Card.Text>
                  Programming Stack: <strong>{response.programming_stack}</strong>
                </Card.Text>
                <div className="certificates-links">
  {response.Certificates && response.Certificates.length > 0 ? (
    <ul>
      {response.Certificates.map((certificate) => {
        // Extract the file name from the path
        const filePath = certificate.certificate_data;
        const fileName = filePath.split('/').pop(); // Split path and get the last part (file name)

        return (
          <li key={certificate.id}>
            <Link onClick={()=>downloadCertificate(certificate.id,fileName)}>{fileName}</Link>
            {/* <strong>{fileName}</strong> */}
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No certificates available</p>
  )}
</div>


              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResponseCards;

// {data.certificate && data.certificate.length > 0 ? (
//   <ul>
//     {[...data.certificate].map((file, index) => (
//       <li key={index}><strong>{file.name}</strong></li>
//     ))}
//   </ul>
// ) : <strong>No certificates selected</strong>}