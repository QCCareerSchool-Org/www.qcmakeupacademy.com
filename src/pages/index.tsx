import React from 'react';
import Container from 'react-bootstrap/Container';

import { Background } from '../components/background';
import { DefaultLayout } from '../layouts/default-layout';

const Index: React.FC = () => (
  <DefaultLayout>
    <Background image="bgMasthead">
      <section>
        <Container>
          <div style={{ height: 1200 }} />
        </Container>
      </section>
    </Background>
  </DefaultLayout>
);

export default Index;
