import React, { Component } from "react"
import { graphql } from "gatsby"
import PostIcons from "../components/post-icons"
import { DefaultLayout } from "../layouts/default-layout"

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    return (
      <DefaultLayout>
        <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        <PostIcons node={currentPage} />
        <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
      </DefaultLayout>
    )
  }
}

export default PageTemplate

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
