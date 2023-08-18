import React from 'react';
import {Accordion, Container} from 'react-bootstrap';


const Education = () => {
  return (
    <Container>
      <h2 className='display-6 fw-bold'>My Education journey</h2>
      <p></p>
      <Container>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>St. John's Cathedral School | Year 2008-2018</Accordion.Header>
        <Accordion.Body>
          From Grade 1 to Grade 10
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Phinma-University of Pangasinan Dagupan city Campus | Year 2018-2020</Accordion.Header>
        <Accordion.Body>
          Senior High School education. Grade 11 and Grade 12.
        </Accordion.Body>
        <Accordion.Body>TVL-Programming</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Phinma-University of Pangasinan Dagupan city Campus | 2020 - Current</Accordion.Header>
        <Accordion.Body>
          From 1st year college until now 3rd year, Currently taking Bachelor of Science in Information Technology.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </Container>
    </Container>
  );
};

export default Education;
