/**
*
* NavLinkItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const getIsActive = (to, location) => {
  if (to === '/') {
    return location.pathname === '/';
  }

  return location.pathname.indexOf(to) > -1;
};

const NavLinkItem = ({ to, message, location }) => (
  <NavItem
    componentClass={Link}
    href={to}
    to={to}
    active={getIsActive(to, location)}
    eventKey={1}
  >
    <FormattedMessage {...message} />
  </NavItem>
);

NavLinkItem.propTypes = {
  to: PropTypes.string.isRequired,
  message: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default NavLinkItem;
