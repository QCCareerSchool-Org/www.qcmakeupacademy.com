import Img from 'gatsby-image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

export interface QuoteProps {
  stars: 1 | 2 | 3 | 4 | 5;
  text: string;
  name: string;
  title?: string;
  img?: any;
  className?: string;
}

export const Quote: React.FC<QuoteProps> = ({ stars, text, name, title = 'QC Makeup Academy Student', img, className }) => (
  <div className={className}>
    <div className="my-4">{Array(stars).fill(0).map((s, i) => (<FaStar key={i} size="24" className="text-primary mx-2" />))}</div>
    <p className="lead serif">{text}</p>
    {img
      ? (
        <div className="d-block">
          <Img alt={name} fluid={img} style={{ width: 50, height: 50, borderRadius: 25, display: 'inline-block', verticalAlign: 'middle' }} />
          <div style={{ marginLeft: 15, display: 'inline-block', verticalAlign: 'middle' }}>{name}<br /><span className="text-muted">{title}</span></div>
        </div>
      ) : <div>{name}<br /><span className="text-muted">{title}</span></div>
    }
  </div>
);
