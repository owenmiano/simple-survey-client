import React from 'react';
import Card from 'react-bootstrap/Card';

function ResponseCards() {
  return (
    <div className="container">
      <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div className="col-md-4" style={{ marginTop: '20px' }}>
          <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Body>
              <Card.Title>Survey Response</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Full Name: Karim Kanji Murimi</Card.Subtitle>
              <Card.Text>
              <strong>Email Address:</strong> karim90@gmail.com
              
              </Card.Text>
              <Card.Text>
              <strong>Gender:</strong> Male
              
              </Card.Text>

              <Card.Text>
              <strong>Description:</strong> I am an experienced FrontEnd Engineer with over 6 years experience.
              
              </Card.Text>
              <Card.Text>
              <strong>Programming Stack:</strong> RAECT,VUE
              
              </Card.Text>
              
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>


            </Card.Body>
          </Card>
        </div>
    </div>
    </div>
  );
}

export default ResponseCards;
