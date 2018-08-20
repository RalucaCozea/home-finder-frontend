/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import HeaderComponent from 'components/elements/Header';
import linksConfig from './linksConfig';

const Header = ({ location }) => (
  <HeaderComponent
    {...{
      links: linksConfig(location),
      location,
    }}
  />
);

Header.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Header;
