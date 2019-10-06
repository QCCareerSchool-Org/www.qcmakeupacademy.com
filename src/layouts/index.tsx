/**
 * This is the base layout that wraps all other layouts.
 * It includes global styles, like bootstrap
 */

import PropTypes from 'prop-types';
import React from 'react';

import './index.scss';

export const Index: React.FC = ({ children }) => <>{children}</>;

Index.propTypes = {
  children: PropTypes.node.isRequired,
};
