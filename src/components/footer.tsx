import { Link } from 'gatsby';
import React from 'react';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => (
  <footer className={`bg-black text-light py-4 ${className}`}>
    <div className="container">
      <small>&copy; {new Date().getFullYear()} QC Makeup Academy</small>
    </div>
  </footer>
);
