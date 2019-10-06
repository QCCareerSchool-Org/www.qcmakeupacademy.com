import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Background } from '../components/background';
import { DefaultLayout } from '../layouts/default-layout';
import SEO from "../components/seo"

const NotFoundPage = () => (
  <DefaultLayout>
    <SEO title="404: Not found" />
    <Background image="headerImage1" className="bg-dark text-light">
      <section>
        <Container style={{ height: 400 }}>
          <Row className="h-100">
            <Col className="align-self-center text-center">
              <h1 className="display-4 mb-4">Page Not Found</h1>
            </Col>
          </Row>
        </Container>
      </section>
    </Background>
  </DefaultLayout>
);

export default NotFoundPage
