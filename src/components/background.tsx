import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  style?: React.CSSProperties;
  className?: string;
  image: string;
  overlay?: any[];
}

export const Background: React.FC<Props> = ({ children, style, className, image, overlay = [] }) => (
  <StaticQuery
    query={graphql`
      query {
        whyChoose: file(relativePath: { eq: "backgrounds/why-choose.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        quoteBG1: file(relativePath: { eq: "backgrounds/quote-bg-1.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        courses1: file(relativePath: { eq: "backgrounds/courses-1.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        courses2: file(relativePath: { eq: "backgrounds/courses-2.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        courses3: file(relativePath: { eq: "backgrounds/courses-3.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        headerImage1: file(relativePath: { eq: "backgrounds/header-image-1.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        bgMasthead: file(relativePath: { eq: "backgrounds/bg-masthead.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        applyingLipGloss: file(relativePath: { eq: "backgrounds/applying-lip-gloss.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        bodyMakeup: file(relativePath: { eq: "backgrounds/body-makeup.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        faceWithGoldEyeShadow: file(relativePath: { eq: "backgrounds/face-with-gold-eye-shadow.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        makeupArtistWorkingOnModel: file(relativePath: { eq: "backgrounds/makeup-artist-working-on-model.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <BackgroundImage fluid={[ ...overlay, data[image].childImageSharp.fluid ]} backgroundColor={`#040e18`} style={style} className={className}>
        {children}
      </BackgroundImage>
    )}
  />
);
