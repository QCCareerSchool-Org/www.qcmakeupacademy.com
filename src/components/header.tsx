import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logoDark from '../images/qcma-logo-nav-dark.svg';
import logoLight from '../images/qcma-logo-nav-light.svg';

import { ScreenWidthContext } from '../providers/screen-width';
import { ScrollPositionContext } from '../providers/scroll-position';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {

  const screenWidth = useContext(ScreenWidthContext);
  const scrollPosition = useContext(ScrollPositionContext);
  const [ mobileMenu, setMobileMenu ] = useState(false);

  const logo = scrollPosition > 90 ? logoDark : logoLight;
  const mobile = screenWidth < 992;

  return (
    <Navbar
      id="main-nav"
      bg={scrollPosition > 90 ? 'light' : undefined}
      variant={scrollPosition > 90 ? undefined : 'dark'}
      expand="lg"
      className={`${mobileMenu && mobile ? 'opened' : 'closed'} ${className}`}
    >
      {/* <Container> */}
        <Navbar.Brand href="/">
          <img src={logo} alt="QC Makeup Academy" style={{ display: 'block', height: 20 }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => { setMobileMenu(m => !m); }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Courses" id="basic-nav-dropdown">
              <NavDropdown.Item href="/online-makeup-courses/">Overview</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/online-makeup-courses/master-makeup-artistry/">Master Makeup Artistry</NavDropdown.Item>
              <NavDropdown.Item href="/online-makeup-courses/makeup-artisty/">Makeup Artistry</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/online-makeup-courses/pro-makeup-workshop/">Pro Makeup Workshop</NavDropdown.Item>
              <NavDropdown.Item href="/online-makeup-courses/special-fx-makeup/">Special FX Makeup</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about/">About</Nav.Link>
            <Nav.Link href="/about/">Contact</Nav.Link>
          </Nav>
          <a href="https://enroll.qcmakeupacademy.com">
            {mobile
              ? <Button variant="link" className="caps p-0">Enroll Online</Button>
              : <Button className="caps">Enroll Online</Button>
            }
          </a>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
};
