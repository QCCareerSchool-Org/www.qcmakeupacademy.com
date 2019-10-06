import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FaBeer } from 'react-icons/fa';

import { Link } from 'gatsby';
import { Background } from '../components/background';
import { ScreenWidthContext } from '../layouts';
import { DefaultLayout } from '../layouts/default-layout';

const Index: React.FC = () => {
  const screenWidth = useContext(ScreenWidthContext);

  const mobile = screenWidth < 992;

  return (
    <DefaultLayout>
      <Background image="headerImage1" className="bg-dark text-light">
        <section>
          <Container style={{ height: 400 }}>
            <Row className="h-100">
              <Col className="align-self-center text-center">
                <h1 className="display-4 mb-4">Become a Professional<br />Makeup Artist</h1>
                <Button size="lg" style={{ letterSpacing: 2 }}>WATCH THE VIDEO</Button>
              </Col>
            </Row>
          </Container>
        </section>
      </Background>

      <section className="bg-primary text-light">
        <Container>
          <p>Screen width is {screenWidth}</p>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="text-center">
            <Col sm="12" md="4" className="lead"><FaBeer size="40" className="text-primary mb-2" /><br />Earn a certificate from the world’s leading online makeup school</Col>
            <Col sm="12" md="4" className="lead"><FaBeer size="40" className="text-primary mb-2" /><br />Get hands-on training from celebrity makeup artists</Col>
            <Col sm="12" md="4" className="lead"><FaBeer size="40" className="text-primary mb-2" /><br />Start your dream career as a professional makeup artist!</Col>
          </Row>
        </Container>
      </section>

      <section className="bg-darker text-light">
        <Container className="text-center">
          <h2 className="h1">QC Makeup Academy Courses</h2>
          <p className="lead">Choose from a variety of courses&mdash;unmatched by any other makeup school!</p>
          <p className="mb-5"><Link to="/online-makeup-courses/"><Button>VIEW ALL COURSES</Button></Link></p>
          <Row>
            <Col xs="12" md="4" className="mb-4 mb-md-0">
              <Background image="courses1" overlay={[ `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))` ]}>
                <div style={{ height: 300 }} className="d-flex flex-column justify-content-center">
                  <h3 className="text-shadow mb-3">Foundational<br />Training</h3>
                  <Button color="black" className="d-block align-self-center">VIEW COURSES</Button>
                </div>
              </Background>
            </Col>
            <Col xs="12" md="4" className="mb-4 mb-md-0">
              <Background image="courses3" overlay={[ `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))` ]}>
                <div style={{ height: 300 }} className="d-flex flex-column justify-content-center">
                  <h3 className="text-shadow mb-3">Advanced<br />Training</h3>
                  <Button color="black" className="d-block align-self-center">VIEW COURSES</Button>
                </div>
              </Background>
            </Col>
            <Col xs="12" md="4" className="mb-4 mb-md-0">
              <Background image="courses2" overlay={[ `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))` ]}>
                <div style={{ height: 300 }} className="d-flex flex-column justify-content-center">
                  <h3 className="text-shadow mb-3">Specialty<br />Training</h3>
                  <Button color="black" className="d-block align-self-center">VIEW COURSES</Button>
                </div>
              </Background>
            </Col>
          </Row>
        </Container>
      </section>

    </DefaultLayout>
  );
};

export default Index;
