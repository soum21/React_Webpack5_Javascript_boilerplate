import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

function NavbarLinks(props) {
  const {
    linkData,
    linkStyles,
    handleLinkClick,
    inactiveStyle,
    activeStyle,
  } = props;
  return (
    <Nav className="justify-content-center" style={{ flex: 1 }}>
      {Object.entries({
        ...linkData,
      }).map(([key, data]) => {
        return (
          <Nav.Item key={key}>
            <NavLink
              exact
              to={data.link}
              className={inactiveStyle}
              activeClassName={activeStyle}
              onClick={() => {
                handleLinkClick(event, data);
              }}
            >
              <span className={linkStyles}>{data.title}</span>
            </NavLink>
          </Nav.Item>
        );
      })}
    </Nav>
  );
}

export default NavbarLinks;
