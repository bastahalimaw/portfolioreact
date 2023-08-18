import React from 'react';
import SocialLinks from '../components/SocialLinks';
import { Button, Image, Row, Col, Nav } from 'react-bootstrap';



const Home = () => {
  return (
    <div className='d-flex justify-content-center align-items-center' >
      <Row>
        <Col>
          <Image src='pic ko.jpg' width={320}/>
        </Col>
        <Col>
          <h1 className='display-1 fw-bold text-dark'>Jhulyan Estrada</h1>
          <h3> Aspiring Web Devploper</h3>
          <p>
          I am 22 year old, 3rd year college BSIT student studied at Phinma-University of Pangasinan.
          Connecting with fellow tech enthusiasts is a passion of mine. I'm always eager to collaborate, share insights, and learn from others in this dynamic field. Don't hesitate to reach out if you're as excited about IT as I am!
          </p>
          <div className='d-flex align-items-center gap-2'>
            <Nav.Link href='/work'>
              <Button className='btn-lg' variant='dark'>View Work</Button>
            </Nav.Link>
            <SocialLinks />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
