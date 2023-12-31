import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import moment from "moment";

function ResponseCards({ responses, downloadCertificate }) {
  return (
    <div className="container">
      <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
        {responses.map((response) => (
          <div
            className="col-md-4"
            style={{ marginTop: "20px", justifyContent: "center" }}
            key={response.id}
          >
            <Card style={{ width: "18rem", margin: "10px" }}>
              <Card.Body>
                <Card.Title>Survey Response</Card.Title>
                <Card.Text className="mb-2 text-muted">
                  Full Name: <strong>{response.full_name}</strong>
                </Card.Text>
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
                  Programming Stack:{" "}
                  <strong>{response.programming_stack}</strong>
                </Card.Text>
                <Card.Text>Certificates:</Card.Text>
                <div className="certificates-links">
                  {Array.isArray(response.certificates) ? (
                    response.certificates.length > 0 ? (
                      <ul>
                        {response.certificates.map((certificate) => {
                          // Extract the file name from the path
                          const filePath = certificate.certificate_data;
                          const fileName = filePath.split("/").pop(); // Split path and get the last part (file name)

                          return (
                            <li key={certificate.certificateid}>
                              <Link
                                onClick={() =>
                                  downloadCertificate(certificate.certificateid, fileName)
                                }
                              >
                                {fileName}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      <p>No certificates available</p>
                    )
                  ) : (
                    // If it's not an array, convert it to an array
                    <ul>
                      <li key={response.certificates.certificateid}>
                        <Link
                          onClick={() =>
                            downloadCertificate(
                              response.certificates.certificateid                              ,
                              response.certificates.certificate_data.substring(
                                "uploads/".length
                              )
                            )
                          }
                        >
                          {response.certificates.certificate_data.substring(
                            "uploads/".length
                          )}
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </Card.Body>
              <Card.Footer className="text-muted">
                Date Responded:{" "}
                {moment(response.createdAt).format("YYYY/MM/DD hh:mm A")}
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResponseCards;
