import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import PostIcons from "../components/post-icons"
import Img from "gatsby-image"
import { DefaultLayout } from "../layouts/default-layout"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <DefaultLayout>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <PostIcons node={post} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </DefaultLayout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

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
