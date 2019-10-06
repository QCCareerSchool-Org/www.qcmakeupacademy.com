import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { Quote, QuoteProps } from './quote';

type Type = 'MarindaAllred';

interface Props {
  type: Type;
  className?: string;
}

const quotes: { [key in Type]: QuoteProps } = {
  MarindaAllred: {
    name: 'Marinda Allred',
    stars: 5,
    text: `“I joined QC about 2 months ago and have already completed my Master Makeup Artistry course with all A’s. ` +
      `I am so thankful for everything they have taught me! I have enrolled in 4 more courses and can’t wait to earn ` +
      `additional certifications and grow more as an artist!”`,
  },
};

export const PreparedQuote: React.FC<Props> = ({ type, className }) => {
  const images = useStaticQuery(graphql`
  query {
    MarindaAllred: file(relativePath: { eq: "marinda.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 50) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
  }
`);

  return (
    <Quote
      name={quotes[type].name}
      stars={quotes[type].stars}
      text={quotes[type].text}
      img={images[type].childImageSharp.fluid}
      className={className}
    />
  );
};
