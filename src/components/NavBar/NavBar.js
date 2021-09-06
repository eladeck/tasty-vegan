import React from 'react';
import { Container, Link } from './SryledNavBar';

const NavBar = () => {
    return (
      <Container>
        <Link to="/">Home</Link>
        <Link to="/food">Food</Link>
        <Link to="/other-page">Other page</Link>
      </Container>
    );
  }

  export default NavBar;