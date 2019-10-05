import React from 'react';
import Container from 'react-bootstrap/Container';

import { DefaultLayout } from '../layouts/default-layout';

const OnlineMakeupCourses: React.FC = () => (
  <DefaultLayout>
    <section style={{background: 'url(/bg-masthead.jpg)', backgroundPosition: '50% 50%', backgroundSize: 'cover' }}>
      <Container>
        <div style={{height: 1200}}/>
      </Container>
    </section>
  </DefaultLayout>
);

export default OnlineMakeupCourses;
