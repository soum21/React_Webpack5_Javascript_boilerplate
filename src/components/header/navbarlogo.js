import React from 'react';
import { Navbar } from 'react-bootstrap';

function Navbarlogo(props) {
  const { imageSrc, navbarStyles } = props;
  return (
    <Navbar.Brand href="/" className="img-container">
      <img alt="" src={imageSrc} className={navbarStyles} />
    </Navbar.Brand>
  );
}

export default Navbarlogo;
