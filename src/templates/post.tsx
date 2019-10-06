import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Container from 'react-bootstrap/Container';

import { PostIcons } from '../components/post-icons';
import { DefaultLayout } from '../layouts/default-layout';

interface Props {
  data: any;
  edges?: any[];
}

const PostTemplate: React.FC<Props> = ({ data: { wordpressPost }, edges }) => (
  <DefaultLayout>

    <section>
      <Container>
        <h1 dangerouslySetInnerHTML={{ __html: wordpressPost.title }} />
        <PostIcons node={wordpressPost} />
      </Container>
    </section>

    <section>
      <Container>
        <div dangerouslySetInnerHTML={{ __html: wordpressPost.content }} />
      </Container>
    </section>

  </DefaultLayout>
);

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
};

export default PostTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      ...PostIcons
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
