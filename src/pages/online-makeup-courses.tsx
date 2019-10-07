import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Background } from '../components/background';
import { PriceBox } from '../components/price-box';
import { SEO } from '../components/seo';
import { usePrice } from '../hooks/usePrice';
import { DefaultLayout } from '../layouts/default-layout';
import { LocationStateContext } from '../providers/location';

const OnlineMakeupCourses: React.FC = () => {

  const location = useContext(LocationStateContext);
  const courses = [ 'mz', 'mk', 'mw', 'sk', 'gb', 'ab' ];
  const [ mzPrice, mkPrice, mwPrice, skPrice, gbPrice, abPrice ] = usePrice(courses, location.countryCode, location.provinceCode);

  return (
    <DefaultLayout>
      <SEO title="Online Makeup Courses" />

      <Background image="topHeader3" className="bg-dark text-light">
        <section id="first-section">
          <Container>
            <Row>
              <Col className="align-self-center" xs="12" md="10" lg="6">
                <h1 className="display-4 mb-4 text-shadow">Courses &amp; Tuition at QC Makeup Academy</h1>
                <p className="lead text-shadow">Learn makeup online with QC’s flexible training courses! Choose a payment plan for an affordable makeup tuition and get a</p>
                <div className="bg-black text-light px-4 py-4 h1 w-auto d-inline-block">50% discount on<br />additional courses!</div>
              </Col>
            </Row>
          </Container>
        </section>
      </Background>

      <section>
        <Container>
          <h2 className="text-center">Foundational Makeup Artistry Courses</h2>
          <p className="text-center lead">Start here and get essential makeup training that will prepare you for a long and diverse career.</p>
          <Row>
            <Col xs="12" md="6" className="mb-4 mb-md-0">
              <Card>
                <Background image="mz" className="card-img text-light text-shadow px-4 py-5">
                  <h5 className="h1 mb-0">Master Makeup<br />Artistry</h5>
                </Background>
                <Card.Body>
                  <Card.Text>Learn the basics and more with QC’s most popular course!</Card.Text>
                  <Card.Text>
                    Over 7 training units, you’ll learn makeup foundations such as highlighting and contouring,
                    precision blending, corrective makeup, matching skin tones, and use these skills to create
                    full makeup applications. Then, you’ll move on to daytime, evening, and bridal makeup and
                    learn advanced techniques including editorial makeup, makeup for the entertainment industry,
                    and much more!  You’ll get tons of hands-on practice in this highly interactive course.
                  </Card.Text>
                  <Card.Text>
                    This course includes full business training and is perfect for anyone who wants to become a
                    professional makeup artist!
                  </Card.Text>
                  <Button className="caps mb-5">Read Course Outline</Button>
                  <PriceBox price={mzPrice} />
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" md="6">
              <Card>
                <Background image="mk" className="card-img text-light text-shadow px-4 py-5">
                  <h5 className="h1 mb-0">Makeup<br />Artistry</h5>
                </Background>
                <Card.Body>
                  <Card.Text>
                    If you’re not interested in being a professional makeup artist and just want to start by
                    learning the basics, the Makeup Artistry Course consists of the first three units of the
                    Master Makeup Artistry course only.
                  </Card.Text>
                  <Card.Text>
                    You’ll learn the fundamentals of makeup artistry including techniques for eyes, lips, blush,
                    highlighting, blending, contouring, and more. You’ll use these skills to do full makeup
                    applications on yourself and others.
                  </Card.Text>
                  <Card.Text>This course does not include any business training, so is ideal if you want to learn to do your own makeup!</Card.Text>
                  <Button className="caps mb-5">Read Course Outline</Button>
                  <PriceBox price={mkPrice} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-light">
        <Container>
          <h2 className="text-center">Advanced Makeup Courses</h2>
          <p className="text-center lead">If you’re already a trained MUA and want to enhance your skills, these courses are for you.</p>
          <p className="text-center mb-4">Remember, when you enroll in more than one course with QC, you get a 50% discount on each additional course.</p>
          <Row>
            <Col xs="12" md="6" className="mb-4">
              <Card>
                <Background image="mk" className="card-img text-light text-shadow px-4 py-5">
                  <h5 className="h1 mb-0">Pro Makeup<br />Workshop</h5>
                </Background>
                <Card.Body>
                  <Card.Text>Take your makeup skills to the next level in an advanced workshop with Nathan Johnson. Learn techniques used on celebrities!</Card.Text>
                  <Button className="caps mb-5">Read Course Outline</Button>
                  <PriceBox price={mwPrice} />
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" md="6" className="mb-4">
              <Card>
                <Background image="mk" className="card-img text-light text-shadow px-4 py-5">
                  <h5 className="h1 mb-0">Skincare<br /><br /></h5>
                </Background>
                <Card.Body>
                  <Card.Text>Become a Professional Skincare Consultant and add a huge revenue stream to your booming makeup business!</Card.Text>
                  <Button className="caps mb-5">Read Course Outline</Button>
                  <PriceBox price={skPrice} />
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" md="6" className="mb-4">
              <Card>
                <Background image="mk" className="card-img text-light text-shadow px-4 py-5">
                  <h5 className="h1 mb-0">Pro Makeup<br />Workshop</h5>
                </Background>
                <Card.Body>
                  <Card.Text>Take your makeup skills to the next level in an advanced workshop with Nathan Johnson. Learn techniques used on celebrities!</Card.Text>
                  <Button className="caps mb-5">Read Course Outline</Button>
                  <PriceBox price={mwPrice} />
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" md="6" className="mb-4">
              <Card>
                <Background image="mk" className="card-img text-light text-shadow px-4 py-5">
                  <h5 className="h1 mb-0">Skincare<br /><br /></h5>
                </Background>
                <Card.Body>
                  <Card.Text>Become a Professional Skincare Consultant and add a huge revenue stream to your booming makeup business!</Card.Text>
                  <Button className="caps mb-5">Read Course Outline</Button>
                  <PriceBox price={skPrice} />
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" md="6" className="mb-4 mb-md-0">
              <Card>
                <Background image="mk" className="card-img text-light text-shadow px-4 py-5">
                  <h5 className="h1 mb-0">Pro Makeup<br />Workshop</h5>
                </Background>
                <Card.Body>
                  <Card.Text>Take your makeup skills to the next level in an advanced workshop with Nathan Johnson. Learn techniques used on celebrities!</Card.Text>
                  <Button className="caps mb-5">Read Course Outline</Button>
                  <PriceBox price={mwPrice} />
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" md="6">
              c
            </Col>
          </Row>
        </Container>
      </section>

    </DefaultLayout>
  );
};

export default OnlineMakeupCourses;
