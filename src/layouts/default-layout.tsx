import PropTypes from 'prop-types';
import React from 'react';

import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Index } from './index';

interface Props {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<Props> = ({ children }) => (
  <Index>
    <Header />
    {children}
    <Footer />
  </Index>
);

DefaultLayout.propTypes = {
  children: PropTypes.object.isRequired,
};
