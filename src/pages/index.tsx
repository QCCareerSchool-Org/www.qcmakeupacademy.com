import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FaBeer } from 'react-icons/fa';

import { Background } from '../components/background';
import { PreparedQuote } from '../components/prepared-quote';
import { SEO } from '../components/seo';
import { ScreenWidthContext } from '../contexts/screen-width';
import { DefaultLayout } from '../layouts/default-layout';

import BlackParalax from '../images/Black-Paralax.svg';

const Index: React.FC = () => {
  const screenWidth = useContext(ScreenWidthContext);

  let tileHeight = 300;
  if (screenWidth >= 1200) {
    tileHeight = 350;
  } else if (screenWidth >= 992) {
    tileHeight = 290;
  } else if (screenWidth >= 768) {
    tileHeight = 210;
  }

  const backgroundStyle: React.CSSProperties = screenWidth >= 992 ? { backgroundPosition: '100% 50%' } : { backgroundPosition: '90% 50%' };

  const images = useStaticQuery(graphql`
  query {
    katie: file(relativePath: { eq: "katie-berry.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 665) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    },
  }`);

  return (
    <DefaultLayout>

      <SEO title="Become a Professional Makeup Artist" />

      <Background image="headerImage1" style={backgroundStyle} className="bg-dark text-light">
        <section>
          <Container style={{ height: 400 }}>
            <Row className="h-100">
              <Col className="align-self-center text-center">
                <h1 className="display-4 mb-4 text-shadow">Become a Professional<br />Makeup Artist</h1>
                <Button size="lg" className="caps">Watch the Video</Button>
              </Col>
            </Row>
          </Container>
        </section>
      </Background>

      <section>
        <Container>
          <Row className="text-center">
            <Col sm="12" md="4" className="lead mb-5 mb-md-0">
              <FaBeer size="40" className="text-primary mb-2" />
              <br />
              Earn a certificate from the world’s leading online makeup school
            </Col>
            <Col sm="12" md="4" className="lead mb-5 mb-md-0">
              <FaBeer size="40" className="text-primary mb-2" />
              <br />
              Get hands-on training from celebrity makeup artists
            </Col>
            <Col sm="12" md="4" className="lead">
              <FaBeer size="40" className="text-primary mb-2" />
              <br />
              Start your dream career as a professional makeup artist!
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-darker text-light">
        <Container className="text-center">
          <h2 className="h1">QC Makeup Academy Courses</h2>
          <p className="lead">Choose from a variety of courses&mdash;unmatched by any other makeup school!</p>
          <p className="mb-5"><Link to="/online-makeup-courses/"><Button className="caps">View All Courses</Button></Link></p>
          <Row>
            <Col xs="12" md="4" className="mb-4 mb-md-0">
              <Background image="courses1" overlay={[ `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))` ]}>
                <div style={{ height: tileHeight }} className="d-flex flex-column justify-content-center">
                  <h3 className="text-shadow mb-3">Foundational<br />Training</h3>
                  <Button color="black" className="d-block align-self-center caps">View Courses</Button>
                </div>
              </Background>
            </Col>
            <Col xs="12" md="4" className="mb-4 mb-md-0">
              <Background image="courses3" overlay={[ `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))` ]}>
                <div style={{ height: tileHeight }} className="d-flex flex-column justify-content-center">
                  <h3 className="text-shadow mb-3">Advanced<br />Training</h3>
                  <Button color="black" className="d-block align-self-center caps">View Courses</Button>
                </div>
              </Background>
            </Col>
            <Col xs="12" md="4" className="mb-4 mb-md-0">
              <Background image="courses2" overlay={[ `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))` ]}>
                <div style={{ height: tileHeight }} className="d-flex flex-column justify-content-center">
                  <h3 className="text-shadow mb-3">Specialty<br />Training</h3>
                  <Button color="black" className="d-block align-self-center caps">View Courses</Button>
                </div>
              </Background>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="text-center">
          <PreparedQuote type="MarindaAllred" className="mb-4" />
          <Button variant="outline-primary">READ MORE REVIEWS</Button>
        </Container>
      </section>

      <section style={{ background: `linear-gradient(0deg, rgba(224,224,224,0.95), rgba(224,224,224,0.95)), url(${BlackParalax}) repeat center top scroll` }}>
        <Container className="text-center">
          <h2 className="h1 mb-4">How It Works</h2>
          <Row>
            <Col xs="12" md="8" lg="4" className="offset-md-2 offset-lg-0 d-flex mb-4 mb-lg-0">
              <Card className="d-block flex-fill">
                <Card.Body>
                  <h2 className="h1">Step 1:</h2>
                  <hr className="mx-auto my-4" style={{ width: 110 }} />
                  <h3 className="h4">Enroll Online<br />Today</h3>
                  <h4 className="h6 mb-4">&amp; Access Your<br />Course Materials</h4>
                  <ul className="text-left">
                    <li>Receive your course materials and FREE bonus makeup kit in the mail</li>
                    <li>Access all course texts &amp; videos through QC’s Online Student Center</li>
                    <li>Start your training right away!</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" md="8" lg="4" className="offset-md-2 offset-lg-0 d-flex mb-4 mb-lg-0">
              <Card className="d-block flex-fill">
                <Card.Body>
                  <h2 className="h1">Step 2:</h2>
                  <hr className="mx-auto my-4" style={{ width: 110 }} />
                  <h3 className="h4">Complete Your<br />Makeup Training</h3>
                  <h4 className="h6 mb-4">Submit Your Assignments &amp;<br />Review Your Feedback</h4>
                  <ul className="text-left">
                    <li>Watch video tutorials</li>
                    <li>Read and highlight course books</li>
                    <li>Upload your work to the Online Student Center</li>
                    <li>Receive feedback on each assignment from your personal tutor!</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" md="8" lg="4" className="offset-md-2 offset-lg-0 d-flex">
              <Card className="d-block flex-fill">
                <Card.Body>
                  <h2 className="h1">Step 3:</h2>
                  <hr className="mx-auto my-4" style={{ width: 110 }} />
                  <h3 className="h4">Become a Certified<br />Makeup Artist</h3>
                  <h4 className="h6 mb-4">Graduate from QC Makeup<br />Academy!</h4>
                  <ul className="text-left">
                    <li>Receive your certification from a recognized &amp; accredited online school</li>
                    <li>Get lifetime access to course materials &amp; updated content</li>
                    <li>Enjoy 50% off any additional course</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <Row className="no-gutters">
        <Col xs="12" lg="6" className="d-flex align-items-center">
          <section className="text-center mx-auto" style={{ paddingLeft: 30, paddingRight: 30, maxWidth: 540 }}>
            <PreparedQuote type="MarindaAllred" className="mb-4" />
            <Button variant="outline-primary" className="caps">Read More Reviews</Button>
          </section>
        </Col>
        <Col xs="12" lg="6" className="d-flex flex-row align-items-stretch" >
          <Background image="quoteBG1" overlay={[ `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))` ]} style={{ flex: 1 }}>
            <section className="text-light text-shadow text-center d-flex align-items-center" style={{ paddingLeft: 30, paddingRight: 30, width: '100%', minHeight: screenWidth >= 992 ? 600 : 400 }}>
              <div style={{ width: '100%' }}>
                <h3 className="display-4">Start Your Journey</h3>
                <h4 className="mb-4">Build your skills in makeup artistry today!</h4>
                <Button className="caps">Enroll Now</Button>
              </div>
            </section>
          </Background>
        </Col>
      </Row>

      <Row className="no-gutters">
        {screenWidth >= 992
          ? (
            <Col xs="12" lg="6" className="d-flex flex-row align-items-stretch" >
              <Background image="whyChoose" style={{ flex: 1 }}>
                <section style={{ paddingLeft: 30, paddingRight: 30, width: '100%', minHeight: screenWidth >= 992 ? 600 : 400 }} />
              </Background>
            </Col>
          ) : null
        }
        <Col xs="12" lg="6" className="d-flex align-items-center">
          <section className="text-left mx-auto" style={{ paddingLeft: 30, paddingRight: 30, maxWidth: 540 }}>
            <h3 className="h1 mb-4">Why Choose QC Makeup Academy?</h3>
            <ul className="no-indent">
              <li>Earn an MUA certification from a top-rated makeup school</li>
              <li>Benefit from a unique one-on-one learning experience</li>
              <li>Become a member of a supportive MUA community</li>
              <li>Receive a professional makeup starter kit when you enroll</li>
              <li>Get product discounts from high quality makeup brands</li>
            </ul>
          </section>
        </Col>
      </Row>

      <section className="text-center" style={{ background: '#f1f1f3' }}>
        <Container>
          <Row>
            <Col xs="12" md="10" lg="8" className="offset-md-1 offset-lg-2">
              <h2 className="h1">Featured Student</h2>
              <h3 className="h5 text-primary">Katie Berry</h3>
              <p>“Bringing a woman’s inner glow to the surface is a passion of mine. Making a Woman feel confident and beautiful is my end goal at any of my consultations.”</p>
              <Img
                fluid={images.katie.childImageSharp.fluid}
                alt="Katie Berry"
                className="d-block mx-auto mb-5"
                style={{ maxWidth: 665 }}
              />
              <Button variant="outline-primary" className="caps">See More Students</Button>
            </Col>
          </Row>
        </Container>
      </section>

    </DefaultLayout>
  );
};

export default Index;
