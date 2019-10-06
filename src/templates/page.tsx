import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Container from 'react-bootstrap/Container';

import { PostIcons } from '../components/post-icons';
import { DefaultLayout } from '../layouts/default-layout';

interface Props {
  data: any;
}

const PageTemplate: React.FC<Props> = ({ data: { wordpressPage } }) => (
  <DefaultLayout>

    <section>
      <Container>
        <h1 dangerouslySetInnerHTML={{ __html: wordpressPage.title }} />
        <PostIcons node={wordpressPage} />
      </Container>
    </section>

    <section>
      <Container>
        <div dangerouslySetInnerHTML={{ __html: wordpressPage.content }} />
      </Container>
    </section>

  </DefaultLayout>
);

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PageTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`;
