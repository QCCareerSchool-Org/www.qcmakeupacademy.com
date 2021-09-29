import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useScreenWidth } from '../hooks/useScreenWidth';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { useToggle } from '../hooks/useToggle';

import logoLight from '../images/q-light.svg';
import logo from '../images/q.svg';

type Props = {
  noHero?: boolean;
  className?: string;
};

export const Header = ({ noHero, className }: Props): ReactElement => {
  const screenWidth = useScreenWidth();
  const scrollPosition = useScrollPosition();
  const [ mobileMenu, toggleMobileMenu ] = useToggle(false);

  const maxPosition = 20;

  const mobile = screenWidth < 992;

  return (
    <Navbar
      id="main-nav"
      bg={scrollPosition > maxPosition ? 'light' : noHero ? 'dark' : undefined}
      variant={scrollPosition > maxPosition ? undefined : 'dark'}
      expand="lg"
      className={`${scrollPosition > maxPosition ? 'shadow-sm' : ''} ${mobileMenu && mobile ? 'opened' : 'closed'} ${mobile ? 'mobile' : 'desktop'} ${className}`}
    >
      <div className="container">
        <div id="nav-wrapper">
          <Navbar.Brand>
            <Link href="/"><a><Image src={scrollPosition > maxPosition ? logo : logoLight} alt="QC Makeup Academy" width="40" height="40" /></a></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" onClick={() => toggleMobileMenu()} />
          <Navbar.Collapse id="main-navbar" className="justify-content-end">
            <Nav>
              <NavDropdown title="Programs" id="programs-dropdown">
                <Link href="/programs/qc-makeup-academy"><a className="dropdown-item">QC Makeup Academy</a></Link>
                <Link href="/programs/qc-design-school"><a className="dropdown-item">QC Design School</a></Link>
                <Link href="/programs/qc-event-school"><a className="dropdown-item">QC Event School</a></Link>
                <Link href="/programs/qc-pet-studies"><a className="dropdown-item">QC Pet Studies</a></Link>
                <Link href="/programs/qc-wellness-studies"><a className="dropdown-item">QC Wellness Studies</a></Link>
                <Link href="/programs/additional-programs"><a className="dropdown-item">Additional Programs</a></Link>
                <Link href="/programs/combine-and-save"><a className="dropdown-item">Combine and Save</a></Link>
              </NavDropdown>
              <Link href="/admissions"><a className="nav-link">Admissions</a></Link>
              <Link href="/find-professionals"><a className="nav-link">Find Professionals</a></Link>
              <Link href="/contact"><a className="nav-link">Contact Us</a></Link>
              <Link href="https://enroll.qccareerschool.com"><a className="nav-link">Enroll Online</a></Link>
            </Nav>
            <a href="https://studentcenter.qccareerschool.com">
              {mobile
                ? <button className="btn btn-link">Student Log In</button>
                : <button className="btn btn-primary btn-sm">Student Log In</button>
              }
            </a>
          </Navbar.Collapse>
        </div>
      </div>
      <style jsx>{`
        #main-nav .btn.btn-link { padding: 0; text-decoration: none }
      `}</style>
    </Navbar>
  );
};
