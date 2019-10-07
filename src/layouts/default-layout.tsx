/**
 * This is the layout that wraps pages
 */

import PropTypes from 'prop-types';
import React from 'react';

import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Index } from './index';

export const DefaultLayout: React.FC = ({ children }) => (
  <Index>
    <div className="d-flex flex-column vh-100">
      <Header className="flex-shrink-0 fixed-top" />
      <main className="flex-shrink-0">
        {children}
      </main>
      <Footer className="mt-auto" />
    </div>
  </Index>
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
