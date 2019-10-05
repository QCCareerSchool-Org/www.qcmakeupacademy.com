import { Link } from 'gatsby';
import React from 'react';

export const Footer = () => (
  <footer className="bg-black text-light py-4">
    <div className="container">
      &copy; {new Date().getFullYear()} QC Makeup Academy
    </div>
    <Link to="/">Home</Link>
    <Link to="/online-makeup-courses/">Courses</Link>
  </footer>
);
