import React, { useState } from 'react';
import { Container, Navbar, Form, Button } from 'react-bootstrap';
import { NavbarSettings } from '../../config';
import { images } from '../../assests';

import styles from './styles.css';
import PropTypes from 'prop-types';
import Navbarlogo from './navbarlogo';
import NavbarLinks from './navbarLinks';

function Header(props) {
  const [navbarToggle, setNavBarToggle] = useState(false);

  function navBarClick(e) {
    e.preventDefault();
    setNavBarToggle(navbarToggle ? false : true);
  }

  function handleLinkClick(e, data) {
    e.preventDefault();
    console.log(data);
    setNavBarToggle(false);
  }

  return (
    <Navbar
      className={`py-0 ${styles.navbar}`}
      expand="lg"
      // fixed="top"
      expanded={navbarToggle}
    >
      <Navbarlogo imageSrc={images.headerLogo} navbarStyles={styles.logo} />

      <Navbar.Toggle
        className="ml-3 mb-2"
        aria-controls="responsive-navbar-nav"
        onClick={() => {
          navBarClick(event);
        }}
      >
        {!navbarToggle ? (
          <i className={`fa fa-bars ${styles.barIcon}`}></i>
        ) : (
          <i className={`fa fa-times ${styles.closeIcon}`}></i>
        )}
      </Navbar.Toggle>

      <Navbar.Collapse id="basic-navbar-nav ">
        <NavbarLinks
          linkData={NavbarSettings}
          handleLinkClick={handleLinkClick}
          linkStyles={styles.navLinkTitle}
          linkColor={styles.navLinkColor}
          inactiveStyle={styles['main-nav']}
          activeStyle={styles['main-nav-active']}
        />

        {!navbarToggle ? (
          <Form inline>
            <Button className="mr-sm-2" variant="transparent">
              <img
                alt=""
                src={images.serachIcon}
                className={styles.searchIcon}
              />
            </Button>
          </Form>
        ) : null}
      </Navbar.Collapse>
    </Navbar>
  );
}

Header.propTypes = {};

export default Header;
