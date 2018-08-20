/**
*
* Header
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';

import NavLinkItem from 'components/elements/NavLinkItem';

const Header = ({ links, location }) => {
  const renderLinks = () => links.map(link => (
    <NavLinkItem
      {...{
        ...link,
        location,
        key: link.to,
      }}
    />
  ));

  return (
    <Navbar fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">HOME FINDER</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        {renderLinks()}
      </Nav>
    </Navbar>
  );
};

Header.propTypes = {
  links: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};

export default Header;
