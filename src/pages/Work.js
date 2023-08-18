import React from 'react';
import { Carousel, Image, Container,  Row, Col } from 'react-bootstrap';



const Work = () => {
  return (
    <Container>
      <Row>
      <Col>
        <h2 className='display-1 fw-bold'>
           My Work
        </h2>
        <p>Here are some of the projects I've worked on:</p>
        <ul>
          <li>
            <h4>Portfolio Website</h4>
            <p>HTML, CSS, JS</p>
          </li>
          <li>
            <h4>Home workout plan</h4>
            <p>Android Studio, Java</p>
          </li>
          <li>
            <h4>Expense Tracker</h4>
            <p>HTML, CSS, JS, PHP, MySQL</p>
          </li>
        </ul>
      </Col>
      <Col>
      <Carousel >
        <Carousel.Item>
          <Image src="port1.png" height={350} width={600}/>
          <Carousel.Caption>
            <h3>Portfolio Website</h3>
            <p>My first portfolio website activity.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="port2.jpg" height={350} width={550}/>
          <Carousel.Caption>
            <h3>Body work out app</h3>
            <p>Our Home workout plan app project. together with my groupmates Yuri Ronquillio and Rafael Estrada</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="port3.png"height={350} width={550}/>
          <Carousel.Caption>
            <h3>Expense Tracker</h3>
            <p>
              Our 2nd year 2nd sem group project. together with Allen De Guzman, Myro Mercado, Jeremy Ferrer, and Job Dispo
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Col>
    </Row>
    </Container>
  );
};

export default Work;
